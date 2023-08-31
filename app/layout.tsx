import '@/styles/globals.css';
import { Metadata, ServerRuntime } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { siteConfig } from '@/config/site';
import Providers from '@/lib/providers';
import { cn } from '@/lib/utils';

export const runtime: ServerRuntime = 'edge';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
            fontHeading.variable,
          )}
        >
          <Providers>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <div className='flex-1'>{children}</div>
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}
