const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  createGroup,
  getMyGroups,
  getGroupById,
  renameGroup,
  deleteGroup,
  addMember,
  removeMember,
  joinGroupByInviteCode,
} = require("../controllers/group.controller");

const router = express.Router();

router.use(protect);

router.post("/", createGroup);
router.get("/", getMyGroups);
router.post("/join/:inviteCode", joinGroupByInviteCode);

router.get("/:id", getGroupById);
router.patch("/:id", renameGroup);
router.delete("/:id", deleteGroup);

router.post("/:id/members", addMember);
router.delete("/:id/members/:userId", removeMember);

module.exports = router;