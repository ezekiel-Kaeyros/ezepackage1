import Sidebar from "@/app/modules/sidebar/Sidebar";
import Header from "@/app/common/components/header/header";
import { Locale, i18n } from "@/i18n.config";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import {
  store,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/redux/store";
import ReduxProvider from "@/redux/provider";
import SidebarIntermediaire from "@/app/modules/sidebar/SideBarIntermediaire";
import { getDictionary } from "../../../../lib/dictionary";
import Footer from "@/app/common/components/footer/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// const Layout = async ({
//   children,
//   params: { lang },
// }: {
//   children: React.ReactNode;
//   params: { lang: string };
// }) {
const Layout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const { sidebar, Navigation } = await getDictionary(lang);
  return (
    <ReduxProvider>
      {/* <BrowserRouter> */}
      <div className="flex h-screen w-screen">
        <div className="w-[13%]  ">
          <Sidebar lang={lang} sidebar={sidebar} />
        </div>

        {/* <SidebarIntermediaire lang={lang} sidebar={sidebar} /> */}
        <div className="w-[87%]  relative h-full   overflow-x-hidden bg-[#F5F7F9]">
          <Header lang={lang} navigation={Navigation} />

          <div className="w-full ">{children}</div>
        </div>
      </div>
      {/* </BrowserRouter> */}
    </ReduxProvider>
  );
};

export default Layout;
