import { IConfig } from "./types"

const Config = {
  production: {
    apiUrl: "http://backcommunities.eze.ink",
    landingPageUrl: "http://eze.ink",
    communitiesUrl: "http://communities.eze.ink",
    livingLibraryUrl: "http://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "http://kashapp.biz/auth/mo_saml/index.php",
    ssoUrl: "http://sso.eze.ink",
  },
  development: {
    apiUrl: "http://localhost:4000",
    landingPageUrl: "http://localhost:3001",
    communitiesUrl: "http://localhost:3002",
    livingLibraryUrl: "http://localhost:3003/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoUrl: "http://localhost:3000",
  },
  staging: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink/en/digital-library",
    kashAppAuthUrl: "https://kashapp.biz/auth/mo_saml/index.php",
    ssoUrl: "https://sso.eze.ink",
  },
};

type appEnviron = "staging" | "development" | "production"
const environ = process.env.NEXT_PUBLIC_APP_ENV as appEnviron || "development"
const config = Config[environ]
export default config
