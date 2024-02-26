import Image from 'next/image';
import HeaderRight from '../header/HeaderRight';
import {
  DivWrapRightInsignPage,
  ContainerRightInsignPage,
  ImageContainer,
  SpanBtn,
  TitleStepRightInsignPage,
} from '../style';
import { SectionStep2, LineSectionStep2, LeftLineSectionStep2 } from './style';
type TypeStep2 = {
  dataCommunuity?: { img?: any; title?: string; value?: string }[];
  dataInterAction?: { img?: any; title?: string; value?: string }[];
  step: string;
};
const Step2: React.FC<TypeStep2> = ({ step, dataCommunuity, dataInterAction }) => {
  return (
    <>
      <ContainerRightInsignPage>
        <HeaderRight title="Community overview" />

        <SectionStep2>
          {dataCommunuity.map((item, index) => {
            return (
              <LineSectionStep2 key={index}>
                <LeftLineSectionStep2>
                  <ImageContainer size="24" mr="8">
                    <Image src={item.img} alt={item.title} />
                  </ImageContainer>
                  <SpanBtn size="16" mt="5">
                    {item.title}
                  </SpanBtn>
                </LeftLineSectionStep2>
                <SpanBtn size="16">{item.value}</SpanBtn>
              </LineSectionStep2>
            );
          })}
        </SectionStep2>
        <SectionStep2>
          <TitleStepRightInsignPage>Interactions</TitleStepRightInsignPage>
          <br />
          {dataInterAction.map((item, index) => {
            return (
              <LineSectionStep2 key={index}>
                <LeftLineSectionStep2>
                  <ImageContainer size="24" mr="8">
                    <Image src={item.img} alt={item.title} />
                  </ImageContainer>
                  <SpanBtn size="16" mt="5">
                    {item.title}
                  </SpanBtn>
                </LeftLineSectionStep2>
                <SpanBtn size="16">{item.value}</SpanBtn>
              </LineSectionStep2>
            );
          })}
        </SectionStep2>
      </ContainerRightInsignPage>
    </>
  );
};

export default Step2;
