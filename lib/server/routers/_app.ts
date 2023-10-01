import { router } from "../trpc";

import { computersRouter } from "./computers";

export const appRouter = router({
  computers: computersRouter,
});

export type AppRouter = typeof appRouter;
