import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo className='h-6 w-6' />
          <p className='text-center text-sm leading-loose md:text-left'>
            Built by{' '}
            <a
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Jebulous
            </a>
            . Forked from{' '}
            <a
              href='https://tx.shadcn.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Taxonomy
            </a>
            . The source code is available on{' '}
            <a
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
