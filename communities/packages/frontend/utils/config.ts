import { IConfigs, IConfigSet } from "../types";

const Config: IConfigSet = {
  production: {
    apiUrl: "http://backcommunities.eze.ink",
    landingPageUrl: "http://eze.ink",
    communitiesUrl: "http://communities.eze.ink",
    livingLibraryUrl: "http://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "http://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "http://sso.eze.ink/auth/login",
    ssoUrl: "http://sso.eze.ink",
    ssoLogoutUrl: "http://sso.eze.ink/auth/logout",
  },
  development: {
    apiUrl: "http://localhost:4000",
    landingPageUrl: "http://localhost:3001",
    communitiesUrl: "http://localhost:3002",
    livingLibraryUrl: "http://localhost:3003/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "http://localhost:3000/auth/login",
    ssoUrl: "http://localhost:3000",
    ssoLogoutUrl: "http://localhost:3000/auth/logout",
  },
  staging: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "http://sso.eze.ink/auth/login",
    ssoUrl: "http://sso.eze.ink",
    ssoLogoutUrl: "http://sso.eze.ink/auth/logout",
  },
};

const environ = (process.env.NEXT_PUBLIC_APP_ENV as keyof IConfigSet) || "development";
const config: IConfigs = Config[environ] || Config.development;

export default config;
