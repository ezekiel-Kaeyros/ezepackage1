'use server'
import { setUserCookies } from "@/cookies/cookies";
import axios from "axios";
import config from "./config";

export const getUserInfo = async () => {
  try {
    // axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    const response = await axios.get(config.ssoUrl + '/auth', { withCredentials: true });
    return response.data
  } catch (error) {
    console.log(`error ${error}`);
  } finally {
    console.log('finally');
  }
};
