import { IConfigs } from "../types";
//const API_PRODUCTION_URL = 'https://backcommunities.eze.wiki';
// const API_PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL
// const API_DEV_URL = process.env.NEXT_PUBLIC_BACKENDCOMMUNITIES_URL;

const Config = {
  production: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink/en",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "https://sso.eze.ink/auth/login",
    ssoLogoutUrl: "https://sso.eze.ink/auth/logout",
  },
  development: {
    apiUrl: "http://localhost:4000",
    landingPageUrl: "http://localhost:3001",
    communitiesUrl: "http://localhost:3002",
    livingLibraryUrl: "http://localhost:3003/en",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "http://localhost:3000/auth/login",
    ssoLogoutUrl: "http://localhost:3000/auth/logout",
  },
  staging: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink/en",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "https://sso.eze.ink/auth/login",
    ssoLogoutUrl: "https://sso.eze.ink/auth/logout",
  },
  // API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-MD706N8TZV',
};

const config: IConfigs = Config[process.env.NEXT_PUBLIC_APP_ENV];
export default config
