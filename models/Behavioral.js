const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const BehavioralSchema = new mongoose.Schema({
  questionT: {
    type: String,
    required: true,
  },
  answerT: {
    type: String,
    required: true,
  },
  defaultAnswerT: {
    type: String,
    required: true,
  },
});
