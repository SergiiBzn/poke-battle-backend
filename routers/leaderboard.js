import { Router } from 'express';
import validateZod from '../middlewares/validate.js';
import { createScoreSchema } from '../schemas/leaderboard.js';
import { getAll, createOne } from '../controllers/leaderboardController.js';

const router = Router();

router.get('/', getAll);
router.post('/', validateZod(createScoreSchema), createOne);

export default router;
