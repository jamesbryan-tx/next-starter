import { z } from 'zod';

export const sendEmailSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(3),
});

export type SendEmailParams = z.infer<typeof sendEmailSchema>;

export const activateEmailSchema = sendEmailSchema
  .omit({ subject: true, name: true })
  .extend({
    actionUrl: z.string().url(),
  });

export type ActivateEmailParams = z.infer<typeof activateEmailSchema>;

export const loginEmailSchema = sendEmailSchema.omit({ subject: true }).extend({
  actionUrl: z.string().url(),
});

export type LoginEmailParams = z.infer<typeof loginEmailSchema>;
