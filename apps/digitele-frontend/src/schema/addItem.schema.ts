import { z } from 'zod';

export const AddItemSchema = z.object({
  name: z.string(),
  quantity: z.string().optional(),
  price: z.string(),
  category: z.string(),
});

export type AddItemSchema = z.infer<typeof AddItemSchema>;
