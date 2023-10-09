import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '@/lib/env.mjs';

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString, { max: 1 });
export const db = drizzle(client);
