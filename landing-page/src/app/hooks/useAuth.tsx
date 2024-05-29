import { getToken, getUserCookies } from '@/cookies/cookies';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  const user:
    any
    | undefined = getUserCookies();
  // const token: string | undefined = getToken();
  const token: string | undefined = useSelector(
    (state: RootState) => state.AuthReducer.token
  );

  const dispatch = useDispatch<AppDispatch>();

  return {
    user,
    token,
    dispatch,
  };
};
