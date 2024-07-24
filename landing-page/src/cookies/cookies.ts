import cookies from 'js-cookie';
import { FIRST_TIME, TOKEN, USER_DATA } from './cookies.d';

export const setUserCookies = (data: any) => {
  try {
    cookies.set(USER_DATA, JSON.stringify(data), { domain: '.eze.ink' });
  } catch (error) {
    console.error('Error setting user cookies:', error);
  }
};

export const setToken = (token: string) => {
  try {
    cookies.set(TOKEN, JSON.stringify(token), { domain: '.eze.ink' });
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

export const getToken = () => {
  const token: string | undefined = cookies.get(TOKEN);
  // return token ? JSON.parse(token) : undefined;
  return token ? token : undefined;
};

export const getUserCookies = () => {
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const getUserCookiesAuth0 = () => {
  const data: any = cookies.get(USER_DATA);
  // console.log('JSON DATA: ', JSON.parse(authData), typeof JSON.parse(authData));
  return data ? data : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};

// Onboarding cookies

export const isFirstTime = (data: string) => {
  // Use the default domain (localhost)
  cookies.set(FIRST_TIME, 'true');
};

export const getIsFirstTime = () => {
  const data = cookies.get(FIRST_TIME);
  return data ? JSON.parse(data) : undefined;
};
