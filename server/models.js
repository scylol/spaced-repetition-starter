const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  question: {type: String, required: true},
  answer: {type: String, required: true}
});

questionSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    question: this.question,
    answer: this.answer
  };
};

const Question = mongoose.model('Question', questionSchema);

module.exports = {Question};