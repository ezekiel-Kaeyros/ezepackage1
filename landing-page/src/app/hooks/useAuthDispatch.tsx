import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import config from '@/utils/config';

const HOME_URL = config.communitiesUrl;

export const useDispatchAuth = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const fetch = async () => {
    try {
      const { data } = await axios.get('/auth-user');
      if (data) {
      }
    } catch (error) {
      console.log(`error ${error}`);
    } finally {
      console.log('finally');
    }
  };
};
