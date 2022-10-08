const mongoose = require("mongoose");
const TechnicalSchema = new mongoose.Schema({
  technicalQuestion: {
    type: String,
    required: true,
  },
  technicalAnswerExplanation: {
    type: String,
    required: true,
  },
  technicalAnswerUse: {
    type: String,
    required: true,
  },
  technicalAnswerExample: {
    type: String,
    required: true,
  },
  technicalReference: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Technical", TechnicalSchema);
