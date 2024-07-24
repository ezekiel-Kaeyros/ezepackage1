import { useEffect } from 'react';
import cookies from 'js-cookie';
import { Cookies } from './cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../store/auth';


export const useDispatchAuth = () => {
  const dispatch = useDispatch();
  const fetch = async () => {
    try {
      const response = await axios.get('/auth-user');

      if (response.data) {
        dispatch(
          setAuthUser({
            ...response.data,
            isOnline: true,
          })
        );
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      console.log('finally');
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
