import Logo from '../../../public/profileContent/Ellipse 99.svg';




interface ICertification {
  idCertification: number,
  workshopIcon: string,
  titleCertification: string,
  LinkCertification: string,
  MonthCertification: string
}

export const initialCertification: ICertification[] = [
  {
    idCertification: 1,
    workshopIcon: Logo,
    titleCertification: "Foundations of User Experience (UX) Design ",
    LinkCertification: "Coursera Inc.",
    MonthCertification: "December 2022 - December 2022"
  },
  {
    idCertification: 2,
    workshopIcon: Logo,
    titleCertification: "JavaScript Algorithms anda Data Structures",
    LinkCertification: "Freecodecamp.org",
    MonthCertification: "August 2022 - November 2022"
  },
  {
    idCertification: 3,
    workshopIcon: Logo,
    titleCertification: "Responsive Web design",
    LinkCertification: "Freecodecamp.org",
    MonthCertification: "November 2018 - May 2019"
  },
 
  
  
];
