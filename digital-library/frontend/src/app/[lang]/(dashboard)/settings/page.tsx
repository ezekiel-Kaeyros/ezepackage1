// 'use client';
// import { useAuth } from '@/app/hooks/useAuth';

import { Locale } from '@/i18n.config';
import React, { useEffect } from 'react';
import { getDictionary } from '../../../../../lib/dictionary';
import { GetServerSideProps } from 'next';
import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
import { toggleFunc2 } from '@/redux/features/auth-slice';


const Settings: GetServerSideProps | any = async ({ params: { lang } }: { params: { lang: string | any } }) => {
  const { settings } = await getDictionary(lang);
  // const { dispatch } = useToggleSidebar();

//  useEffect(() => {
//    dispatch(toggleFunc2(false));
//  }, []);

  return (
    <div
      className="w-full"
      // onClick={() => {
      //   dispatch(toggleFunc2(false));
      // }}
    ></div>
  );
};

export default Settings;
