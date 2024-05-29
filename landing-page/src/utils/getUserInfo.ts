'use server'
import { setUserCookies } from "@/cookies/cookies";
import { API_URL } from "@/services/dataService";
import axios from "axios";

export const getUserInfo = async (token:string) => {
  // const token = JSON?.parse(cookies.get(Cookies.Token, { domain: '.eze.wiki' }));
//   const token = JSON?.parse(cookies.get(Cookies.Token));
  try {
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    const { data } = await axios.get(API_URL+'/auth-user');
      if (data) {
        setUserCookies({
          ...data,
          isOnline: true,
        });
          console.log('data123456789',data);
          return data
        // dispatch(
          
        // setAuthUser({
        //   ...data,
        //   isOnline: true,
        // })
    //   );
    }
  } catch (error) {
    console.log(`error ${error}`);
  } finally {
    console.log('finally');
  }
};
