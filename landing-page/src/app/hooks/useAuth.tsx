import {
  getToken,
  getUserCookies,
  getUserCookiesAuth0,
} from '@/cookies/cookies';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

export const useAuth = () => {
  const user:
    | { fullName: string; role: string | null; email: string }
    | undefined = getUserCookies();

  const userAuth0: { fullName: string; username: string; email: string } | any =
    getUserCookiesAuth0();
  const token: string | undefined = getToken();

  const dispatch = useDispatch<AppDispatch>();

  return {
    userAuth0,
    user,
    token,
    dispatch,
  };
};
