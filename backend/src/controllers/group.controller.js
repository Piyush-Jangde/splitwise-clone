const crypto = require("crypto");

const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");
const {createActivity} = require("../services/activity.service");

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

  await createActivity({
    actorId: req.user.id,
    groupId: group.id,
    activityType: "MEMBER_ADDED",
    entityId: req.user.id,
    metadata: {
        message: `${req.user.fullName} created the group`,
        groupName: group.name,
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
      expenses: {
        include: {
          payer: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          creator: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
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

  await createActivity({
    actorId: req.user.id,
    groupId: id,
    activityType: "GROUP_RENAMED",
    entityId: id,
    metadata: {
        newName: name,
    },
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

  await createActivity({
    actorId: req.user.id,
    groupId: id,
    activityType: "GROUP_DELETED",
    entityId: id,
    metadata: {
        groupName: group.name,
    },
  });

  await prisma.group.delete({
    where: { id },
  });

  res.json({
    success: true,
    message: "Group deleted successfully",
  });
});

const addMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const group = await prisma.group.findUnique({
    where: { id },
  });

  if (!group) {
    throw new ApiError(404, "Group not found");
  }

  if (group.ownerId !== req.user.id) {
    throw new ApiError(403, "Only group owner can add members");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const existingMember = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: id,
        userId,
      },
    },
  });

  if (existingMember) {
    throw new ApiError(409, "User is already a group member");
  }

  const member = await prisma.groupMember.create({
    data: {
      groupId: id,
      userId,
    },
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
  });

  await createActivity({
    actorId: req.user.id,
    groupId: id,
    activityType: "MEMBER_ADDED",
    entityId: userId,
    metadata: {
        addedUserId: userId,
        addedUserName: user.fullName,
    },
  });

  res.status(201).json({
    success: true,
    message: "Member added successfully",
    member,
  });
});

const removeMember = asyncHandler(async (req, res) => {
  const { id, userId } = req.params;

  const group = await prisma.group.findUnique({
    where: { id },
  });

  if (!group) {
    throw new ApiError(404, "Group not found");
  }

  if (group.ownerId !== req.user.id) {
    throw new ApiError(403, "Only group owner can remove members");
  }

  if (group.ownerId === userId) {
    throw new ApiError(400, "Owner cannot be removed from the group");
  }

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: id,
        userId,
      },
    },
  });

  if (!membership) {
    throw new ApiError(404, "Member not found in this group");
  }

  await prisma.groupMember.delete({
    where: {
      groupId_userId: {
        groupId: id,
        userId,
      },
    },
  });

  await createActivity({
    actorId: req.user.id,
    groupId: id,
    activityType: "MEMBER_REMOVED",
    entityId: userId,
    metadata: {
        removedUserId: userId,
    },
  });   

  res.json({
    success: true,
    message: "Member removed successfully",
  });
});

const joinGroupByInviteCode = asyncHandler(async (req, res) => {
  const { inviteCode } = req.params;

  const group = await prisma.group.findUnique({
    where: { inviteCode },
  });

  if (!group) {
    throw new ApiError(404, "Invalid invite code");
  }

  const existingMember = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: group.id,
        userId: req.user.id,
      },
    },
  });

  if (existingMember) {
    throw new ApiError(409, "You are already a member of this group");
  }

  const member = await prisma.groupMember.create({
    data: {
      groupId: group.id,
      userId: req.user.id,
    },
  });

  res.status(201).json({
    success: true,
    message: "Joined group successfully",
    member,
  });
});

module.exports = {
  createGroup,
  getMyGroups,
  getGroupById,
  addMember,
  removeMember,
  joinGroupByInviteCode,
  renameGroup,
  deleteGroup,
};