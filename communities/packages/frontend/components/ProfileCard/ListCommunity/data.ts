import icon1 from '../../../public/community/ListComm/sch.svg';
import icon2 from '../../../public/community/ListComm/kaeyros.svg';
import icon3 from '../../../public/community/ListComm/ifyar.svg';
import beneficial from '../../../public/community/ListComm/beneficial.svg';
import ecopark from '../../../public/community/ListComm/ecopark.svg';
import mboalab from '../../../public/community/ListComm/mboalab.svg';
import fobang from '../../../public/community/ListComm/fobang.svg';
import moreIcon from '../../../public/community/more-square.svg';
import avatar1 from '../../../public/avatar_listCommunity/Ellipse1.svg';
import avatar2 from '../../../public/avatar_listCommunity/Ellipse2.svg';
import avatar3 from '../../../public/avatar_listCommunity/Ellipse3.svg';
import avatar4 from '../../../public/avatar_listCommunity/Ellipse4.svg';

interface IComminity {
  fullNameJob: string;
  nameCommunity: string;
  imgJob: string;
  descriptionJob: string;
  descriptionCommunity: string;
  textBtn: string;
  avatarCommunity: any;
  moreicon: string;
  type: number;
}

export const initialProducts: IComminity[] = [
  {
    fullNameJob: 'SCH',
    nameCommunity: "Data Analytics",
    imgJob: icon1,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Kaeyros Analytics',
    nameCommunity: "Data Analytics",
    imgJob: icon2,
    descriptionJob: 'Data Analysis Company',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'IFYAR',
    nameCommunity: "Agro-Food Sciences",
    imgJob: icon3,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'View Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 2,
  },
  {
    fullNameJob: 'Beneficial Bio ',
    nameCommunity: "Scientific Community",
    imgJob: beneficial,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'EcoPark Cameroun',
    nameCommunity: "Leisure area",
    imgJob: ecopark,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Mboalab',
    nameCommunity: "Artificial Intelligence for public...",
    imgJob: mboalab,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Fobang foundation',
    nameCommunity: "Lorem ipsum dolor sit amet.",
    imgJob: fobang,
    descriptionJob: 'Scientific Community',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar3,avatar4],
    moreicon: moreIcon,
    type: 1,
  },
  
];

