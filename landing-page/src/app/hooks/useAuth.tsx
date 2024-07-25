import { useEffect, useState } from 'react';
import axios from "axios";
import { config } from "@/utils";

export function useAuth<T>(): { user: T | null } {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(config.ssoUrl + '/auth', { withCredentials: true });
        setUser(response.data)
      } catch (error) {
        console.log(`error ${error}`);
      } finally {
        console.log('finally');
      }
    }
    getUserInfo()
  }, [])

  return { user: user };
};
