const bcrypt = require("bcryptjs");

const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const generateToken = require("../utils/generateToken");

const {OAuth2Client} =require("google-auth-library");

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const googleLogin = asyncHandler(async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    throw new ApiError(400, "Google credential is required");
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const googleId = payload.sub;
  const email = payload.email;
  const fullName = payload.name || "Google User";
  const profilePhotoUrl = payload.picture || null;

  if (!email) {
    throw new ApiError(400, "Google account email is required");
  }

  let user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        fullName,
        email,
        phoneNumber: null,
        profilePhotoUrl,
        googleId,
        authProvider: "GOOGLE",
      },
    });
  } else if (!user.googleId) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        googleId,
        profilePhotoUrl: user.profilePhotoUrl || profilePhotoUrl,
      },
    });
  }

  const token = generateToken(user.id);

  res.json({
    success: true,
    message: "Google login successful",
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      username: user.username,
      profilePhotoUrl: user.profilePhotoUrl,
      authProvider: user.authProvider,
    },
    token,
  });
});

const register = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  if (!fullName || !email || !password) {
    throw new ApiError(400, "Full name, email, and password are required");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      phoneNumber: phoneNumber || null,
      passwordHash,
      authProvider: "EMAIL_PASSWORD",
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      phoneNumber: true,
      username: true,
      profilePhotoUrl: true,
      authProvider: true,
      createdAt: true,
    },
  });

  const token = generateToken(user.id);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
    token,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (user.authProvider === "GOOGLE" && !user.passwordHash) {
    throw new ApiError(400,"This account uses Google Sign-In");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken(user.id);

  res.json({
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      username: user.username,
      profilePhotoUrl: user.profilePhotoUrl,
      authProvider: user.authProvider,
    },
    token,
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});



module.exports = {
  register,
  login,
  getMe,
  googleLogin,
};