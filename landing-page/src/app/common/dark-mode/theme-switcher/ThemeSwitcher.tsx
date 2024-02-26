'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Image from 'next/image';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Light' : 'dark'}
    </div>
  );
};
