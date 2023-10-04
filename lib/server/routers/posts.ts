import { createPost, deletePost, updatePost } from '@/lib/api/posts/mutations';
import { getPostById, getPosts } from '@/lib/api/posts/queries';
import {
  postIdSchema,
  insertPostParams,
  updatePostParams,
} from '@/lib/db/schema/posts';

import { publicProcedure, router } from '../trpc';

export const postsRouter = router({
  getPosts: publicProcedure.query(async () => {
    return getPosts();
  }),
  getPostById: publicProcedure.input(postIdSchema).query(async ({ input }) => {
    return getPostById(input.id);
  }),
  createPost: publicProcedure
    .input(insertPostParams)
    .mutation(async ({ input }) => {
      return createPost(input);
    }),
  updatePost: publicProcedure
    .input(updatePostParams)
    .mutation(async ({ input }) => {
      return updatePost(input.id, input);
    }),
  deletePost: publicProcedure
    .input(postIdSchema)
    .mutation(async ({ input }) => {
      return deletePost(input.id);
    }),
});
