const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const {createActivity}= require("../services/activity.service");

const createSettlement = asyncHandler(async (req, res) => {
  const {
    amount,
    payerId,
    receiverId,
    groupId,
    note,
    screenshotUrl,
  } = req.body;

  if (!amount || !payerId || !receiverId || !groupId) {
    throw new ApiError(400, "Amount, payer, receiver and group are required");
  }

  if (payerId === receiverId) {
    throw new ApiError(400, "Payer and receiver cannot be the same user");
  }

  if (req.user.id !== payerId) {
  throw new ApiError(403,"You can only record settlements made by yourself");
  }

  const requesterMembership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId: req.user.id,
      },
    },
  });

  if (!requesterMembership) {
    throw new ApiError(403, "You are not a member of this group");
  }

  const payerMembership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId: payerId,
      },
    },
  });

  if (!payerMembership) {
    throw new ApiError(400, "Payer must be a group member");
  }

  const receiverMembership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId: receiverId,
      },
    },
  });

  if (!receiverMembership) {
    throw new ApiError(400, "Receiver must be a group member");
  }

  const settlement = await prisma.settlement.create({
    data: {
      amount,
      payerId,
      receiverId,
      groupId,
      note,
      screenshotUrl,
    },
    include: {
      payer: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      receiver: {
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
  });

  await createActivity({
    actorId: req.user.id,
    groupId,
    activityType: "SETTLEMENT_CREATED",
    entityId: settlement.id,
    metadata: {
        amount: settlement.amount,
        payerId,
        receiverId,
        note,
    },
  });

  res.status(201).json({
    success: true,
    message: "Settlement recorded successfully",
    settlement,
  });
});

const getGroupSettlements = asyncHandler(async (req, res) => {
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

  const settlements = await prisma.settlement.findMany({
    where: { groupId },
    include: {
      payer: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
      receiver: {
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
    settlements,
  });
});

module.exports = {
  createSettlement,
  getGroupSettlements,
};