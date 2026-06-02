const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const getGroupActivity = asyncHandler(async (req, res) => {
  const { groupId } = req.params;

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId: req.user.id,
      },
    },
  });

  if (!membership) {
    throw new ApiError(403, "You are not a member of this group");
  }

  const activities = await prisma.activity.findMany({
    where: { groupId },
    include: {
      actor: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({
    success: true,
    activities,
  });
});

const getMyActivity = asyncHandler(async (req, res) => {
  const memberships = await prisma.groupMember.findMany({
    where: {
      userId: req.user.id,
    },
    select: {
      groupId: true,
    },
  });

  const groupIds = memberships.map((membership) => membership.groupId);

  const activities = await prisma.activity.findMany({
    where: {
      OR: [
        { actorId: req.user.id },
        {
          groupId: {
            in: groupIds,
          },
        },
      ],
    },
    include: {
      actor: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      group: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({
    success: true,
    activities,
  });
});

module.exports = {
  getGroupActivity,
  getMyActivity,
};