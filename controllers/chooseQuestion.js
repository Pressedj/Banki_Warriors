const Technical = require("../models/Technical");
const Behavioral = require("../models/Behavioral");

module.exports = {
  getChooseQuestionPage: (req, res) => {
    res.render("chooseQuestion.ejs");
  },
  getTechnicalQuestionsForUser: async (req, res) => {
    try {
      const technicalQuestionFroUser = await Technical.find();
      res.render("technicalQuestionsForUser.ejs", {
        technicalQuestions: technicalQuestionFroUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getBehavioralQuestionsForUser: async (req, res) => {
    try {
      const behavioralQuestionFroUser = await Behavioral.find();
      res.render("behavioralQuestionsForUser.ejs", {
        behavioralQuestions: behavioralQuestionFroUser,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
