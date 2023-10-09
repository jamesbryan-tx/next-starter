import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { marketingConfig } from '@/config/marketing';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className='grid min-h-screen grid-rows-[auto,1fr,auto]'>
      <SiteHeader items={marketingConfig.mainNav} />
      <div className='flex-1'>{children}</div>
      <SiteFooter />
    </div>
  );
}
