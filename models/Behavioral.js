const mongoose = require("mongoose");
const BehavioralSchema = new mongoose.Schema({
  behavioralQuestion: {
    type: String,
    required: true,
  },
  behavioralAnswerExplanation: {
    type: String,
    required: true,
  },
  behavioralAnswerUse: {
    type: String,
    required: true,
  },
  behavioralAnswerExample: {
    type: String,
    required: true,
  },
  behavioralReference: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Behavioral", BehavioralSchema);
