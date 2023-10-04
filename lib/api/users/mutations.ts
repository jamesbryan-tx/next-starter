import { eq } from 'drizzle-orm';

import { getUserAuth } from '@/lib/auth/utils';
import { db } from '@/lib/db';
import { UpdateUserNameParams, users } from '@/lib/db/schema/auth';

export const updateUserName = async (name: UpdateUserNameParams) => {
  const { session } = await getUserAuth();
  try {
    const [u] = await db
      .update(users)
      .set(name)
      .where(eq(users.id, session?.user.id!))
      .returning();
    return { user: u };
  } catch (err) {
    const message = (err as Error).message ?? 'Error, please try again';
    console.error(message);
    return { error: message };
  }
};
