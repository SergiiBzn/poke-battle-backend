import express from 'express';
import chalk from 'chalk';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json(), cors());

app.get('/health', async (_req, res) => {
  res.json({ msg: 'Running' });
});

app.listen(port, () => {
  console.log(
    chalk.bgGreen(` Personal Library API listening on port ${port} `)
  );
});
