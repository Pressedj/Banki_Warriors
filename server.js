const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");
const behavioralRoute = require("./routes/behavioral");
const technicalRoute = require("./routes/technical");
const adminBehavioralRoute = require("./routes/adminBehavioral");
const adminTechnicalRoute = require("./routes/adminTechnical");
const chooseQuestionRoute = require("./routes/chooseQuestion");

require("dotenv").config({ path: "./config/.env" });
// Passport config
require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", homeRoute);
app.use("/admin", adminRoute);
app.use("/behavioral", behavioralRoute);
app.use("/technical", technicalRoute);
app.use("/admin/behavioral", adminBehavioralRoute);
app.use("/admin/technical", adminTechnicalRoute);
app.use("/chooseQuestion", chooseQuestionRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
