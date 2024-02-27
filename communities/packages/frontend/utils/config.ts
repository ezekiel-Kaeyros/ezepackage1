const API_PRODUCTION_URL = 'https://eze.wiki'  || 'http://ec2-3-69-225-24.eu-central-1.compute.amazonaws.com:3002';
const API_DEV_URL = 'http://localhost:4000';

export const Config = {
  API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-MD706N8TZV',
};
