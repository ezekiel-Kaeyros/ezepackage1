import React, { FC, Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import {
  Root,
  ImageContainer,
  MyButton,
  FullName,
  Description,
  Title,
  HeaderContainer,
  SubTitle,
  FrenchContainer,
  Button,
  TopSection,
  BottomSection,
  SubTitleFont,
  OtherButton,
} from './style';
import addsquareIcon from '../../public/profile/add-square.svg';
import editIcon from '../../public/profile/edit.svg';
import { Spacing } from '../ui';
import { RootState } from '../../store';
import SendSquareIcon from '../../public/profile/send-sqaure-2.svg';
import GlobalIcon from '../../public/profile/global.svg';

const LanguageCard = () => {
  //  const [profile, setProfile] = useState(initialSettingProfile);

  return (
    <Spacing bottom="sm">
      <Root>
        <TopSection>
          <HeaderContainer>
            <Title>Languages</Title>
            <ImageContainer>
              <Image alt="icon card" src={addsquareIcon} />
              <Image alt="icon card" src={editIcon} />
            </ImageContainer>
          </HeaderContainer>
          <FrenchContainer>
            <SubTitle>French:</SubTitle>
            <Button>Basic</Button>
          </FrenchContainer>
          <FrenchContainer>
            <SubTitle>English:</SubTitle>

            <Button>Conversational</Button>
          </FrenchContainer>
        </TopSection>

        <BottomSection>
          <Title> Font page </Title>
          <HeaderContainer>
            <SubTitleFont>tobi01.eze.com</SubTitleFont>
            <ImageContainer>
              <Image alt="icon card" src={SendSquareIcon} />
            </ImageContainer>
          </HeaderContainer>

          <OtherButton>
            <Image alt="icon card" src={GlobalIcon} />
            Connect your domain
          </OtherButton>
        </BottomSection>

        {/* {authUser && <Spacing top="md"></Spacing>} */}
      </Root>
    </Spacing>
  );
};
export default LanguageCard;
