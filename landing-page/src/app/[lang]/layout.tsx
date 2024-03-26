import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from '../common/dark-mode/theme-provider/theme-provider';
import ReduxProvider from '@/redux/provider';

import Header from '../common/components/header/header';
import { Providers } from '../common/nextui/providers';
import { i18n } from '@/i18n.config';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EZE Platform',
  description: 'EZE Platform',
};

// Can be imported from a shared config

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate that the incoming `locale` parameter is valid

  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{metadata.description}</meta>
      </Head>
      <body className={`${inter.className}  dark:bg-[#192428]`}>
        <ReduxProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="white" enableSystem> */}
          <Providers>
            <Suspense>{children}</Suspense>
          </Providers>
          {/* </ThemeProvider> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
