import { z } from 'zod';

export const AddCategorySchema = z.object({
  category: z.string(),
});

export type AddCategorySchema = z.infer<typeof AddCategorySchema>;
