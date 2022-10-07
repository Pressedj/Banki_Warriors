const Behavioral = require("../models/Behavioral");
module.exports = {
  getAdminBehavioral: (req, res) => {
    res.render("adminBehavioral.ejs");
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
};
