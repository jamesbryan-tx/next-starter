import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardShell } from '@/components/dashboard/shell';
import { UserNameForm } from '@/components/dashboard/user-name-form';
import { getUserAuth } from '@/lib/auth/utils';

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
};

export default async function SettingsPage() {
  const session = await getUserAuth();
  const user = session.session?.user;

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Settings'
        text='Manage account and website settings.'
      />
      <div className='grid gap-10'>
        {user ? (
          <UserNameForm user={{ id: user.id, name: user.name || '' }} />
        ) : null}
      </div>
    </DashboardShell>
  );
}
