const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  getGroupActivity,
  getMyActivity,
} = require("../controllers/activity.controller");

const router = express.Router();

router.use(protect);

router.get("/groups/:groupId/activity", getGroupActivity);
router.get("/activity", getMyActivity);

module.exports = router;