import '@/styles/main.scss';
import styles from './layout.module.scss';
import React from 'react';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import classNames from 'classnames';

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
          <div className="vh-100 vw-100">
            <Header />
            <div className={styles.content}>
              <Sidebar />
              <main className={classNames(styles.main)}>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
