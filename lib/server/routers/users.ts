import { updateUserName } from '@/lib/api/users/mutations';
import { userNameSchema } from '@/lib/db/schema/auth';
import { publicProcedure, router } from '@/lib/server/trpc';

export const usersRouter = router({
  updateUserName: publicProcedure
    .input(userNameSchema)
    .mutation(async ({ input }) => {
      return updateUserName(input);
    }),
});
