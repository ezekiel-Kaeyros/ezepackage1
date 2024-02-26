'use client';
import React, { Fragment, useState } from 'react';
import { Wrapper } from '../../../components/Community/style';
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
import CommunityAgroFood from '../../../components/Community/CommunityAgroFood';
import CommunityMicrobiologist from '../../../components/Community/CommunityMicrobiologist';
import CommunityDataAnalytics from '../../../components/Community/CommunityDataAnalytics';
import InsightsCard from '../../../components/CardInsights/Insights';
import Image from 'next/image';
import searchIcon from '../../../public/community/search-normal.svg';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';

/* const fetchUsers = async ({ queryKey, pageParam = 0 }) => {

  const [, isEmailVerificationRequired] = queryKey;
  const { data } = await axios.get(
    `/users/get-users?offset=${pageParam}&limit=${DataLimit.Members}&emailVerified=${isEmailVerificationRequired}`
  );
  return data;
}; */

const CommunityPage = () => {
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

      <BodyCommunity>
        <LeftSection>
          <ListCommunity>
            <ItemData
              background={part === 1 ? 'var(--colors-Castleton-Green-100, #E6F0ED)' : ''}
              onClick={() => {
                setPart(1);
              }}
            >
              My Communities
            </ItemData>
            <ItemData
              background={part === 2 ? 'var(--colors-Castleton-Green-100, #E6F0ED)' : ''}
              onClick={() => {
                setPart(2);
              }}
            >
              Discover{' '}
            </ItemData>
          </ListCommunity>

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
                  underlined={step === 1 ? 'underline' : ''}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  {' '}
                  All{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 2 ? 'underline' : ''}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  {' '}
                  Data Analytics{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 3 ? 'underline' : ''}
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  {' '}
                  Agro-Food Sciences{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 4 ? 'underline' : ''}
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
                  <Wrapper>
                    <Fragment>
                      <CommunityDataAnalytics search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>

                  <Title>Agro-Food Sciences Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityAgroFood search={isSearch} value={value2} />
                    </Fragment>
                  </Wrapper>

                  <Title>Microbiologist Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityMicrobiologist search={isSearch} value={value2} />
                    </Fragment>
                  </Wrapper>
                </>
              )}
              {step == 2 && (
                <>
                  <Title>Data Analytics Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityDataAnalytics search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
                </>
              )}
              {step == 3 && (
                <>
                  <Title>Agro-Food Sciences Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityAgroFood search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
                </>
              )}
              {step == 4 && (
                <>
                  <Title>Microbiologist Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityMicrobiologist search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
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
                  underlined={step === 1 ? 'underline' : ''}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  {' '}
                  All{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 2 ? 'underline' : ''}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  {' '}
                  Data Analytics{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 3 ? 'underline' : ''}
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  {' '}
                  Agro-Food Sciences{' '}
                </ItemAll>
                <ItemAll
                  underlined={step === 4 ? 'underline' : ''}
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
                  <Wrapper>
                    <Fragment>
                      <CommunityDataAnalytics search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>

                  <Title>Agro-Food Sciences Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityAgroFood search={isSearch} value={value2} />
                    </Fragment>
                  </Wrapper>

                  <Title>Microbiologist Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityMicrobiologist search={isSearch} value={value2} />
                    </Fragment>
                  </Wrapper>
                </>
              )}
              {step == 2 && (
                <>
                  <Title>Data Analytics Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityDataAnalytics search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
                </>
              )}
              {step == 3 && (
                <>
                  <Title>Agro-Food Sciences Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityAgroFood search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
                </>
              )}
              {step == 4 && (
                <>
                  <Title>Microbiologist Community</Title>
                  <Wrapper>
                    <Fragment>
                      <CommunityMicrobiologist search={isSearch} value={value2} />
                    </Fragment>

                    {/* {isFetchingNextPage && <LoadingDots />} */}
                  </Wrapper>
                </>
              )}
            </>
          )}
        </LeftSection>

        <RightSection>
          <InsightsCard />
        </RightSection>
      </BodyCommunity>
    </LayoutCommunities>
  );
};

export default CommunityPage;
