const config = {
  development: {
    frontendUrl: "http://localhost:3002",
    landingPageUrl: "http://localhost:3001",
    apiUrl: "http://localhost:4000"
  },
  production: {
    frontendUrl: "http://communities.eze.ink",
    landingPageUrl: "http://eze.ink",
    apiUrl: "http://backcommunities.eze.ink"
  },
  staging: {
    frontendUrl: "https://communities.eze.ink",
    landingPageUrl: "https://eze.ink",
    apiUrl: "https://backcommunities.eze.ink"
  }
}

const environ = process.env.NEXT_PUBLIC_APP_ENV || "development"
export default config[environ]
