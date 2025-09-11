import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const leaderboardSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      trim: true,
      minlength: 1,
      maxlength: 40,
    },
    score: {
      type: Number,
      required: [true, 'score is required'],
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: 'score must be an integer',
      },
    },
  },
  { timestamps: true }
);

leaderboardSchema.index({ score: -1, createdAt: 1 });

export const Leaderboard = model('Leaderboard', leaderboardSchema);
