const Behavioral = require("../models/Behavioral");
module.exports = {
  getAdminBehavioral: async (req, res) => {
    try {
      const behavioralQuestionItems = await Behavioral.find();
      res.render("adminBehavioral.ejs", {
        behaviorals: behavioralQuestionItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createBehavioralQuestion: async (req, res) => {
    try {
      await Behavioral.create({
        behavioralQuestion: req.body.addBehavioralQuestion,
        behavioralReference: req.body.linkAnswer,
      });
      console.log("A new question has been added!");
      res.redirect("/admin/behavioral");
    } catch (err) {
      console.log(err);
    }
  },
  deleteBehavioralQuestion: async (req, res) => {
    try {
      await Behavioral.findOneAndDelete({
        _id: req.body.behavioralQuestionIdFromJSFile,
      });
      console.log("Deleted A Behavioral Quuestion");
      res.json("A behavioral question deleted");
    } catch (err) {
      console.log(err);
    }
  },
};
