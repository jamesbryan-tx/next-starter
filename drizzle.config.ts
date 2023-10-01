import type { Config } from 'drizzle-kit';

import { env } from '@/lib/env.mjs';

export default {
  schema: './lib/db/schema',
  out: './lib/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
