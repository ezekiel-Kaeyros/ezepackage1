import { getDictionary } from '../../../lib/dictionary';
import { Locale } from '@/i18n.config';
import HomeModule from '../modules/home/Home';
import Header from '../common/components/header/header';
import Footer from '../common/components/footer/Footer';
import Home from '../modules/home/Home';

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
  const { Navigation, page } = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <div className="h-full ">
        <Home lang={lang} />
      </div>

      <Footer />
    </>
  );
};

export default home;
