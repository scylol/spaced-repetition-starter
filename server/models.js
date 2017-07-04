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

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  name: {type: String, required: true},
  accessToken: {type: String, required: true}
});

userSchema.methods.apiRepr = function() {
  return {
    name: this.name
  };
};

const User = mongoose.model('User', userSchema);


module.exports = {Question, User};