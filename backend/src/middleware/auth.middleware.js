const jwt = require("jsonwebtoken");

const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Not authorized, token missing");
  }

  const token = authHeader.split(" ")[1];

  let decoded;

  try {
    decoded=jwt.verify(token,process.env.JWT_SECRET);
  } catch (error) {
    throw new ApiError(401, "Not authorized, invalid or  expired token");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.userId,
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

  if (!user) {
    throw new ApiError(401, "Not authorized, user not found");
  }

  req.user = user;

  next();
});

module.exports = protect;