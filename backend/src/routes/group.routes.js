const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  createGroup,
  getMyGroups,
  getGroupById,
  renameGroup,
  deleteGroup,
} = require("../controllers/group.controller");

const router = express.Router();

router.use(protect);

router.post("/", createGroup);
router.get("/", getMyGroups);
router.get("/:id", getGroupById);
router.patch("/:id", renameGroup);
router.delete("/:id", deleteGroup);

module.exports = router;