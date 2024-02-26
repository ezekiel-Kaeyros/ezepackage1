import Image from 'next/image';
import {
  DivWrapRightInsignPage,
  ContainerRightInsignPage,
  HeaderRightInsignPage,
  TitleStepRightInsignPage,
  SectionLeftHeaderRightInsignPage,
  TextSectionLeftHeaderRightInsignPage,
  ImageContainer,
  BlockSectionLeftHeaderRightInsignPage,
  BtnRightInsignPage,
  SpanBtn,
} from '../style';
import people from '../../../../public/people 1.svg';
import clock from '../../../../public/clock.svg';
import edit from '../../../../public/edit.svg';

type TypeHeaderRight = {
  title:string
};
const HeaderRight: React.FC<TypeHeaderRight> = ({ title }) => {
  return (
    <>
      <TitleStepRightInsignPage>{title}</TitleStepRightInsignPage>
      <HeaderRightInsignPage>
        <BlockSectionLeftHeaderRightInsignPage>
          {/* <SectionLeftHeaderRightInsignPage>
              <ImageContainer size="24"></ImageContainer>
              <Image src={clock} />
              <TextSectionLeftHeaderRightInsignPage>Last 10 days</TextSectionLeftHeaderRightInsignPage>
            </SectionLeftHeaderRightInsignPage> */}
          <SectionLeftHeaderRightInsignPage>
            <ImageContainer size="24" mt="13" mr="10">
              <Image src={clock} />
            </ImageContainer>
            <TextSectionLeftHeaderRightInsignPage>Last 10 days</TextSectionLeftHeaderRightInsignPage>
          </SectionLeftHeaderRightInsignPage>
          <SectionLeftHeaderRightInsignPage>
            <ImageContainer size="24" mt="15" mr="10">
              <Image src={people} />
            </ImageContainer>
            <TextSectionLeftHeaderRightInsignPage>10k Members</TextSectionLeftHeaderRightInsignPage>
          </SectionLeftHeaderRightInsignPage>
        </BlockSectionLeftHeaderRightInsignPage>

        <BtnRightInsignPage color="white" bg="#015E44">
          <ImageContainer size="24" mr="10">
            <Image src={edit} />
          </ImageContainer>
          <SpanBtn mt="2"> Create Post</SpanBtn>
        </BtnRightInsignPage>
      </HeaderRightInsignPage>
    </>
  );
};

export default HeaderRight;
