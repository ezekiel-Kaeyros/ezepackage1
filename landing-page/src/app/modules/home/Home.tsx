import GetFund from '@/app/common/components/getFund/GetFund';
import CertifiedLibrarySection from '@/app/common/components/home/certified-library-section/CertifiedLibrarySection';
import HeroSection from '@/app/common/components/home/hero-section/HeroSection';
import OnlineCommunitySection from '@/app/common/components/home/online-community-section/OnlineCommunitySection';
import PersonalGuidanceSection from '@/app/common/components/home/personalized-guidance-section/PersonalGuidanceSection';
import LearningArea from '@/app/common/components/learningArea/LearningArea';
import TrustedPartners from '@/app/common/components/trustedPartners/TrustedPartners';
import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionary';
import React from 'react';

export default async function Home({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  return (
    <>
      <div className="">
        <div className="lg:mt-12">
          <HeroSection />
        </div>

        <div>
          <OnlineCommunitySection />
        </div>

        <div>
          <CertifiedLibrarySection />
        </div>
        <div>
          <LearningArea home={page} lang={lang} />
        </div>
        <div>
          <PersonalGuidanceSection />
        </div>
        <div>
          <GetFund home={page} lang={lang} />
        </div>
        <div></div>

        <TrustedPartners home={page} lang={lang} />
      </div>
    </>
  );
}
