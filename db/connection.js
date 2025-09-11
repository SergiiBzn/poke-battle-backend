import mongoose from 'mongoose';
import chalk from 'chalk';

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  try {
    const conn = await mongoose.connect(uri, {
      dbName: process.env.MONGO_DB || 'poke-battle',
    });
    console.log(chalk.cyan(` MongoDB connected: ${conn.connection.name} `));
  } catch (err) {
    console.error(chalk.bgRed(' Failed to connect MongoDB '), err.message);
    throw err;
  }
}
