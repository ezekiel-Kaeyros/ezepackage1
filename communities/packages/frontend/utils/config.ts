import { IConfigs } from "../types";

const Config = {
  production: {
    apiUrl: "http://backcommunities.eze.ink",
    landingPageUrl: "http://eze.ink",
    communitiesUrl: "http://communities.eze.ink",
    livingLibraryUrl: "http://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "http://kashapp.biz/auth/mo_saml/index.php",
    ssoLoginUrl: "http://sso.eze.ink/auth/login",
    ssoLogoutUrl: "http://sso.eze.ink/auth/logout",
    ssoUrl: "http://sso.eze.ink",
  },
  development: {
    apiUrl: "http://localhost:4000",
    landingPageUrl: "http://localhost:3001",
    communitiesUrl: "http://localhost:3002",
    livingLibraryUrl: "http://localhost:3003/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLogoutUrl: "http://localhost:3000/auth/logout",
    ssoUrl: "http://localhost:3000/auth/login",
  },
  staging: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoLogoutUrl: "https://sso.eze.ink/auth/logout",
    ssoLoginUrl: "https://sso.eze.ink/auth/login",
    ssoUrl: "https://sso.eze.ink",
  },
};

console.log("communities APP_ENV: ", process.env.NEXT_PUBLIC_APP_ENV)
const environ = process.env.NEXT_PUBLIC_APP_ENV || "development"
const config: IConfigs = Config[environ];
export default config
