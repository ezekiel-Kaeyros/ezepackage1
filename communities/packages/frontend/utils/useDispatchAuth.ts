import { useEffect } from 'react';
import cookies from 'js-cookie';
import { Cookies } from './cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/auth';


export const useDispatchAuth = () => {
  const dispatch = useDispatch();
  const token = cookies.get(Cookies.User_data);
  const fetch = async () => {
    const token = cookies.get(Cookies.Token);

    try {
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
      const { data } = await axios.get('/auth-user');

      if (data) {
        dispatch(
          setAuthUser({
            ...data,
            isOnline: true,
          })
        );
      }
    } catch (error) {
      console.log(`error ${error}`);
    } finally {
      console.log('finally');
    }
  };

  useEffect(() => {
    if (token) {
      fetch();
    } else {
      // push(HOME_URL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};
