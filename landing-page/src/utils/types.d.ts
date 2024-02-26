export interface IPointOfSalesType {
  id: number;
  name: string;
  shopLocation: string;
  shopOwner: string;
  image?: string;
  contact: string | number;
  firstStat: string | number;
  secondStat: string | number;
  position: {
    lat: number;
    lng: number;
  };
}
