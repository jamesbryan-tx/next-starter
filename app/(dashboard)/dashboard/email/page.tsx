import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardShell } from '@/components/dashboard/shell';
import { EmailForm } from '@/components/send-email-form';

export const metadata = {
  title: 'Email',
  description: 'Send emails with Resend.',
};

export default async function EmailPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Email' text='Send an email using Resend.' />
      <div className='grid gap-10'>
        <EmailForm />
      </div>
    </DashboardShell>
  );
}
