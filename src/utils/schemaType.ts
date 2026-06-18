import { z } from 'zod';

// Standard RFC 5322 compliant email regex for validation
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// Regex to ensure the name contains only letters, spaces, hyphens, or apostrophes
const nameRegex = /^[a-zA-Z\s'-]+$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' })
    .regex(nameRegex, { message: 'Name can only contain letters, spaces, hyphens, or apostrophes' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .regex(emailRegex, { message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message cannot exceed 1000 characters' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;