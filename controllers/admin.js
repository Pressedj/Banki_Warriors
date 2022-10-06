const Admin = require("../models/Admin");
module.exports = {
  getAdminDashboard: (req, res) => {
    res.render("admin.ejs");
  },
};
