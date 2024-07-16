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

export interface IConfig {
  ["staging" | "development" | "production"]: {
    apiUrl: string,
    landingPageUrl: string,
    communitiesUrl: string,
    livingLibraryUrl: string,
    kashAppAuthUrl: string,
    ssoLoginUrl: string,
    ssoLogoutUrl: string,
  }
}
