import { Leaderboard } from '../models/Leaderboard.js';

export async function getAll(req, res, next) {
  try {
    const { limit = 10, offset = 0 } = req.query || {};
    const items = await Leaderboard.find()
      .sort({ score: -1, createdAt: 1 })
      .skip(offset)
      .limit(limit)
      .lean();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
}

export async function createOne(req, res, next) {
  try {
    const { username, score } = req.sanitizedBody || req.body;
    const created = await Leaderboard.create({ username, score });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}
