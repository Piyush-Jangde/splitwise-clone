const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const groupRoutes = require("./routes/group.routes");
const expenseRoutes = require("./routes/expense.routes");
const balanceRoutes = require("./routes/balance.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Splitwise Clone API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "splitwise-clone-backend",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/groups",groupRoutes);
app.use("/api",expenseRoutes);
app.use("/api",balanceRoutes);
app.use(errorHandler);

module.exports = app;