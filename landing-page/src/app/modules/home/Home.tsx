import CertifiedLibrarySection from '@/app/common/components/home/certified-library-section/CertifiedLibrarySection';
import HeroSection from '@/app/common/components/home/hero-section/HeroSection';
import OnlineCommunitySection from '@/app/common/components/home/online-community-section/OnlineCommunitySection';
import PersonalGuidanceSection from '@/app/common/components/home/personalized-guidance-section/PersonalGuidanceSection';
import React from 'react';

const Home = () => {
  return (
    <div className="w-full xl:px-8 ">
      <div className="lg:mt-12">
        <HeroSection />
      </div>
      <div>
        <OnlineCommunitySection />
      </div>
      <div>
        <CertifiedLibrarySection />
      </div>
      <div className="w-full mt-4 lg:mt-32 lg:mb-16">
        <PersonalGuidanceSection />
      </div>
    </div>
  );
};

export default Home;
