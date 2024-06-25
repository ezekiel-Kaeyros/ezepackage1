import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import { ThemeProvider } from '../common/dark-mode/theme-provider/theme-provider';
import ReduxProvider from '@/redux/provider';

import Header from '../common/components/header/header';
import { Providers } from '../common/nextui/providers';
import { i18n } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airtime App',
  description: 'Airtime App',
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
      
      <body className={`${inter.className}`}>
        <ReduxProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="white" enableSystem> */}
            <Providers>
              <div className="bg-white">{children}</div>
            </Providers>
          {/* </ThemeProvider> */}
        </ReduxProvider>
        <p></p>
        
      </body>
    </html>
  );
}
