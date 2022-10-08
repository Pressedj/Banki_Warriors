const express = require("express");
const router = express.Router();
const adminTechnicalController = require("../controllers/adminTechnical");

router.get("/", adminTechnicalController.getAdminTechnical);
router.post(
  "/createTechnicalQuestion",
  adminTechnicalController.createTechnicalQuestion
);

module.exports = router;
