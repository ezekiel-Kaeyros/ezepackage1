'use client';
import React, { Fragment, useState } from 'react';
import {
  HeaderProfile,
  ContainPage,
  LeftContainPage,
  RightContainPage,
  MyImage,
  MyButton,ImWeb,ImMob
} from '../../components/Profile/styleProfilePage';

import Seo from '../../components/Seo';

import InsightsCard from '../../components/CardInsights/Insights';
import Image from 'next/image';
import { initialCategoryOfCommunity } from '../../components/Community/data';

import LayoutCommunities from '../../components/Layout/CommuntiesLayout';
import CommunityCard from '../../components/Community/CommunityCard';

import BackgroundProfile from '../../public/profile/Rectangle29.svg';
import PeopleIcon from '../../public/profile/empty-avatar.svg';
import LogoProfile from '../../public/profile/empty-avatar.svg';
import { Button, Link, P, Spacing } from '../../components/ui';
import EditIcon from '../../public/profile/edit (1).svg';
import EditMobIcon from '../../public/profile/editMob.svg';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import LanguageCard from '../../components/LanguagesCard/LanguageCard';
import ConnexionCard from '../../components/ConnexionCard/ConnexionCard';
import DetailProfile from '../../components/DetailProfile/DetailProfile';

import JoinCommunityCard from '../../components/ProfileCard/JoinCommunityCard';
import AboutCard from '../../components/ProfileCard/AboutCard';
import WorkshopCard from '../../components/ProfileCard/WorkshopCard';
import CertificationCard from '../../components/ProfileCard/Certification';
import TrainingCard from '../../components/ProfileCard/TrainingCard';
import ExpertiseCard from '../../components/ProfileCard/ExpertiseCard';
import AboutContent from '../../components/ProfileCard/AboutWithContent/AboutContent';
import PreviousWorkshop from '../../components/ProfileCard/PreviousWorkshop/PreviousWorkshop';
import ExpertiseWithContent from '../../components/ProfileCard/ExpertiseWithContent/ExpertiseWithContent';
import TrainingPreview from '../../components/ProfileCard/TrainingPreview/TrainingPreview';
import CertificationPreview from '../../components/ProfileCard/CertificationPreview/CertificationPreview';
import CommunityPreview from '../../components/ProfileCard/CommunityPreview/CommunityPreview';

/* const fetchUsers = async ({ queryKey, pageParam = 0 }) => {

  const [, isEmailVerificationRequired] = queryKey;
  const { data } = await axios.get(
    `/users/get-users?offset=${pageParam}&limit=${DataLimit.Members}&emailVerified=${isEmailVerificationRequired}`
  );
  return data;
}; */

const ProfilePage = () => {
  const [part, setPart] = useState(1);
  const [step, setStep] = useState(1);
  const [isSearch, SetIsSearch] = useState(false);
  // const { isEmailVerificationRequired } = useSelector((state: RootState) => state.settings);
  /* const { data, isFetching, isFetchingNextPage } = useInfiniteScroll({
    key: ['members', isEmailVerificationRequired],
    apiCall: fetchUsers,
    dataLimit: DataLimit.Members,
  }); */

  const [value2, setValue2] = useState('');
  const searchHandeler = (e: any) => {
    const value: string = e.target.value;
    if (value.trim().length > 0) {
      SetIsSearch(true);
      setValue2(value);
    } else {
      SetIsSearch(false);
    }
  };

  /* const isEmpty = !data?.pages[0] || data.pages[0].length === 0;
   */

  return (
    <LayoutCommunities hideRightSidebar>
      <Seo title="Members" />

      <HeaderProfile>
        <Image alt="" src={BackgroundProfile} />
        <MyImage>
          <Image alt="" src={PeopleIcon} />
        </MyImage>
        <MyButton>
          <Button>
            Edit 
            <ImWeb><Image alt="" src={EditIcon} /></ImWeb>
            <ImMob><Image alt="" src={EditMobIcon} /></ImMob>
          </Button>
        </MyButton>
      </HeaderProfile>

      {/* <Image alt="" src={LogoProfile} /> */}
      <DetailProfile />

      <ContainPage>
        <LeftContainPage>
          <AboutCard />
          <AboutContent />
          <WorkshopCard />
          <PreviousWorkshop />
          <ExpertiseCard />
          <ExpertiseWithContent />
          <TrainingCard />
          <TrainingPreview />
          <CertificationCard />
          <CertificationPreview />
          <JoinCommunityCard />
          <CommunityPreview />
        </LeftContainPage>
        <RightContainPage>
          <LanguageCard />
          <ConnexionCard />
        </RightContainPage>
      </ContainPage>
    </LayoutCommunities>
  );
};

export default ProfilePage;
