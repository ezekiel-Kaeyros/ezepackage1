import "./globals.css";
import Head from "next/head";
import LayoutComponent from "./layoutComponent";
import { NextUIProvider } from "@nextui-org/react";
import ReduxProvider from "../../../redux/provider";

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
          <ReduxProvider>
            <LayoutComponent>{children}</LayoutComponent>
          </ReduxProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
