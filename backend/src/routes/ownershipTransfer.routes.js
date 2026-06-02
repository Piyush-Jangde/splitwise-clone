const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  createOwnershipTransfer,
  acceptOwnershipTransfer,
  rejectOwnershipTransfer,
} = require("../controllers/ownershipTransfer.controller");

const router = express.Router();

router.use(protect);

router.post(
  "/groups/:groupId/ownership-transfer",
  createOwnershipTransfer
);

router.post(
  "/ownership-transfers/:id/accept",
  acceptOwnershipTransfer
);

router.post(
  "/ownership-transfers/:id/reject",
  rejectOwnershipTransfer
);

module.exports = router;