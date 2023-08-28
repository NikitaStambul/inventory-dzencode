import { z } from 'zod';

export const groupFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(30, { message: 'Title can not be longer than 30 characters' }),
  description: z
    .string()
    .max(30, { message: 'Description can not be longer than 30 characters' }),
  products: z.array(z.string()),
});
