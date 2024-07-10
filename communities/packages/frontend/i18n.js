import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "../frontend/public/locales/en/common.json";
import frTranslation from "../frontend/public/locales/fr/common.json";

i18n
    .use(HttpApi)
    .use(LanguageDetector) // detects browser's current language
    .use(initReactI18next) // initializes i18next with react-i18next
    .init({
        resources: {
            // en: { translation: enTranslation },
            // fr: { translation: frTranslation },
            en: { translation: require('../frontend/public/locales/en/common.json')},
            fr: { translation: require('../frontend/public/locales/fr/common.json')}
        }, // feel free to add any other you want!
        lng: 'en', // default language
        interpolation: {
            escapeValue: false, // This ensures raw HTML in translations (if needed)
        },
        fallbackLng: "en", // if language isn't detected, use this by default
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"], // saves preferences
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
          },
    });
export default i18n;



// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Configuration
// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   });

// export default i18n;
