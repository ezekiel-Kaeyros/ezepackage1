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
  SpanBtn
} from './style';
import people from '../../../public/people2.svg';
import galery from '../../../public/gallery.svg';
import global from '../../../public/global.svg';
import share from '../../../public/share.svg';
import linc from '../../../public/link.svg';
import smile from '../../../public/smileys.svg';
import add from '../../../public/profile-add.svg';
import msg from '../../../public/message-text.svg';
import lik from '../../../public/like.svg';
import Image from 'next/image';
import Step1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import Like from '../../Like';

const RightInsights: React.FC<{ step: string; UpdateState:any }> = ({ step, UpdateState }) => {
  const DatasStep2 = {
    dataCommunuity: [
      { img: global, title: 'Publication cover', value: '05' },
      { img: people, title: 'Interaction with the publication', value: '05' },
      { img: lik, title: 'New Page Likes', value: '05' },
      { img: add, title: 'New Followers', value: '05' },
    ],

    dataInterAction: [
      { img: smile, title: 'Reaction', value: '05' },
      { img: msg, title: 'Feedback', value: '05' },
      { img: share, title: 'Shares', value: '05' },
      { img: galery, title: 'Photo views', value: '05' },
      { img: linc, title: 'Link clicks', value: '05' },
    ],
  };
  return (
    <DivWrapRightInsignPage>
      {step === '1' && <Step1 step={step} dataCommunuity={DatasStep2.dataCommunuity} UpdateState={UpdateState} />}
      {step === '2' && (
        <Step2 step={step} dataCommunuity={DatasStep2.dataCommunuity} dataInterAction={DatasStep2.dataInterAction} />
      )}
      {step === '3' && <Step3 />}
    </DivWrapRightInsignPage>
  );
};

export default RightInsights;
