const config = {
  development: {
    frontendUrl: "http://localhost:3002",
    landingPageUrl: "http://localhost:3001",
    apiUrl: "http://localhost:4000"
  },
  production: {
    frontendUrl: "https://communities.eze.ink",
    landingPageUrl: "https://eze.ink",
    apiUrl: "https://backcommunities.eze.ink"
  },
  staging: {
    frontendUrl: "https://communities.eze.ink",
    landingPageUrl: "https://eze.ink",
    apiUrl: "https://backcommunities.eze.ink"
  }
}

export default config[process.env.NODE_ENV]
