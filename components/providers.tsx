'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import TrpcProvider from '@/lib/trpc/Provider';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <TrpcProvider>
          <BalancerProvider>{children}</BalancerProvider>
        </TrpcProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
