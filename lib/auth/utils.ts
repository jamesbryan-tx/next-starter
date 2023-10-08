import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

import { activateEmail, loginEmail } from '@/lib/api/email/mutations';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema/auth';
import { env } from '@/lib/env.mjs';

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session };
};

export const checkAuth = async () => {
  const { session } = await getUserAuth();
  if (!session) redirect('/login');
};

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url }) => {
        const user = await db
          .selectDistinct({
            name: users.name,
            email: users.email,
            emailVerified: users.emailVerified,
          })
          .from(users)
          .where(eq(users.email, identifier));

        if (user.length > 0) {
          const u = user[0];
          u.name = u.name || '';

          if (u.emailVerified) {
            // User is signing in, so send the login email template
            loginEmail({
              name: u.name,
              email: u.email,
              actionUrl: url,
            });
          } else {
            // User is signing up, so send the activation email template
            activateEmail({
              email: u.email,
              actionUrl: url,
            });
          }
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }: { token: JWT; session: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (!token.email) {
        throw new Error('Token email is undefined');
      }

      const dbUser = await db
        .selectDistinct({
          id: users.id,
          name: users.name,
          email: users.email,
          image: users.image,
        })
        .from(users)
        .where(eq(users.email, token.email));

      if (!dbUser[0]) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      const u = dbUser[0];

      return {
        id: u.id,
        name: u.name,
        email: u.email,
        picture: u.image,
      };
    },
  },
};
