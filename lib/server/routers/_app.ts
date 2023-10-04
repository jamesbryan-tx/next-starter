import { postsRouter } from '@/lib/server/routers/posts';
import { usersRouter } from '@/lib/server/routers/users';
import { router } from '@/lib/server/trpc';

export const appRouter = router({ posts: postsRouter, users: usersRouter });

export type AppRouter = typeof appRouter;
