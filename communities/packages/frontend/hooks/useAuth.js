"use client";
import { config } from '@/utils';
import { useEffect, useState, useRef } from 'react';
import SSOService from './ezeSSO';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const ssoService = new SSOService(config.landingPageUrl + "/login", 'community');
    ssoService.login();
  }, []); // Empty dependency array ensures this runs only once on mount

  return isLoggedIn;
};

export default useAuth;



