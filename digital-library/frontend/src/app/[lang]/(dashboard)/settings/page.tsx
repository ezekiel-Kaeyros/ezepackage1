// 'use client';

// import { useAuth } from '@/app/hooks/useAuth';

import { Locale } from '@/i18n.config';
import React from 'react';
import { getDictionary } from '../../../../../lib/dictionary';

const Settings = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  // const { user } = useAuth();
  const { settings } = await getDictionary(lang);



  return (
    <div className="w-full" >
     
    </div>
  );
};

export default Settings;
