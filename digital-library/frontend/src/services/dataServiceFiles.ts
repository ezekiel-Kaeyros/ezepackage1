import { getUserCookies } from '@/cookies/cookies';
import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'https://airtimeapp.onrender.com';
const API_URL = 'https://air-o.net';

// const API_URL = 'http://localhost:3001';


const user = getUserCookies();

export default class DataService {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 300000,
      timeoutErrorMessage: 'Time out!',
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${user ? user.access_token : ''}`,
      },
    });
  }

  post = (url: string, data: any) => {
    return this.client.post(url, data);
  };

  get = (url: string) => {
    return this.client.get(url);
  };

  put = (url: string, data: any) => {
    return this.client.put(url, data);
  };

  delete = (url: string) => {
    return this.client.delete(url);
  };

  patch = (url: string, data: any) => {
    return this.client.patch(url, data);
  };
}
