import { IConfig } from "./types"

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
};

type appEnviron = "staging" | "development" | "production"
const environ = process.env.NEXT_PUBLIC_APP_ENV as appEnviron || "development"
const config = Config[environ]
export default config
