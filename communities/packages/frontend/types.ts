export interface IConfigs {
  apiUrl: string;
  landingPageUrl: string;
  communitiesUrl: string;
  livingLibraryUrl: string;
  kashAppAuthUrl: string;
  ssoLoginUrl: string;
  ssoUrl: string;
  ssoLogoutUrl: string;
}

export interface IConfigSet {
  production: IConfigs;
  development: IConfigs;
  staging: IConfigs;
}
