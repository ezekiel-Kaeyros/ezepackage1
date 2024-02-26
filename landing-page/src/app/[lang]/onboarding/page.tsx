import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionary';
import Onboarding from '@/app/common/components/onboarding/Onboarding';

const home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { Navigation } = await getDictionary(lang);

  return (
    <>
      <div className="h-full p-8 2xl:w-11/12 mx-auto">
        <Onboarding />
      </div>
    </>
  );
};

export default home;
