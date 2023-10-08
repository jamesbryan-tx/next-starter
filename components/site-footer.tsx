import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import { cn, getCurrentYear } from '@/lib/utils';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 text-center text-sm leading-loose md:flex-row md:gap-2 md:px-0 md:text-left'>
          <p>
            &copy; {getCurrentYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link href='#' className='font-medium underline underline-offset-4'>
            Privacy Policy
          </Link>
          <p className='hidden md:flex'>{'  |  '}</p>
          <Link href='#' className='font-medium underline underline-offset-4'>
            Terms and Conditions
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link href={siteConfig.links.twitter}>
            <Icons.twitter className='h-5 w-5' />
          </Link>
          <Link href={siteConfig.links.github}>
            <Icons.github className='-mr-2 h-6 w-6' />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
