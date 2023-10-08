import {
  activateEmail,
  loginEmail,
  sendEmail,
} from '@/lib/api/email/mutations';
import {
  activateEmailSchema,
  loginEmailSchema,
  sendEmailSchema,
} from '@/lib/email/utils';
import { publicProcedure, router } from '@/lib/server/trpc';

export const emailRouter = router({
  sendEmail: publicProcedure
    .input(sendEmailSchema)
    .mutation(async ({ input }) => {
      return sendEmail(input);
    }),
  activateEmail: publicProcedure
    .input(activateEmailSchema)
    .mutation(async ({ input }) => {
      return activateEmail(input);
    }),
  loginEmail: publicProcedure
    .input(loginEmailSchema)
    .mutation(async ({ input }) => {
      return loginEmail(input);
    }),
});
