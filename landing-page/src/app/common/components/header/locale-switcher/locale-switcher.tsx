'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import { useState } from 'react';

import AnimateClick from '../../animate-click/AnimateClick';
import LocaleIcon from '../../../../../../public/icons/localeIcon.svg';
import DownIcon from '../../../../../../public/icons/downIcon.svg';
import Image from 'next/image';
import { useClickOutside } from '@/app/hooks/useClickOutside';

export default function LocaleSwitcher() {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathName = usePathname();
  let arrayOfLinks = pathName?.split('/');
  let selectedLang = arrayOfLinks && arrayOfLinks[1];
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <div ref={domNode} className="w-full relative">
      <AnimateClick>
        <div
          className="flex  items-center space-x-2"
          onClick={() => setToggle((prev) => !prev)}
        >
          <Image src={LocaleIcon} alt="Locale icon" />
          <h1 className="font-bold">{selectedLang?.toUpperCase()}</h1>
          <Image src={DownIcon} alt="Arrow down icon" />
        </div>
      </AnimateClick>
      {toggle && (
        <ul className="flex absolute top-8 space-y-2 bg-white shadow-xl flex-col  p-4 rounded-lg  justify-between   w-full">
          {i18n.locales.map((locale) => (
            <AnimateClick key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className="text-slate-900"
              >
                {locale === 'en' ? (
                  <div
                    onClick={() => setToggle(false)}
                    className="flex items-center hover:text-primaryColor w-full"
                  >
                    <div
                      className={`${
                        pathName?.split('/')[1] === 'en'
                          ? ' font-bold flex'
                          : 'flex'
                      }`}
                    >
                      EN
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setToggle(false)}
                    className="flex w-full hover:text-primaryColor"
                  >
                    <div
                      className={`${
                        pathName?.split('/')[1] === 'fr'
                          ? ' font-bold '
                          : 'flex  '
                      }`}
                    >
                      FR
                    </div>
                  </div>
                )}
              </Link>
            </AnimateClick>
          ))}
        </ul>
      )}
    </div>
  );
}


