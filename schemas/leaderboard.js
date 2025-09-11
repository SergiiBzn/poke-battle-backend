import { z } from 'zod';

export const createScoreSchema = z.object({
  username: z.string().trim().min(1, 'username is required').max(40),
  score: z.number().int('score must be an integer').min(0),
});

export const listQuerySchema = z.object({
  limit: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? 10 : Number(v)))
    .pipe(z.number().int().min(1).max(100)),
  offset: z
    .string()
    .optional()
    .transform((v) => (v === undefined ? 0 : Number(v)))
    .pipe(z.number().int().min(0)),
});

