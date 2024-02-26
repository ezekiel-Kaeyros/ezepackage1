const API_PRODUCTION_URL = 'http://ec2-3-79-59-216.eu-central-1.compute.amazonaws.com:4000';
const API_DEV_URL = 'http://localhost:4000';

export const Config = {
  API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-MD706N8TZV',
};
