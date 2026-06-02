const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const {
  calculateRawBalances,
  calculateSimplifiedBalances,
} = require("../services/balance.service");

const getGroupBalances = asyncHandler(async (req, res) => {
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

  const expenses = await prisma.expense.findMany({
    where: { groupId },
    include: {
      participants: true,
    },
  });

  const settlements = await prisma.settlement.findMany({
    where: { groupId },
  });

  const rawBalances = calculateRawBalances(expenses, settlements);
  const simplifiedBalances = calculateSimplifiedBalances(rawBalances);

  res.json({
    success: true,
    rawBalances,
    simplifiedBalances,
  });
});

const getMyBalanceSummary = asyncHandler(async (req, res) => {
  const groupMemberships = await prisma.groupMember.findMany({
    where: {
      userId: req.user.id,
    },
    select: {
      groupId: true,
    },
  });

  const groupIds = groupMemberships.map((membership) => membership.groupId);

  const expenses = await prisma.expense.findMany({
    where: {
      groupId: {
        in: groupIds,
      },
    },
    include: {
      participants: true,
    },
  });

  const settlements = await prisma.settlement.findMany({
    where: {
      groupId: {
        in: groupIds,
      },
    },
  });

  const rawBalances = calculateRawBalances(expenses, settlements);

  let totalOwed = 0;
  let totalReceivable = 0;

  for (const balance of rawBalances) {
    if (balance.debtorId === req.user.id) {
      totalOwed += balance.amount;
    }

    if (balance.creditorId === req.user.id) {
      totalReceivable += balance.amount;
    }
  }

  totalOwed = Number(totalOwed.toFixed(2));
  totalReceivable = Number(totalReceivable.toFixed(2));

  res.json({
    success: true,
    summary: {
      totalOwed,
      totalReceivable,
      netBalance: Number((totalReceivable - totalOwed).toFixed(2)),
    },
  });
});

module.exports = {
  getGroupBalances,
  getMyBalanceSummary,
};