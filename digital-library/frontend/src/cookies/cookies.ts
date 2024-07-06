import cookies from 'js-cookie';
import {
  SKIP,
  USER_DATA,
  COUNTRY_DATA,
  CLIENT_DATA,
  COUNTRY_ID,
  FLAG_ID,
  REGISTERED_DATA,
  FLAG,
  FORM_STEP, 
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP
} from './cookies.d';
import { IRegisterUser, IUser, StepProps } from '@/services/authService.d';


export const setUserCookies = (data: IUser) => {
  cookies.set(USER_DATA, JSON.stringify(data));
};

export const setStepCookie = (number:number) => {
  return cookies.set(FORM_STEP, JSON.stringify(number))
}

export const getStepCookie = (number:number) => {
  return cookies.get(FORM_STEP)
}

export const setFormCookies = (data: any, formData: string) => {
  cookies.set(formData, JSON.stringify(data), { expires: 7 });
};

export const getFormCookies = (formData:any) => {
  const getFormData = cookies.get(formData)
  return getFormData ? JSON.parse(getFormData) : null
}













export const getUserCookies = () => {
  const user = cookies.get(USER_DATA);

  return user ? JSON.parse(user) : undefined;
};



export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};
