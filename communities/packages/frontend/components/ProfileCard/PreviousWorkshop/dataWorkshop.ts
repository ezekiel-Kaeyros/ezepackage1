import WorkshopIcon1 from '../../../public/profileContent/workshop/Rectangle1.svg';
import WorkshopIcon2 from '../../../public/profileContent/workshop/Rectangle2.svg';
import WorkshopIcon3 from '../../../public/profileContent/workshop/Rectangle3.svg';



interface IWorkshop {
  idWorkshop: number,
  workshopIcon: string,
  titleWorkshop: string,
  dateWorkshop: string,
  vileWorkshop: string
}

export const initialWorkshop: IWorkshop[] = [
  {
    idWorkshop: 1,
    workshopIcon: WorkshopIcon1,
    titleWorkshop: "International Workshop SCH & Kaeyros Analytics",
    dateWorkshop: "27 Sep. 2023",
    vileWorkshop: "Douala, Cameroun"
  },
  {
    idWorkshop: 2,
    workshopIcon: WorkshopIcon2,
    titleWorkshop: "Scientifc Writing",
    dateWorkshop: "30 Nov. 2023",
    vileWorkshop: "Douala, Cameroun"
  },
  {
    idWorkshop: 3,
    workshopIcon: WorkshopIcon3,
    titleWorkshop: "Ethique De La Rechecherce",
    dateWorkshop: "12 Oct. 2023",
    vileWorkshop: "Douala, Cameroun"
  },
 
  
  
];
