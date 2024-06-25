import React, { Fragment, useState, useEffect } from 'react';
import { InnerWrapper, MainUpperContent, Wrapper } from './style';
import Image from 'next/image';
import {
  Root,
  ImageContainer,
  MembersNumber,
  BlockFollow,
  MyButton,
  BanqueImage,
  ListMembers,
  FullName,
  Description,
  HeaderContainer,
  DescriptionContainer,
  BlockMembers,
  ListImage,
} from './style';
import { Button, Link, Spacing } from '../ui';
import { initialProducts } from './data';
import iconMember from '../../public/people.svg';
import { truncateText } from '../../utils/truncatText';
import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CommunityCards: React.FC<{ search: boolean; channels?: any; categoryStep: string }> = ({
  search,
  channels,
  categoryStep,
}) => {
  const [table, setTable] = useState([]);
  const [products] = useState(initialProducts);
  const DataAnalytics = products.filter((item) => item.type === 1);
  const AgroFoods = products.filter((item) => item.type === 2);
  const Microbiologists = products.filter((item) => item.type === 3);

  // const table1 = products.filter(
  //   (item) =>
  //     item.fullNameJob.toLowerCase().includes(value.toLowerCase()) ||
  //     item.descriptionJob.toLowerCase().includes(value.toLowerCase()) ||
  //     item.descriptionCommunity.toLowerCase().includes(value.toLowerCase())
  // );
 const { t: translate } = useTranslation('common');

  useEffect(() => {
    if (categoryStep == 'Data Analytics' && !search) {
      setTable(DataAnalytics);
    } else if (categoryStep == 'Agro-Food Sciences' && !search) {
      setTable(AgroFoods);
    } else if (categoryStep == 'Microbiologist' && !search) {
      setTable(Microbiologists);
    } else {
      // setTable(table1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryStep, search]);

  return (
    <>
      <Wrapper>
        <Fragment>
          {channels?.map((community, index) => {
            const truncatedCommunityDescription = truncateText (community?.description, 150); 
            // console.log("communitycommunity", community)
            return (
              <Link key={index} href={`/communities/channel/${community.name}`}>
                <Root>
                  <InnerWrapper>
                    <MainUpperContent>
                      <BlockMembers>
                        <Image alt="icon" src={iconMember} />
                        <MembersNumber>
                          {community?.members}{' '}
                          {community.members && community.members > 1 ? translate('member') + 's' : translate('member')}
                        </MembersNumber>
                      </BlockMembers>

                      <Link href="#" disableBorderOnHover>
                        <HeaderContainer>
                          {community.img && (
                            <ImageContainer>
                              <Image alt="icon card" width={60} height={50} src={community.imgJob} />
                            </ImageContainer>
                          )}

                          <DescriptionContainer>
                            <FullName> {community?.name} </FullName>
                            <Description> {truncatedCommunityDescription} </Description>
                          </DescriptionContainer>
                        </HeaderContainer>
                      </Link>
                      {/* <BlockMembers>
                        <Image alt="icon" src={iconMember} />
                        <MembersNumber>10k Members</MembersNumber>
                      </BlockMembers> */}
                      <Spacing top="sm" bottom="xs">
                        <BlockFollow>
                          {/* <BanqueImage>
                            {community.avatarCommunity.map((avatar) => {
                              return (
                                <ListImage key="">
                                  <Image key={avatar} alt="icon" src={avatar} />
                                </ListImage>
                              );
                            })}
                          </BanqueImage> */}
                          <ListMembers>{community.descriptionCommunity} </ListMembers>
                        </BlockFollow>
                      </Spacing>
                    </MainUpperContent>

                    <MyButton>
                      <Button color="ezeColor" radius="full">
                        {translate('btnCardCommunity')}
                      </Button>
                      {community.moreicon ? (
                        <Image alt="icon card" width={30} height={30} src={community.moreicon} />
                      ) : (
                        <span></span>
                      )}
                    </MyButton>
                  </InnerWrapper>
                </Root>
              </Link>
            );
          })}
        </Fragment>
      </Wrapper>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? 'en', ['common'])),
//   },
// });
export default CommunityCards;
