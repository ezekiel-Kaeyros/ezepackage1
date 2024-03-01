import cookies from 'js-cookie';
import { FIRST_TIME, TOKEN, USER_DATA } from './cookies.d';

export const setUserCookies = (data: any) => {
  cookies.set(USER_DATA, JSON.stringify(data));
};

export const setToken = (token: string) => {
  cookies.set('token', JSON.stringify(token));
};

export const getToken = () => {
  const token: string | undefined = cookies.get(TOKEN);
  return token ? JSON.parse(JSON.stringify(token)) : undefined;
};

export const getUserCookies = () => {
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(JSON.stringify(data)) : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};

// Onboarding cookies

export const isFirstTime = (data: string) => {
  cookies.set(FIRST_TIME, 'true');
};

export const getIsFirstTime = () => {
  const data = cookies.get(FIRST_TIME);
  return data ? JSON?.parse(JSON.stringify(data)) : undefined;
};
