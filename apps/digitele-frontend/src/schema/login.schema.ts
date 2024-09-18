import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
