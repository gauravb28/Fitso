const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  avatar: {
    data: Buffer,
    contentType: String,
  },
  bio: {
    type: String,
    required: true,
  },
  weekly_schedule: [
    {
      schedule: {
        type: Schema.Types.ObjectId,
        ref: 'schedule',
      },
    },
  ],
  favourites: [
    {
      exercise: {
        type: Schema.Types.ObjectId,
        ref: 'exercise',
      },
    },
  ],
  calorie_count: {
    type: Number,
    default: 0,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
