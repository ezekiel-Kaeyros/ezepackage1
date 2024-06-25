
//   import {
//     UserGroupIcon,
//     HomeIcon,
//     DocumentDuplicateIcon,
//   } from '@heroicons/react/24/outline';
  import Link from 'next/link';
   
  export default function NavLinks() {
    const navigations = [
        {
          id: 1,
          title: 'Home',
          url: '/',
          text: 'send transfer',
        },
        {
          id: 2,
          title: 'Sales Representative',
          url: '/settings',
          text: 'history',
        },
        {
          id: 3,
          title: 'Point of Sales',
          url: '/page2',
          text: 'settings',
        },
      ];
    return (
      <>
        {navigations.map((link) => {
        //   const LinkIcon = link.icon;
          return (
            <Link
              key={link.id}
              href={link.url}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              {/* <LinkIcon className="w-6" /> */}
              <p className="hidden md:block">{link.text}</p>
            </Link>
          );
        })}
      </>
    );
  }