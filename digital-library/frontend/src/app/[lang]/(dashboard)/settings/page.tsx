// 'use client';
// import { useAuth } from '@/app/hooks/useAuth';

import { Locale } from '@/i18n.config';
import React from 'react';
import { getDictionary } from '../../../../../lib/dictionary';
import { UploadFile } from '@/app/common/components/settings/fileUpload';
import { GetServerSideProps } from 'next';


const Settings: GetServerSideProps | any = async ({ params: { lang } }: { params: { lang: string | any } }) => {
  const { settings } = await getDictionary(lang);

  return (
    <div className="w-full">
      <UploadFile />
    </div>
  );
};

export default Settings;
