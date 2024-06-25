import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from 'next/image';
import {
  Root,
  Wrapper,
  ImageContainer,
  MembersNumber,
  MyButton,
  BanqueImage,
  FullName,
  Description,
  HeaderContainer,
  DescriptionContainer,
  BlockMembers,
  Button1,
  Public,
  OurImage,
} from './style';

import { RootState } from '../../../store';
import { initialProducts } from './data';
import iconUnlock from '../../../public/community/unlock.svg';
import addIcon from '../../../public/add (2).svg';
import { useQuery } from 'react-query';

const ListCommunityCard: React.FC<{ search: boolean; value?: string }> = ({ search, value }) => {
  const [, setTable] = useState([]);
  const authUser = useSelector((state: RootState) => state.auth.user);
  const [products, setProducts] = useState(initialProducts);

  const table1 = products.filter(
    (item) =>
      item.fullNameJob.toLowerCase().includes(value.toLowerCase()) ||
      item.descriptionJob.toLowerCase().includes(value.toLowerCase()) ||
      item.descriptionCommunity.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    if (!search) {
      setTable(products);
    } else {
      setTable(table1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, search]);

  // Fetching

  // console.log('channels', channels);
  return (
    <>
      <Wrapper>
        {products.map((product) => {
          return (
            <>
              <Root>
                <HeaderContainer>
                  <ImageContainer>
                    <Image alt="icon card" src={product.imgJob} />
                  </ImageContainer>
                  <DescriptionContainer>
                    <FullName> {product.fullNameJob} </FullName>
                    <Description> {product.descriptionJob} </Description>
                    <BlockMembers>
                      <BanqueImage>
                        {product.avatarCommunity.map((avatar) => {
                          return (
                            <OurImage key="">
                              <Image key={avatar} alt="icon" src={avatar} />
                            </OurImage>
                          );
                        })}
                      </BanqueImage>
                      <MembersNumber>10k Members</MembersNumber>
                      <Public>
                        <Image alt="public community" src={iconUnlock} />
                        &nbsp;
                        <Description> Public </Description>
                      </Public>
                    </BlockMembers>
                  </DescriptionContainer>
                </HeaderContainer>
                <MyButton>
                  <Button1>
                    <Image alt="add community" src={addIcon} />
                    Join community
                  </Button1>
                </MyButton>
              </Root>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};
export default ListCommunityCard;
