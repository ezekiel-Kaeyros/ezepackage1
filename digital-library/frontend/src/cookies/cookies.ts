import cookies from 'js-cookie';
import {
  SKIP,
  USER_DATA,
  COUNTRY_DATA,
  CLIENT_DATA,
  COUNTRY_ID,
  FLAG_ID,
  REGISTERED_DATA,
  FLAG
} from './cookies.d';
import { IRegisterUser, IUser } from '@/services/authService.d';


export const setUserCookies = (data: IUser) => {
  cookies.set(USER_DATA, JSON.stringify(data));
};













export const getUserCookies = () => {
  const user = cookies.get(USER_DATA);

  return user ? JSON.parse(user) : undefined;
};



export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};
