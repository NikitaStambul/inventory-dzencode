'use client';

import React from 'react';
import StoreProvider from '@/store/StoreProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
