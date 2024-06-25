'use client';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

// type SidebarIntermediaireProps = {
//   sidebar:any;
// }

import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
const SidebarIntermediaire: React.FC<{ lang: string; sidebar: any }> = ({
  lang,
  sidebar,
}) => {
  const { isSidebarToggled } = useToggleSidebar();
  const [vue, setView]=useState<boolean>()
useEffect(()=>{
  
    setView(isSidebarToggled)
  
},[isSidebarToggled])
  return (
  
      <Sidebar lang={lang} sidebar={sidebar} />
  
  );
};

export default SidebarIntermediaire;
