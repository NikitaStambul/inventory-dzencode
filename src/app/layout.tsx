import '@/styles/main.scss';
import styles from './layout.module.scss';
import React from 'react';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inventory',
  description: 'App for inventory management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="d-flex flex-column vh-100 vw-100">
            <Header />
            <div className="d-flex flex-grow-1">
              <Sidebar />
              <main className={styles.main}>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
