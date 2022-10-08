const Technical = require("../models/Technical");
module.exports = {
  getAdminTechnical: (req, res) => {
    res.render("adminTechnical.ejs");
  },
  createTechnicalQuestion: async (req, res) => {
    try {
      await Technical.create({
        technicalQuestion: req.body.addTechnicalQuestion,
        technicalAnswerExplanation: req.body.explanationAnswer,
        technicalAnswerUse: req.body.useAnswer,
        technicalAnswerExample: req.body.exampleAnswer,
        technicalReference: req.body.linkAnswer,
      });
      console.log("A new question has been added!");
      res.redirect("/admin/technical");
    } catch (err) {
      console.log(err);
    }
  },
};
