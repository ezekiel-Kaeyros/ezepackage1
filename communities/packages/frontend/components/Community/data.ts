import icon1 from '../../public/community/ifyar.svg';
import icon2 from '../../public/community/kaeyros.svg';
import icon3 from '../../public/community/ifyar.svg';
import moreIcon from '../../public/community/more-square.svg';
import avatar1 from '../../public/block_icon_community/Ellipse 107.svg';
import avatar2 from '../../public/block_icon_community/Ellipse 108.svg';
import avatar5 from '../../public/block_icon_community/Ellipse 111.svg';
import avatar3 from '../../public/block_icon_community/Ellipse 109.svg';
import avatar4 from '../../public/block_icon_community/Ellipse 110.svg';

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
    fullNameJob: 'Scientific Center for Health',
    nameCommunity: "Data Analytics",
    imgJob: icon1,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Kaeyros Analytics',
    nameCommunity: "Data Analytics",
    imgJob: icon2,
    descriptionJob: 'We Build Data Driven Products',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'IFYAR',
    nameCommunity: "Agro-Food Sciences",
    imgJob: icon3,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'View Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 2,
  },
  {
    fullNameJob: 'Scientific Center for Health',
    nameCommunity: "Agro-Food Sciences",
    imgJob: icon1,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 2,
  },
  {
    fullNameJob: 'Kaeyros Analytics',
    nameCommunity: "Microbiologist",
    imgJob: icon2,
    descriptionJob: 'We Build Data Driven Products',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 3,
  },
  {
    fullNameJob: 'IFYAR',
    nameCommunity: "Data Analytics",
    imgJob: icon3,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'View Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Scientific Center for Health',
    nameCommunity: "Agro-Food Sciences",
    imgJob: icon1,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 2,
  },
  {
    fullNameJob: 'Kaeyros Analytics',
    nameCommunity: "Microbiologist",
    imgJob: icon2,
    descriptionJob: 'We Build Data Driven Products',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 3,
  },
  {
    fullNameJob: 'IFYAR',
    nameCommunity: "Data Analytics",
    imgJob: icon3,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'View Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 1,
  },
  {
    fullNameJob: 'Scientific Center for Health',
    nameCommunity: "Agro-Food Sciences",
    imgJob: icon1,
    descriptionJob: 'La Scientific Center for Health',
    descriptionCommunity: 'Rodrigue foe and 20 friends are memebers',
    textBtn: 'Join Community',
    
    avatarCommunity: [avatar1,avatar2,avatar5,avatar4,avatar3],
    moreicon: moreIcon,
    type: 2,
  },
];

interface ICategoryCommunity {
  nameCommunity: string;
  
}
export const initialCategoryOfCommunity: ICategoryCommunity[] = [
  {
    nameCommunity: 'All',
  
  },
  {
    nameCommunity: 'Data Analytics',
  },
  {
    nameCommunity: 'Agro-Food Sciences',
  },
  {
    nameCommunity: 'Microbiologist',
  }

]

//export const initialCategory: ['All','Data Analytics','Agro-Food Sciences','Microbiologist']