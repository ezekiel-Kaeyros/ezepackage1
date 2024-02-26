import HomeIcon from '../../../../public/icons/homeIcon.svg';
import RoutePlanningIcon from '../../../../public/icons/routePlanningIcon.svg';
import FieldOperationsIcon from '../../../../public/icons/fieldOperationsIcon.svg';
import SalesIcon from '../../../../public/icons/salesIcon.svg';
import InsightsIcon from '../../../../public/icons/insightsIcon.svg';
import FinanceIcon from '../../../../public/icons/financeIcon.svg';
import AdministratorIcon from '../../../../public/icons/administrationIcon.svg';
import SalesRepIcon from '../../../../public/icons/salesRepIcon.svg';
import PointOfSalesIcon from '../../../../public/icons/pointOfSale.svg';

export const navigation = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    title: 'Sales Representative',
    url: '/sales-representative',
    icon: SalesRepIcon,
  },

  {
    id: 3,
    title: 'Point of Sales',
    icon: PointOfSalesIcon,
    url: '/point-of-sales',
  },

  {
    id: 4,
    title: 'Route Planning',
    icon: RoutePlanningIcon,
    url: '/',
    submenus: [
      {
        subTitle: 'Route Preparation',
        url: '/route-preparation',
      },
      {
        subTitle: 'Route Optimization',
        url: '/route-optimization',
      },
      {
        subTitle: 'Dynamic Tour',
        url: '/dynamic-tour',
      },
    ],
  },
  ,
  {
    id: 5,
    title: 'Field Operations',
    icon: FieldOperationsIcon,
    submenus: [
      {
        subTitle: 'Realtime Tracking',
        url: '/realtime-tracking',
      },
      {
        subTitle: 'Time Tracking',
        url: '/time-tracking',
      },
      {
        subTitle: 'After Visit',
        url: '/after-visit',
      },
    ],
  },
  {
    id: 6,
    title: 'Sales',
    icon: SalesIcon,
    submenus: [
      {
        subTitle: 'Sales Provisioning',
        url: '/sales-provisioning',
      },
      {
        subTitle: 'Order Generation',
        url: '/order-generation',
      },
      {
        subTitle: 'Customer Registration',
        url: '/customer-registration',
      },
    ],
  },
  {
    id: 7,
    title: 'Insights',
    icon: InsightsIcon,
    submenus: [
      {
        subTitle: 'Intelligence',
        url: '/intelligence',
      },
      {
        subTitle: 'Insight Collection',
        url: '/insight-collection',
      },
      {
        subTitle: 'Potential Identification',
        url: '/potential-identification',
      },
      {
        subTitle: 'Product Visibility',
        url: '/product-visibility',
      },
    ],
  },
  {
    id: 8,
    title: 'Finance',
    icon: FinanceIcon,
    submenus: [
      {
        subTitle: 'Invoice Generation',
        url: '/invoice-generation',
      },
      {
        subTitle: 'Invoice Printing',
        url: '/invoice-printing',
      },
      {
        subTitle: 'Payment',
        url: '/payment',
      },
    ],
  },
  {
    id: 9,
    title: 'Administration',
    icon: AdministratorIcon,
    submenus: [
      {
        subTitle: 'Operation Dashboard',
        url: '/operation-dashboard',
      },
      {
        subTitle: 'Sales Dashboard',
        url: '/sales-dashboard',
      },
      {
        subTitle: 'Competitors Dashboard',
        url: '/competitors-dashboard',
      },
    ],
  },
  ,
];
