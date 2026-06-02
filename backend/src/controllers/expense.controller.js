const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const {
  calculateEqualSplit,
  calculateUnequalSplit,
  calculatePercentageSplit,
  calculateShareSplit,
} = require("../services/split.service");
const {createActivity}=require("../services/activity.service");


function calculateSplits(splitType, amount, participants) {
  if (splitType === "EQUAL") {
    return calculateEqualSplit(
      amount,
      participants.map((p) => p.userId)
    );
  }

  if (splitType === "UNEQUAL") {
    return calculateUnequalSplit(participants);
  }

  if (splitType === "PERCENTAGE") {
    return calculatePercentageSplit(amount, participants);
  }

  if (splitType === "SHARE") {
    return calculateShareSplit(amount, participants);
  }

  throw new ApiError(400, "Invalid split type");
}

const createExpense = asyncHandler(async (req, res) => {
  const {
    description,
    amount,
    splitType,
    payerId,
    groupId,
    participants,
    receiptUrl,
  } = req.body;

  if (!description || !amount || !splitType || !payerId || !groupId) {
    throw new ApiError(400, "Description, amount, split type, payer and group are required");
  }

  if (!participants || !Array.isArray(participants) || participants.length === 0) {
    throw new ApiError(400, "Participants are required");
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

  for (const participant of participants) {
    const membership = await prisma.groupMember.findUnique({
      where: {
        groupId_userId: {
          groupId,
          userId: participant.userId,
        },
      },
    });

    if (!membership) {
      throw new ApiError(400, "All participants must be group members");
    }
  }

  const calculatedSplits = calculateSplits(splitType, amount, participants);

  const expense = await prisma.expense.create({
    data: {
      description,
      amount,
      splitType,
      payerId,
      creatorId: req.user.id,
      groupId,
      receiptUrl,
      participants: {
        create: calculatedSplits.map((split) => ({
          userId: split.userId,
          amountOwed: split.amountOwed,
          percentage: split.percentage,
          shares: split.shares,
        })),
      },
    },
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
      participants: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
    },
  });

  await createActivity({
    actorId: req.user.id,
    groupId,
    activityType: "EXPENSE_CREATED",
    entityId: expense.id,
    metadata: {
        description: expense.description,
        amount: expense.amount,
        splitType: expense.splitType,
    },
  });

  res.status(201).json({
    success: true,
    message: "Expense created successfully",
    expense,
  });
});

const getGroupExpenses = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: id,
        userId: req.user.id,
      },
    },
  });

  if (!membership) {
    throw new ApiError(403, "You are not a member of this group");
  }

  const expenses = await prisma.expense.findMany({
    where: {
      groupId: id,
    },
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
      participants: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json({
    success: true,
    expenses,
  });
});

const getExpenseById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const expense = await prisma.expense.findUnique({
    where: { id },
    include: {
      group: true,
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
      participants: {
        include: {
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
    },
  });

  if (!expense) {
    throw new ApiError(404, "Expense not found");
  }

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: expense.groupId,
        userId: req.user.id,
      },
    },
  });

  if (!membership) {
    throw new ApiError(403, "You cannot access this expense");
  }

  res.json({
    success: true,
    expense,
  });
});

async function getExpenseWithGroup(expenseId) {
  return prisma.expense.findUnique({
    where: { id: expenseId },
    include: {
      group: true,
    },
  });
}

//checks if the user has the permission to edit/delete the expense
function canModifyExpense(expense, userId) {
  return (
    expense.creatorId === userId ||
    expense.group.ownerId === userId
  );
}

const updateExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const {
    description,
    amount,
    splitType,
    payerId,
    participants,
    receiptUrl,
  } = req.body;

  const existingExpense = await getExpenseWithGroup(id);

  if (!existingExpense) {
    throw new ApiError(404, "Expense not found");
  }

  if (!canModifyExpense(existingExpense, req.user.id)) {
    throw new ApiError(403, "Only expense creator or group owner can edit this expense");
  }

  if (!description || !amount || !splitType || !payerId) {
    throw new ApiError(400, "Description, amount, split type and payer are required");
  }

  if (!participants || !Array.isArray(participants) || participants.length === 0) {
    throw new ApiError(400, "Participants are required");
  }

  const payerMembership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId: existingExpense.groupId,
        userId: payerId,
      },
    },
  });

  if (!payerMembership) {
    throw new ApiError(400, "Payer must be a group member");
  }

  for (const participant of participants) {
    const membership = await prisma.groupMember.findUnique({
      where: {
        groupId_userId: {
          groupId: existingExpense.groupId,
          userId: participant.userId,
        },
      },
    });

    if (!membership) {
      throw new ApiError(400, "All participants must be group members");
    }
  }

  const calculatedSplits = calculateSplits(splitType, amount, participants);

  const updatedExpense = await prisma.$transaction(async (tx) => {
    await tx.expenseParticipant.deleteMany({
      where: {
        expenseId: id,
      },
    });

    return tx.expense.update({
      where: { id },
      data: {
        description,
        amount,
        splitType,
        payerId,
        receiptUrl,
        participants: {
          create: calculatedSplits.map((split) => ({
            userId: split.userId,
            amountOwed: split.amountOwed,
            percentage: split.percentage,
            shares: split.shares,
          })),
        },
      },
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
        participants: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });
  });

  await createActivity({
    actorId: req.user.id,
    groupId: existingExpense.groupId,
    activityType: "EXPENSE_UPDATED",
    entityId: updatedExpense.id,
    metadata: {
        description: updatedExpense.description,
        amount: updatedExpense.amount,
        splitType: updatedExpense.splitType,
    },
  });

  res.json({
    success: true,
    message: "Expense updated successfully",
    expense: updatedExpense,
  });
});

const deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const existingExpense = await getExpenseWithGroup(id);

  if (!existingExpense) {
    throw new ApiError(404, "Expense not found");
  }

  if (!canModifyExpense(existingExpense, req.user.id)) {
    throw new ApiError(403, "Only expense creator or group owner can delete this expense");
  }

  await prisma.expense.delete({
    where: { id },
  });

  await createActivity({
    actorId: req.user.id,
    groupId: existingExpense.groupId,
    activityType: "EXPENSE_DELETED",
    entityId: id,
    metadata: {
        description: existingExpense.description,
        amount: existingExpense.amount,
    },
  });

  res.json({
    success: true,
    message: "Expense deleted successfully",
  });
});

module.exports = {
  createExpense,
  getGroupExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};