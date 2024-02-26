import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
} from './style';
import { Button, Link, P, Spacing } from '../ui';
import { RootState } from '../../store';
import { initialProducts } from './data';
import iconMember from '../../public/people.svg';
import img1 from '../../public/block_icon_community/Ellipse 107.svg';
import img2 from '../../public/block_icon_community/Ellipse 108.svg';
import img5 from '../../public/block_icon_community/Ellipse 111.svg';
import img3 from '../../public/block_icon_community/Ellipse 109.svg';
import img4 from '../../public/block_icon_community/Ellipse 110.svg';

const CommunityMicrobiologist: React.FC<{ search: boolean; value?: string }> = ({ search, value }) => {
  const [color, setColor] = useState('');
  const [table, setTable] = useState([]);
  const authUser = useSelector((state: RootState) => state.auth.user);
  const [products, setProducts] = useState(initialProducts);
  const Microbiologists = products.filter((item) => item.type === 3);
  const table1 = products.filter(
    (item) =>
      item.fulnameJob.toLowerCase().includes(value.toLowerCase()) ||
      item.descriptionJob.toLowerCase().includes(value.toLowerCase()) ||
      item.descriptionCommunity.toLowerCase().includes(value.toLowerCase())
  );
  useEffect(() => {
    if (!search) {
      setTable(Microbiologists);
    } else {
      setTable(table1);
    }
  }, [value, search]);

  return (
    <>
      {Microbiologists.map((product) => {
        return (
          <>
            <Root>
              <Link href="#" disableBorderOnHover>
                <HeaderContainer>
                  <ImageContainer>
                    <Image alt="icon card" width={60} height={50} src={product.imgJob} />
                  </ImageContainer>
                  <DescriptionContainer>
                    <FullName> {product.fulnameJob} </FullName>
                    <Description> {product.descriptionJob} </Description>
                  </DescriptionContainer>
                </HeaderContainer>
              </Link>
              <BlockMembers>
                <Image alt="icon" src={iconMember} />
                <MembersNumber>10k Members</MembersNumber>
              </BlockMembers>
              <Spacing top="sm" bottom="xs">
                <BlockFollow>
                  <BanqueImage>
                    <Image alt="icon" src={img1} />
                    <Image alt="icon" src={img2} />
                    <Image alt="icon" src={img3} />
                    <Image alt="icon" src={img4} />
                    <Image alt="icon" src={img5} />
                  </BanqueImage>
                  <ListMembers>{product.descriptionCommunity} </ListMembers>
                </BlockFollow>
              </Spacing>

              <MyButton>
                <Button color="ezeColor" radius="full">
                  {product.textBtn}
                </Button>
                {product.moreicon ? (
                  <Image alt="icon card" width={30} height={30} src={product.moreicon} />
                ) : (
                  <span></span>
                )}
              </MyButton>

              {authUser && <Spacing top="md"></Spacing>}
            </Root>
          </>
        );
      })}
    </>
  );
};
export default CommunityMicrobiologist;
