const express = require("express");
const router = express.Router();
const chooseQuestionController = require("../controllers/chooseQuestion");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, chooseQuestionController.getChooseQuestionPage);
router.get("/technical", chooseQuestionController.getTechnicalQuestionsForUser);
router.get(
  "/behavioral",
  chooseQuestionController.getBehavioralQuestionsForUser
);
module.exports = router;
