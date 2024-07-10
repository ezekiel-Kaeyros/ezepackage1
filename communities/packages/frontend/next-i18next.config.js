// module.exports = {
//     i18n: {
//       defaultLocale: 'en',
//       locales: ['en', 'fr'],
//     },
//     react: { useSuspense: false }, // optional, but recommended to set to false for server-side rendering
//   };
  

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
};
