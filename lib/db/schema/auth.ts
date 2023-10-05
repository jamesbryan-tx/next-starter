import type { AdapterAccount } from '@auth/core/adapters';
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import z from 'zod';

export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

// Schema for CRUD - used to validate API requests
export const insertUserSchema = createInsertSchema(users).extend({
  email: z.string().email(),
});

export const userAuthSchema = createSelectSchema(users, {
  email: z.coerce.string().email(),
}).omit({
  id: true,
  name: true,
  emailVerified: true,
  image: true,
});

export const userNameSchema = createSelectSchema(users, {
  name: z.coerce.string().min(1).max(256),
}).omit({
  id: true,
  email: true,
  emailVerified: true,
  image: true,
});

// Types for users - used to type API request params and within Components
export type User = z.infer<typeof insertUserSchema>;
export type UserAuth = z.infer<typeof userAuthSchema>;
export type UserNameParams = z.infer<typeof userNameSchema>;

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  }),
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);
