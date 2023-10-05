import {
  varchar,
  text,
  boolean,
  timestamp,
  serial,
  pgTable,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

import { getPosts } from '@/lib/api/posts/queries';

import { users } from './auth';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content'),
  published: boolean('published').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  userId: varchar('user_id', { length: 256 })
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
});

// Schema for posts - used to validate API requests
export const insertPostSchema = createInsertSchema(posts).extend({
  title: z.string().min(1).max(256),
});

export const insertPostParams = createSelectSchema(posts, {
  published: z.coerce.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}).omit({
  id: true,
  userId: true,
});

export const updatePostSchema = createSelectSchema(posts).extend({
  title: z.string().min(1).max(256),
});

export const updatePostParams = createSelectSchema(posts, {
  published: z.coerce.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
}).omit({
  userId: true,
});

export const postIdSchema = updatePostSchema.pick({ id: true });

// Types for posts - used to type API request params and within Components
export type Post = z.infer<typeof insertPostSchema>;
export type NewPost = z.infer<typeof insertPostSchema>;
export type NewPostParams = z.infer<typeof insertPostParams>;
export type UpdatePostParams = z.infer<typeof updatePostParams>;
export type PostId = z.infer<typeof postIdSchema>['id'];

// this type infers the return from getPosts() - meaning it will include any joins
export type CompletePost = Awaited<
  ReturnType<typeof getPosts>
>['posts'][number];
