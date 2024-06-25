import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocaleIcon from '../../../frontend/public/localeIcon.svg';
import DownIcon from '../../../frontend/public/downIcon.svg';
import styles from './styles.module.css';
import useNavigation from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en')
  
  const router = useRouter();
  const pathName=router.pathname

  console.log(pathName, 'pathName')
 const [toggle, setToggle] = useState<boolean>(false);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  
  };
const langs=[{lang:'en', id:0},{lang:'fr', id:1}]
  return (
    <div className={styles.bnt_container}>
     <div onClick={() => {setToggle(!toggle)}} className={styles.btn}>{language.toUpperCase()}</div>

    {toggle && 
      <div className={styles.btn_dropdown}>
        {langs.filter(({ lang }) => lang !== language).map(({lang, id}) => {
          return (
            <div onClick={() => {setLanguage(lang), changeLanguage(lang), setToggle(false)}} className={styles.dropdown}>
              {lang.toUpperCase()}
            </div>
          )
        })}
      </div>
    }
    </div>
  );
};

export default LanguageSwitcher;
