// import HomeIcon from '../../../../public/icons/homeIcon.svg';
// import SalesRepIcon from '../../../../public/icons/salesRepIcon.svg';
// import PointOfSalesIcon from '../../../../public/icons/pointOfSale.svg';
import Send from '../../../../public/icons/send.svg'
import History from '../../../../public/icons/arrange-square.svg'
import Setting from '../../../../public/icons/setting-3.svg'


export const i18L = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'es']
} as const;

export type Locale = (typeof i18L)['locales'][number];
