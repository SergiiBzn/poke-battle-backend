import 'dotenv/config';
import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import { connectDB } from './db/connection.js';
import leaderboardRouter from './routers/leaderboard.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.ORIGIN || '*',
  })
);
app.use(express.json());

app.get('/health', async (_req, res) => {
  res.json({ msg: 'Running' });
});

app.use('/leaderboard', leaderboardRouter);

app.use('*splat', (req, res) => res.status(404).json({ error: 'Not found' }));

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(chalk.bgBlue(` Poke Battle API listening on port ${port} `));
    });
  } catch (err) {
    console.error(chalk.bgRed(' Failed to start server '), err.message);
    process.exit(1);
  }
};

start();
