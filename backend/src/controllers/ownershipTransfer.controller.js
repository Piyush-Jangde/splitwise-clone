const prisma = require("../config/prisma");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const { createActivity } = require("../services/activity.service");

const createOwnershipTransfer = asyncHandler(async (req, res) => {
  const { groupId } = req.params;
  const { proposedOwnerId } = req.body;

  const group = await prisma.group.findUnique({
    where: { id: groupId },
  });

  if (!group) {
    throw new ApiError(404, "Group not found");
  }

  if (group.ownerId !== req.user.id) {
    throw new ApiError(
      403,
      "Only the current owner can transfer ownership"
    );
  }

  if (proposedOwnerId === req.user.id) {
    throw new ApiError(
      400,
      "Owner cannot transfer ownership to themselves"
    );
  }

  const membership = await prisma.groupMember.findUnique({
    where: {
      groupId_userId: {
        groupId,
        userId: proposedOwnerId,
      },
    },
  });

  if (!membership) {
    throw new ApiError(
      400,
      "Proposed owner must be a group member"
    );
  }

  const existingTransfer =
    await prisma.ownershipTransfer.findFirst({
      where: {
        groupId,
        status: "PENDING",
      },
    });

  if (existingTransfer) {
    throw new ApiError(
      409,
      "A pending ownership transfer already exists"
    );
  }

  const transfer =
    await prisma.ownershipTransfer.create({
      data: {
        groupId,
        currentOwnerId: req.user.id,
        proposedOwnerId,
      },
    });

  res.status(201).json({
    success: true,
    message: "Ownership transfer request created",
    transfer,
  });
});

const acceptOwnershipTransfer = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const transfer =
    await prisma.ownershipTransfer.findUnique({
      where: { id },
    });

  if (!transfer) {
    throw new ApiError(
      404,
      "Ownership transfer not found"
    );
  }

  if (transfer.status !== "PENDING") {
    throw new ApiError(
      400,
      "Transfer has already been processed"
    );
  }

  if (transfer.proposedOwnerId !== req.user.id) {
    throw new ApiError(
      403,
      "Only proposed owner can accept transfer"
    );
  }

  await prisma.$transaction(async (tx) => {
    await tx.group.update({
      where: {
        id: transfer.groupId,
      },
      data: {
        ownerId: transfer.proposedOwnerId,
      },
    });

    await tx.ownershipTransfer.update({
      where: {
        id: transfer.id,
      },
      data: {
        status: "ACCEPTED",
        respondedAt: new Date(),
      },
    });
  });

  await createActivity({
    actorId: req.user.id,
    groupId: transfer.groupId,
    activityType: "OWNERSHIP_TRANSFERRED",
    entityId: transfer.id,
    metadata: {
      oldOwnerId: transfer.currentOwnerId,
      newOwnerId: transfer.proposedOwnerId,
    },
  });

  res.json({
    success: true,
    message: "Ownership transferred successfully",
  });
});

const rejectOwnershipTransfer = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const transfer =
    await prisma.ownershipTransfer.findUnique({
      where: { id },
    });

  if (!transfer) {
    throw new ApiError(
      404,
      "Ownership transfer not found"
    );
  }

  if (transfer.status !== "PENDING") {
    throw new ApiError(
      400,
      "Transfer has already been processed"
    );
  }

  if (transfer.proposedOwnerId !== req.user.id) {
    throw new ApiError(
      403,
      "Only proposed owner can reject transfer"
    );
  }

  await prisma.ownershipTransfer.update({
    where: {
      id: transfer.id,
    },
    data: {
      status: "REJECTED",
      respondedAt: new Date(),
    },
  });

  res.json({
    success: true,
    message: "Ownership transfer rejected",
  });
});

module.exports = {
    createOwnershipTransfer,
    acceptOwnershipTransfer,
    rejectOwnershipTransfer
}