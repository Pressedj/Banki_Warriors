const mongoose = require("mongoose");
const TechnicalSchema = new mongoose.Schema({
  technicalQuestion: {
    type: String,
    required: true,
  },
  technicalAnswer: {
    type: String,
    required: true,
  },
  technicalDefaultAnswer: {
    type: String,
    required: true,
  },
  technicalReference: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Technical", TechnicalSchema);
