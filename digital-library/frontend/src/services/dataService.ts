import { getUserCookies } from '@/cookies/cookies';
import axios from 'axios';
import { config } from "@/utils"

const user = getUserCookies();

export default class DataService {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: config.ssoUrl,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
      headers: {
        'content-type': 'application/json',
        Authorization: `  ${user ? user.access_token : ''}`,
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
