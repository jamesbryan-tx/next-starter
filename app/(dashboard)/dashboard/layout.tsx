import { DashboardNav } from '@/components/dashboard/nav';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { dashboardConfig } from '@/config/dashboard';
import { checkAuth } from '@/lib/auth/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  await checkAuth();
  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <SiteHeader items={dashboardConfig.mainNav} />
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col md:flex'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
