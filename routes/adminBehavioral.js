const express = require("express");
const admin = require("../controllers/admin");
const router = express.Router();
const adminBehavioralController = require("../controllers/adminBehavioral");

router.get("/", adminBehavioralController.getAdminBehavioral);
router.post(
  "/createBehavioralQuestion",
  adminBehavioralController.createBehavioralQuestion
);
router.delete(
  "/deleteBehavioralQuestion",
  adminBehavioralController.deleteBehavioralQuestion
);
module.exports = router;
