import { emailRouter } from '@/lib/server/routers/email';
import { postsRouter } from '@/lib/server/routers/posts';
import { usersRouter } from '@/lib/server/routers/users';
import { router } from '@/lib/server/trpc';

export const appRouter = router({
  posts: postsRouter,
  users: usersRouter,
  email: emailRouter,
});

export type AppRouter = typeof appRouter;
