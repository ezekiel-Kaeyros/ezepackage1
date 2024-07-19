// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import LocaleIcon from '../../../frontend/public/localeIcon.svg';
// import DownIcon from '../../../frontend/public/downIcon.svg';
// import styles from './styles.module.css';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [language, setLanguage] = useState(i18n.language);
//   const [toggle, setToggle] = useState<boolean>(false);
  
//   const router = useRouter();
//   const pathName=router.pathname
//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//     setLanguage(lng);
//     setToggle(false)
//     // router.replace(router.pathname, router.asPath, { locale: lng });
//   };
//   // const langs=[
//   //   {lang:'en', id:0},{lang:'fr', id:1}
//   // ]

//   const lngs = {
//     en: {nativeName: 'en'},
//     fr: {nativeName: 'fr'}
//   }

//   console.log(language, 'this is my currentLanguage')

//   return (
//     <div className={styles.bnt_container}>
//      <div onClick={() => {setToggle(!toggle)}} className={styles.btn}>{language.toUpperCase()}</div>

//     {toggle && 
//       <div className={styles.btn_dropdown}>
//         {Object.keys(lngs).filter((lng) => lng !== language).map((lng) => {
//           return (
//             <div key={lng} onClick={() => {changeLanguage(lng)}} className={styles.dropdown}>
//               {lngs[lng].nativeName.toUpperCase()}
//             </div>
//           )
//         })}
//       </div>
//     }
//     </div>
//   );
// };

// export default LanguageSwitcher;











import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import downIcon from '../../public/downIcon.svg';
import globalIcon from '../../public/localeIcon.svg';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [toggle, setToggle] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setToggle(false);
    // router.replace(router.pathname, router.asPath, { locale: lng });
  };

  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' },
  };

  const currentLanguage = i18n.language;

  return (
    <div className={styles.bnt_container}>
      <animateMotion>
        <div onClick={() => setToggle(!toggle)} className={styles.btn}>
          <Image src={globalIcon} alt='global' className={styles.global}/>
          <h3 className={styles.langbtn}>{currentLanguage.toUpperCase()}</h3>
          <Image src={downIcon} alt='dropdown'/>
        </div>
      </animateMotion>

      {toggle && (
        <div className={styles.btn_dropdown}>
          {Object.keys(lngs)
            .map((lng) => (
              <div
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`${styles.dropdown} ${lng === currentLanguage ? styles.active : ''}`}
              >
                {lngs[lng].nativeName}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
