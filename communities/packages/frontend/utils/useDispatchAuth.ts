import { useEffect } from 'react';
import cookies from 'js-cookie';
import { Cookies } from './cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/auth';
import { useRouter } from 'next/router';

const HOME_URL = 'https://eze.wiki';

export const useDispatchAuth = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const token = cookies.get(Cookies.Token);
  const user = cookies.get(Cookies.User_data);
  useEffect(() => {
    if (user && token) {
      const token = JSON?.parse(cookies.get(Cookies.Token, { domain: '.eze.wiki' }));
      const user = JSON?.parse(cookies.get(Cookies.User_data, { domain: '.eze.wiki' }));

      if (token && user) {
        axios.defaults.headers.common = { Authorization: `bearer ${token}` };
        dispatch(
          setAuthUser({
            ...user,
            isOnline: true,
          })
        );
      } else {
        push(HOME_URL);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user]);
};
