//const API_PRODUCTION_URL = 'https://backcommunities.eze.wiki';
const API_PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL
const API_DEV_URL = process.env.NEXT_PUBLIC_BACKENDCOMMUNITIES_URL;

export const Config = {
  API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-MD706N8TZV',
};
