import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import { cn, getCurrentYear } from '@/lib/utils';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 text-center text-sm leading-loose text-muted-foreground md:flex-row md:gap-2 md:px-0 md:text-left'>
          <p>
            &copy; {getCurrentYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Separator
            orientation='vertical'
            className='mx-1 hidden h-[20px] bg-muted-foreground md:flex'
          />
          <Link href='#' className='font-medium underline underline-offset-4'>
            Privacy Policy
          </Link>
          <Separator
            orientation='vertical'
            className='mx-1 hidden h-[20px] bg-muted-foreground md:flex'
          />
          <Link href='#' className='font-medium underline underline-offset-4'>
            Terms and Conditions
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
