'use client';
import React, { useState } from 'react';
import {
  BodyCommunity,
  InputSearch,
  ImageSearch,
  Title,
  ListCommunity,
  RightSection,
  ItemAll,
  ItemData,
  LeftSection,
  SearchContainer,
} from '../../../components/Community/style2';
import Seo from '../../../components/Seo';

import Image from 'next/image';
import searchIcon from '../../../public/community/search-normal.svg';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';
import CommunityCard from '../../../components/Community/CommunityCard';
import { useDispatchAuth } from '../../../utils/useDispatchAuth';
import CommunityCards from '../../../components/Community/CommunityCard';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchChannels = async () => {
  const { data } = await axios.get('/channels');
  return data;
};

const CommunityPage = () => {
  const [part, setPart] = useState(1);
  const [step, setStep] = useState(1);
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

  useDispatchAuth();

  /* const isEmpty = !data?.pages[0] || data.pages[0].length === 0;
   */

  const { data: channels, isLoading } = useQuery('channels', fetchChannels);

  return (
    <LayoutCommunities hideRightSidebar>
      <Seo title="Members" />

      <BodyCommunity>
        <LeftSection>
          {/* <ListCommunity>
            <ItemData
              background={part === 1 ? 'var(--colors-Castleton-Green-100, #E6F0ED)' : ''}
              onClick={() => {
                setPart(1);
              }}
            >
              All Communities
            </ItemData>
            <ItemData
              background={part === 2 ? 'var(--colors-Castleton-Green-100, #E6F0ED)' : ''}
              onClick={() => {
                setPart(2);
              }}
            >
              Discover{' '}
            </ItemData>
          </ListCommunity> */}

          {part === 1 && (
            <>
              <SearchContainer>
                <ImageSearch>
                  <Image alt="icon card" src={searchIcon} />
                </ImageSearch>
                <InputSearch type="text" placeholder="Search communities" onChange={searchHandeler} />
              </SearchContainer>
              <ListCommunity>
                <ItemAll
                  underlined={step === 1 ? '2px solid #1D242D' : ''}
                  colored={step === 1 ? 'var(--colors-text-colors-primary, #1D242D)' : ''}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  {' '}
                  All{' '}
                </ItemAll>
              </ListCommunity>

              {step == 1 && (
                <>
                  <Title>Communities</Title>
                  <CommunityCards search={isSearch} channels={channels} categoryStep={'Data Analytics'} />
                </>
              )}
            </>
          )}

          {part === 2 && (
            <>
              <SearchContainer>
                <ImageSearch>
                  <Image alt="icon card" src={searchIcon} />
                </ImageSearch>
                <InputSearch type="text" placeholder="Search communities" onChange={searchHandeler} />
              </SearchContainer>
              <ListCommunity>
                <ItemAll
                  underlined={step === 1 ? '2px solid #1D242D' : ''}
                  colored={step === 1 ? 'var(--colors-text-colors-primary, #1D242D)' : ''}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  {' '}
                  All{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 2 ? '2px solid #1D242D' : ''}
                  colored={step === 2 ? 'var(--colors-text-colors-primary, #1D242D)' : ''}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  {' '}
                  Data Analytics{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 3 ? '2px solid #1D242D' : ''}
                  colored={step === 3 ? 'var(--colors-text-colors-primary, #1D242D)' : ''}
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  {' '}
                  Agro-Food Sciences{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 4 ? '2px solid #1D242D' : ''}
                  colored={step === 4 ? 'var(--colors-text-colors-primary, #1D242D)' : ''}
                  onClick={() => {
                    setStep(4);
                  }}
                >
                  {' '}
                  Microbiologist{' '}
                </ItemAll>
              </ListCommunity>

              {step == 1 && (
                <>
                  <Title>Data Analytics Community</Title>

                  <CommunityCard search={isSearch} value={value2} categoryStep={'Data Analytics'} />

                  {/* {isFetchingNextPage && <LoadingDots />} */}

                  <Title>Agro-Food Sciences Community</Title>
                  <CommunityCard search={isSearch} value={value2} categoryStep={'Agro-Food Sciences'} />

                  <Title>Microbiologist Community</Title>
                  <CommunityCard search={isSearch} value={value2} categoryStep={'Microbiologist'} />
                </>
              )}
              {step == 2 && (
                <>
                  <Title>Data Analytics Community</Title>
                  <CommunityCard search={isSearch} value={value2} categoryStep={'Data Analytics'} />
                </>
              )}
              {step == 3 && (
                <>
                  <Title>Agro-Food Sciences Community</Title>
                  <CommunityCard search={isSearch} value={value2} categoryStep={'Agro-Food Sciences'} />
                </>
              )}
              {step == 4 && (
                <>
                  <Title>Microbiologist Community</Title>
                  <CommunityCard search={isSearch} value={value2} categoryStep={'Microbiologist'} />
                </>
              )}
            </>
          )}
        </LeftSection>

        <RightSection>{/* <InsightsCard />   */}</RightSection>
      </BodyCommunity>
    </LayoutCommunities>
  );
};

export default CommunityPage;
