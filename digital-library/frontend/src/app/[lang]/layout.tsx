import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import { ThemeProvider } from '../common/dark-mode/theme-provider/theme-provider';
import ReduxProvider from '@/redux/provider';
import { NextUIProvider } from "@nextui-org/react";

import Header from '../common/components/header/header';
import { Providers } from '../common/nextui/providers';
import { i18n } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "digital-library",
  description: "digital-library",
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
  console.log("NODE ENV: ", process.env.NODE_ENV)

  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{metadata.description}</meta>
      </Head>

      <body className={`${inter.className}`}>
        <ReduxProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="white" enableSystem> */}
          <Providers>
            <NextUIProvider>
              <div className="bg-white">{children}</div>
            </NextUIProvider>
          </Providers>
          {/* </ThemeProvider> */}
        </ReduxProvider>
        <p></p>

      </body>
    </html>
  );
}
