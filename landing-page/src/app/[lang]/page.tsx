import { getDictionary } from '../../../lib/dictionary';
import { Locale } from '@/i18n.config';
import HomeModule from '../modules/home/Home';
import Header from '../common/components/header/header';
import Footer from '../common/components/footer/Footer';
import Home from '../modules/home/Home';
import { Suspense } from 'react';

// const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
//   const { Navigation, page } = await getDictionary(lang);

//   return (
//     // <div className="h-full p-8 2xl:w-11/12 mx-auto">
//     <div className="h-full p-8 text-black">
//       {/* <LocaleSwitcher /> */}
//       <HomeModule page={page.home} />
//       {Navigation.home}
//     </div>

const home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation, page, footer } = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} navigation={Navigation} />
      <div className="h-full ">
        <Suspense>
          <Home lang={lang} />
        </Suspense>
      </div>

      <Footer footer={footer}  />
    </>
  );
};

export default home;
