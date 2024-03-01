import Sch from '../../../public/profileContent/communityPreview/sch.svg';
import Ifyar from '../../../public/profileContent/communityPreview/ifyar.svg';
import Kaeyros from '../../../public/profileContent/communityPreview/kaeyros.svg';


interface ICommunity {
  idCommunity: number,
  communityLogo: string,
  associationCommunity: string,
  MemberCommunity: string
}

export const initialCommunity: ICommunity[] = [
  {
    idCommunity: 1,
    communityLogo: Sch,
    associationCommunity: "Foundations of User Experience (UX) Design ",
    MemberCommunity: "Coursera Inc."
  },
  {
    idCommunity: 2,
    communityLogo: Ifyar,
    associationCommunity: "JavaScript Algorithms anda Data Structures",
    MemberCommunity: "Freecodecamp.org"
  },
  {
    idCommunity: 3,
    communityLogo: Kaeyros,
    associationCommunity: "Responsive Web design",
    MemberCommunity: "Freecodecamp.org"
  },
 
  
  
];
