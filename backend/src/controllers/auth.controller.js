const bcrypt = require("bcryptjs");

const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const generateToken = require("../utils/generateToken");

const register = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  if (!fullName || !email || !phoneNumber || !password) {
    throw new ApiError(400, "Full name, email, phone number and password are required");
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
      phoneNumber,
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

  if (!user || !user.passwordHash) {
    throw new ApiError(401, "Invalid email or password");
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
};