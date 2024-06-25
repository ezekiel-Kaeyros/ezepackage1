'use Client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SidebarMenu() {
  const navigation = [
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
        <div className='flex gap-x-10'>
            <div className='flex flex-col gap-y-4'>
                {navigation.map((nav) => (
                    <div className='' key={nav.id}>
                        <Link href={`${nav.url}`}><div className='text-xl p-4 bg-[lightgreen]'><h2>{nav.text}</h2></div></Link>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
}

export default SidebarMenu;
