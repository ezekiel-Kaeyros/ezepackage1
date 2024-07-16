'use server'
import { setUserCookies } from "@/cookies/cookies";
import axios from "axios";
import config from "./config";

export const getUserInfo = async (token: string) => {
  try {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    const { data } = await axios.get(config.apiUrl + '/auth-user');
    if (data) {
      setUserCookies({
        ...data,
        isOnline: true,
      });
      return data
    }
  } catch (error) {
    console.log(`error ${error}`);
  } finally {
    console.log('finally');
  }
};
