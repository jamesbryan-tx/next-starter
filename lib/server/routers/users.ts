import { updateUserName } from '@/lib/api/users/mutations';
import { updateUserNameParams } from '@/lib/db/schema/auth';
import { publicProcedure, router } from '@/lib/server/trpc';

export const usersRouter = router({
  updateUserName: publicProcedure
    .input(updateUserNameParams)
    .mutation(async ({ input }) => {
      return updateUserName(input);
    }),
});
