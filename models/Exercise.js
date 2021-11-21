const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  instructions: [
    {
      step: {
        type: String,
      },
    },
  ],
});

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);
