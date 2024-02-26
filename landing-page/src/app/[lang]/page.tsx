import { getDictionary } from '../../../lib/dictionary';
import { Locale } from '@/i18n.config';
import Header from '../common/components/header/header';
import Footer from '../common/components/footer/Footer';
import Home from '../modules/home/Home';

const home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation } = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <div className="h-full p-8 2xl:w-11/12 mx-auto">
        <Home />
      </div>

      <Footer />
    </>
  );
};

export default home;
