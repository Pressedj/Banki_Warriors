const mongoose = require("mongoose");
const BehavioralSchema = new mongoose.Schema({
  behavioralQuestion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Behavioral", BehavioralSchema);
