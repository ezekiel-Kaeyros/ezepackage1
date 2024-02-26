import Image from 'next/image';
import { Item } from '../../Notification/style';
import { DivWrapLeftInsignPage, SubTitleLeftInsign, TitleLeftInsign , LineLeftInsight, TitleLineLeft, ImgLineLeft, ImageContainer} from './style';

type TypeLeftInsign = {
  data: {
    id: string;
    title: string;
    img?: any;
    state: string;
    UpdateState?: any;
    img1?:any;
    img2?:any;
  }[];
};
const LeftInsights: React.FC<TypeLeftInsign> = ({data}) => {
  return (
    <DivWrapLeftInsignPage>
      <TitleLeftInsign>Page Insights</TitleLeftInsign>
      <SubTitleLeftInsign>SCH For Health</SubTitleLeftInsign>
     

      {data.map((Item)=>{return (
        <LineLeftInsight
          key={Item.id}
          active={Item.state !== '' ? Item.state : ''}
          id={Item.id}
          onClick={() => {
            Item.UpdateState(Item.id);
          }}
        >
          {/* <ImgLineLeft src={ Item.img2} alt='' /> */}
          <ImageContainer size='32' mt='10' mr='20'>
            <Image src={Item.id===Item.state ? Item.img1 : Item.img2} alt={Item.title} />
          </ImageContainer>
          <TitleLineLeft>{Item.title}</TitleLineLeft>{' '}
        </LineLeftInsight>
      );})}
    </DivWrapLeftInsignPage>
  );
};

export default LeftInsights;
