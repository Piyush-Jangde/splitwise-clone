const crypto = require("crypto");

const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

function generateInviteCode() {
  return crypto.randomBytes(8).toString("hex");
}

const createGroup = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Group name is required");
  }

  const group = await prisma.group.create({
    data: {
      name,
      ownerId: req.user.id,
      inviteCode: generateInviteCode(),
      members: {
        create: {
          userId: req.user.id,
        },
      },
    },
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      members: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phoneNumber: true,
            },
          },
        },
      },
    },
  });

  res.status(201).json({
    success: true,
    message: "Group created successfully",
    group,
  });
});

const getMyGroups = asyncHandler(async (req, res) => {
  const groups = await prisma.group.findMany({
    where: {
      members: {
        some: {
          userId: req.user.id,
        },
      },
    },
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      members: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  res.json({
    success: true,
    groups,
  });
});

const getGroupById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const group = await prisma.group.findFirst({
    where: {
      id,
      members: {
        some: {
          userId: req.user.id,
        },
      },
    },
    include: {
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      members: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phoneNumber: true,
              profilePhotoUrl: true,
            },
          },
        },
      },
      expenses: true,
      settlements: true,
      activities: true,
    },
  });

  if (!group) {
    throw new ApiError(404, "Group not found or access denied");
  }

  res.json({
    success: true,
    group,
  });
});

const renameGroup = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Group name is required");
  }

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: id,
        userId: req.user.id,
      },
    },
  });

  if (!membership) {
    throw new ApiError(403, "Only group members can rename this group");
  }

  const group = await prisma.group.update({
    where: { id },
    data: { name },
  });

  res.json({
    success: true,
    message: "Group renamed successfully",
    group,
  });
});

const deleteGroup = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const group = await prisma.group.findUnique({
    where: { id },
  });

  if (!group) {
    throw new ApiError(404, "Group not found");
  }

  if (group.ownerId !== req.user.id) {
    throw new ApiError(403, "Only the group owner can delete this group");
  }

  await prisma.group.delete({
    where: { id },
  });

  res.json({
    success: true,
    message: "Group deleted successfully",
  });
});

module.exports = {
  createGroup,
  getMyGroups,
  getGroupById,
  renameGroup,
  deleteGroup,
};