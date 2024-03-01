'use client';
import React, { Fragment, useState } from 'react';
import { TopProfile, LocalisationProfile, Title, EditAction1, EditAction2, ItemProfile, ListStatistique, Statistique, Stat,TitleStat, DividerStat, EditProfile, ListButtonProfile, MyButton } from './style';

import Seo from '../../components/Seo';

import InsightsCard from '../../components/CardInsights/Insights';
import Image from 'next/image';
import { initialCategoryOfCommunity } from '../../components/Community/data';

import LayoutCommunities from '../../components/Layout/CommuntiesLayout';
import CommunityCard from '../../components/Community/CommunityCard';

import BackgroundProfile from '../../public/profile/Rectangle29.svg'
import LogoProfile from '../../public/profile/empty-avatar.svg'
import { Button, Link, P, Spacing } from '../../components/ui';
import MoreButton from '../../public/profile/more.svg'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import LanguageCard from '../../components/LanguagesCard/LanguageCard';
import ConnexionCard from '../../components/ConnexionCard/ConnexionCard';
import CalendarIcon from '../../public/profile/calendar.svg';
import LocationIcon from '../../public/profile/location.svg';


/* const fetchUsers = async ({ queryKey, pageParam = 0 }) => {

  const [, isEmailVerificationRequired] = queryKey;
  const { data } = await axios.get(
    `/users/get-users?offset=${pageParam}&limit=${DataLimit.Members}&emailVerified=${isEmailVerificationRequired}`
  );
  return data;
}; */

const DetailProfile = () => {
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
    
     <TopProfile>
        <Title>Pierre Toube</Title>
        <LocalisationProfile>
          <ItemProfile>@pierre-toube</ItemProfile>
          <ItemProfile><Image alt="calendar" src={CalendarIcon}/> Joined Nov 2023</ItemProfile>
          <ItemProfile><Image alt="location" src={LocationIcon}/>Yaoundé, Cameroun</ItemProfile>
        </LocalisationProfile>
        <ListStatistique>

          <Statistique>
         
            <Stat>0</Stat>
            <TitleStat>Followers</TitleStat>
            
          </Statistique>
        
          <Statistique>
          <DividerStat> </DividerStat>
            <Stat>0</Stat>
            <TitleStat>Following</TitleStat>
            
          </Statistique>
          
          <Statistique>
          <DividerStat> </DividerStat>
            <Stat>0</Stat>
            <TitleStat>Articles</TitleStat>
            
          </Statistique>
        </ListStatistique>
        <Spacing top="sm" bottom="xs">
            <EditProfile>
            <EditAction1>
            <Button color="ezeColor">Edit profile</Button>
            </EditAction1>
            <EditAction2>
            <Button color="textSecondary2"><Image alt="" src={MoreButton} /></Button>
            </EditAction2>
            </EditProfile>
        </Spacing>
        <ListButtonProfile>
          <MyButton>
            <Button color="white" textColor="ezeColor"> Profile info</Button>
          </MyButton>
          <MyButton>
          <Button color="white" textColor="ezeColor" >Post</Button>
          </MyButton>
          <MyButton>
          <Button color="white" >Articles</Button>
          </MyButton>
        </ListButtonProfile>
     </TopProfile>


  );
};

export default DetailProfile;
