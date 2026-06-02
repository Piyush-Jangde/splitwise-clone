const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  createSettlement,
  getGroupSettlements,
} = require("../controllers/settlement.controller");

const router = express.Router();

router.use(protect);

router.post("/settlements", createSettlement);
router.get("/groups/:groupId/settlements", getGroupSettlements);

module.exports = router;