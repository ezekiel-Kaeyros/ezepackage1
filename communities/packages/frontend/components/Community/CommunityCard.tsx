import React, { Fragment, useState, useEffect } from 'react';
import { Wrapper } from './style';
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
            return (
              <Link key={index} href={`/communities/channel/${community.name}`}>
                <Root>
                  <Link href="#" disableBorderOnHover>
                    <HeaderContainer>
                      {community.img && (
                        <ImageContainer>
                          <Image alt="icon card" width={60} height={50} src={community.imgJob} />
                        </ImageContainer>
                      )}

                      <DescriptionContainer>
                        <FullName> {community?.name} </FullName>
                        <Description> {community?.description} </Description>
                      </DescriptionContainer>
                    </HeaderContainer>
                  </Link>
                  <BlockMembers>
                    <Image alt="icon" src={iconMember} />
                    <MembersNumber>10k Members</MembersNumber>
                  </BlockMembers>
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

                  <MyButton>
                    <Button color="ezeColor" radius="full">
                      View community
                    </Button>
                    {community.moreicon ? (
                      <Image alt="icon card" width={30} height={30} src={community.moreicon} />
                    ) : (
                      <span></span>
                    )}
                  </MyButton>
                </Root>
              </Link>
            );
          })}
        </Fragment>
      </Wrapper>
    </>
  );
};
export default CommunityCards;
