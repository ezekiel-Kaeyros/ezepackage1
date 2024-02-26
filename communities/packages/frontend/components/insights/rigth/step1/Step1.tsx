import Image from 'next/image';
import {
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
import { SectionStep1, LineSectionStep1, TopLineSectionStep1, DivBottomSectionStep1 } from './style';
import clock from '../../../../public/clock.svg';
import arrow from '../../../../public/arrow.svg';
import HeaderRight from '../header/HeaderRight';

type TypeStep1 = {
  dataCommunuity?: { img?: any; title?: string; value?: string }[];
  step: string;
  UpdateState?: any;
};
const Step1: React.FC<TypeStep1> = ({ step, dataCommunuity, UpdateState }) => {
  return (
    <>
      <ContainerRightInsignPage>
        <HeaderRight title="Community overview" />
        <SectionStep1>
          {dataCommunuity.map((item, index) => {
            return (
              <LineSectionStep1 key={index}>
                <TopLineSectionStep1>
                  <ImageContainer size="24" mr="7">
                    <Image src={item.img} alt={item.title} />
                  </ImageContainer>
                  <SpanBtn mt="5" size="16">
                    {item.title}
                  </SpanBtn>
                </TopLineSectionStep1>

                <SpanBtn size="18">{item.value}</SpanBtn>
              </LineSectionStep1>
            );
          })}
        </SectionStep1>
        <DivBottomSectionStep1>
          <SpanBtn
            color="#01684B"
            weight="700"
            mt="2"
            size="18"
            onClick={() => {
              UpdateState('2');
            }}
            cursor="pointer"
          >
            See all details
          </SpanBtn>
          <ImageContainer
            size="24"
            onClick={() => {
              UpdateState('2');
            }}
            cursor="pointer"
          >
            <Image src={arrow} alt="" />
          </ImageContainer>
        </DivBottomSectionStep1>
      </ContainerRightInsignPage>

      <ContainerRightInsignPage>
        <>
          <TitleStepRightInsignPage>Recent content</TitleStepRightInsignPage>
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
            </BlockSectionLeftHeaderRightInsignPage>

            <BtnRightInsignPage color="#015E44" bg="transparent">
              <SpanBtn mt="2"> Create Post</SpanBtn>
            </BtnRightInsignPage>
          </HeaderRightInsignPage>
        </>
      </ContainerRightInsignPage>
    </>
  );
};

export default Step1;
