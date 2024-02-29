import { getToken, getUserCookies } from '@/cookies/cookies';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

export const useAuth = () => {
  const user: { fullName: string; role: string; email: string } | undefined =
    getUserCookies();
  const token: string | undefined = getToken();

  const dispatch = useDispatch<AppDispatch>();

  return {
    user,
    token,
    dispatch,
  };
};
