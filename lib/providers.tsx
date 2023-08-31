'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ThemeProvider } from 'next-themes';
import React, { useState } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import { trpc } from '@/lib/trpc';
import { absoluteUrl } from '@/lib/utils';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <TRPCProvider>
        <BalancerProvider>{children}</BalancerProvider>
      </TRPCProvider>
    </ThemeProvider>
  );
}

export function TRPCProvider({ children }: ProviderProps) {
  const url = absoluteUrl('api/trpc');
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
