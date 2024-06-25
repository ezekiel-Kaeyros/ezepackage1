import "./globals.css";
import Head from "next/head";
import LayoutComponent from "./layoutComponent";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <Head>
        <meta name="description">{"SSO dashboard"}</meta>
      </Head>
      <body className={` dark:bg-dark`}>
        <NextUIProvider>
          <LayoutComponent>{children}</LayoutComponent>
        </NextUIProvider>
      </body>
    </html>
  );
}
