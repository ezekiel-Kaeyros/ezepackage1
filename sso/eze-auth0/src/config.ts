const urls = {
  production: {
    apiUrl: "http://backcommunities.eze.ink",
    landingPageUrl: "http://eze.ink",
    communitiesUrl: "http://communities.eze.ink",
    livingLibraryUrl: "http://library.eze.ink",
    ssoUrl: "http://sso.eze.ink",
  },
  development: {
    apiUrl: "http://localhost:4000",
    landingPageUrl: "http://localhost:3001",
    communitiesUrl: "http://localhost:3002",
    livingLibraryUrl: "http://localhost:3003",
    ssoUrl: "http://localhost:3000",
  },
  staging: {
    apiUrl: "https://backcommunities.eze.ink",
    landingPageUrl: "https://eze.ink",
    communitiesUrl: "https://communities.eze.ink",
    livingLibraryUrl: "https://library.eze.ink",
    ssoUrl: "https://sso.eze.ink",
  },
}

const staticVariables = {
  secret: process.env.SECRET || "",
  auth0ID: process.env.AUTH0_ID || "",
  auth0ClientId: process.env.AUTH0_CLIENT_ID || "",
  mongodbUri: process.env.MONGODB_URI || "",
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
}

type appEnviron = "staging" | "development" | "production"
const environ = process.env.NEXT_PUBLIC_APP_ENV as appEnviron || "development"
// pick config based on environment variable
const activeUrls = urls[environ]

// extend config with shared environment variable
const C: typeof activeUrls & typeof staticVariables = Object.assign(activeUrls, staticVariables)
export default C
