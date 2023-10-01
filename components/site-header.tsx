import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='space-x-1'>
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
          </nav>
        </div>
      </div>
    </header>
  );
}
