'use client';

import React from 'react';
import StoreProvider from '@/store/StoreProvider';
import BootstrapProvider from './BootstrapProvider/BootstrapProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BootstrapProvider />
      <StoreProvider>{children}</StoreProvider>
    </>
  );
}
