'use client';
import React, { use, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


type NavBarProps = {
  lang: string;
  navigation: {
    logout: string;
    cancel: string;
    msg: string;
    title: string;
  };
};

const NavBar: React.FC<NavBarProps> = ({ lang, navigation }) => {



  // const logout=()=>{
  //     removeUserCookies();
  //     push('/'+lang+'/login');
  // }

  return (
    // <>
    // <LogoutModal
    // del={show}
    // delHandler={deleteHandler}
    // lang={lang}
    // cancel={navigation.cancel}
    // title={navigation.title}
    // msg={navigation.msg}
    // logout={navigation.logout}
    // />
      <div
     
        className="w-full bg-white border"
      >
    

       
      </div>
   
  );
};

export default NavBar;
