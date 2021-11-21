const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  exercises: [
    {
      exercise: {
        type: Schema.Types.ObjectId,
        ref: 'exercise',
      },
    },
  ],
  followed: {
    type: Boolean,
    default: true,
  },
  day: {
    type: String,
    required: true,
  },
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);
