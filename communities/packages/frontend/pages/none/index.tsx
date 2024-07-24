"use client"
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const None = () => {
  useEffect(() => {
    // Get the cookie value
    const accessToken = Cookies.get('access-token');
    
  }, []);

  return (
    <div>None...</div>
  );
};

export default None;