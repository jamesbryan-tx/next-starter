import { and, eq } from 'drizzle-orm';

import { getUserAuth } from '@/lib/auth/utils';
import { db } from '@/lib/db';
import {
  PostId,
  NewPostParams,
  UpdatePostParams,
  updatePostSchema,
  insertPostSchema,
  posts,
  postIdSchema,
} from '@/lib/db/schema/posts';

export const createPost = async (post: NewPostParams) => {
  const { session } = await getUserAuth();
  const newPost = insertPostSchema.parse({
    ...post,
    userId: session?.user.id!,
  });
  try {
    const [p] = await db.insert(posts).values(newPost).returning();
    return { post: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    return { error: message };
  }
};

export const updatePost = async (id: PostId, post: UpdatePostParams) => {
  const { session } = await getUserAuth();
  const { id: postId } = postIdSchema.parse({ id });
  const newPost = updatePostSchema.parse({
    ...post,
    userId: session?.user.id!,
  });
  try {
    const [p] = await db
      .update(posts)
      .set(newPost)
      .where(and(eq(posts.id, postId!), eq(posts.userId, session?.user.id!)))
      .returning();
    return { post: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    return { error: message };
  }
};

export const deletePost = async (id: PostId) => {
  const { session } = await getUserAuth();
  const { id: postId } = postIdSchema.parse({ id });
  try {
    const [p] = await db
      .delete(posts)
      .where(and(eq(posts.id, postId!), eq(posts.userId, session?.user.id!)))
      .returning();
    return { post: p };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    return { error: message };
  }
};
