import Link from 'next/link';

import { MainNav } from '@/components/main-nav';
import { buttonVariants } from '@/components/ui/button';
import { UserAccountNav } from '@/components/user-account-nav';
import { getUserAuth } from '@/lib/auth/utils';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';

interface SiteHeaderProps {
  items?: MainNavItem[];
}

export async function SiteHeader({ items }: SiteHeaderProps) {
  const session = await getUserAuth();
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={items} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='space-x-1'>
            {session.session?.user ? (
              <UserAccountNav user={session.session.user} />
            ) : (
              <>
                <Link
                  href='/login'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                    'px-4',
                  )}
                >
                  Login
                </Link>
                <Link
                  href='/register'
                  className={cn(
                    buttonVariants({ variant: 'secondary', size: 'sm' }),
                    'px-4',
                  )}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
