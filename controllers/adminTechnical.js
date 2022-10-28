const Technical = require("../models/Technical");
module.exports = {
  getAdminTechnical: async (req, res) => {
    try {
      const technicalQuestionItems = await Technical.find();
      res.render("adminTechnical.ejs", { technicals: technicalQuestionItems });
      //we can add more inside the anchor tag if we want to spit more things
    } catch (err) {
      console.log(err);
    }
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
  deleteTechnicalQuestion: async (req, res) => {
    try {
      await Technical.findOneAndDelete({
        _id: req.body.technicalQuestionIdFromJSFile,
      });
      console.log("Deleted A Technical Quuestion");
      res.json("A technical question deleted");
    } catch (err) {
      console.log(err);
    }
  },
};
