'use client';
import React, { useState } from 'react';
import {
  SearchContainer,
  Title,
  ImageSearch,
  InputSearch,
  ContainPage,
  LeftContainPage,
  MyButton,
} from '../../components/ListCommunity/styleListCommunityPage';

import Seo from '../../components/Seo';
import searchIcon from '../../public/community/search-normal.svg';

import Image from 'next/image';
import plusIcon from '../../public/community/plusIcon.svg';

import LayoutCommunities from '../../components/Layout/CommuntiesLayout';

import { Button, Spacing } from '../../components/ui';

import ListCommunityCard from '../../components/ProfileCard/ListCommunity/ListCommunity';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchChannels = async () => {
  const { data } = await axios.get('/channels');
  return data;
};

const ProfilePage = () => {
  const [isSearch, SetIsSearch] = useState(false);

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

  return (
    <LayoutCommunities hideRightSidebar>
      <Seo title="Members" />

      <ContainPage>
        <LeftContainPage>
          <Title>All Your Communities </Title>
          <Spacing top="md"></Spacing>
          <SearchContainer>
            <ImageSearch>
              <Image alt="icon card" src={searchIcon} />
            </ImageSearch>
            <InputSearch type="text" placeholder="Search communities" onChange={searchHandeler} />
          </SearchContainer>
          <Spacing top="lg"></Spacing>
          <ListCommunityCard search={isSearch} value={value2} />
          <MyButton>
            <Button color="ezeColor" radius="sm">
              See more &nbsp;
              <Image alt="icon" src={plusIcon} />
            </Button>
          </MyButton>
        </LeftContainPage>
        {/*  <RightContainPage>
        <LanguageCard />
        <ConnexionCard />
      </RightContainPage> */}
      </ContainPage>
    </LayoutCommunities>
  );
};

export default ProfilePage;
