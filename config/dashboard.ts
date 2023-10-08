import { DashboardConfig } from 'types';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
  ],
  sidebarNav: [
    {
      title: 'Posts',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'Email',
      href: '/dashboard/email',
      icon: 'mail',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};
