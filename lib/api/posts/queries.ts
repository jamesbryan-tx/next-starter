import { eq, and } from 'drizzle-orm';

import { getUserAuth } from '@/lib/auth/utils';
import { db } from '@/lib/db';
import { type PostId, postIdSchema, posts } from '@/lib/db/schema/posts';

export const getPosts = async () => {
  const { session } = await getUserAuth();
  const p = await db
    .select()
    .from(posts)
    .where(eq(posts.userId, session?.user.id!));
  return { posts: p };
};

export const getPostById = async (id: PostId) => {
  const { session } = await getUserAuth();
  const { id: postId } = postIdSchema.parse({ id });
  const [p] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.id, postId), eq(posts.userId, session?.user.id!)));
  return { post: p };
};
