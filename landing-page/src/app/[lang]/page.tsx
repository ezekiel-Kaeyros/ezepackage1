import { getDictionary } from '../../../lib/dictionary';
import { Locale } from '@/i18n.config';
import HomeModule from '../modules/home/Home';
import Header from '../common/components/header/header';
import Footer from '../common/components/footer/Footer';
import Home from '../modules/home/Home';
import { Suspense } from 'react';

const home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation, page, footer } = await getDictionary(lang);
  console.log("Environment: ", process.env.NODE_ENV)
  console.log("app env: ", process.env.NEXT_PUBLIC_APP_ENV)

  return (
    <>
      <Header lang={lang} navigation={Navigation} />
      <div className="h-full ">
        <Suspense>
          <Home lang={lang} />
        </Suspense>
      </div>

      <Footer footer={footer} />
    </>
  );
};

export default home;
