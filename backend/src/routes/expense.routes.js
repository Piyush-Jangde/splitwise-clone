const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  createExpense,
  getGroupExpenses,
  getExpenseById,
} = require("../controllers/expense.controller");

const router = express.Router();

router.use(protect);

router.post("/expenses", createExpense);
router.get("/expenses/:id", getExpenseById);
router.get("/groups/:id/expenses", getGroupExpenses);

module.exports = router;