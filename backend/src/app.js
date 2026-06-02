const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

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

app.use(errorHandler);

module.exports = app;