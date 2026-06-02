const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  getGroupBalances,
  getMyBalanceSummary,
} = require("../controllers/balance.controller");

const router = express.Router();

router.use(protect);

router.get("/groups/:groupId/balances", getGroupBalances);
router.get("/balances/summary", getMyBalanceSummary);

module.exports = router;