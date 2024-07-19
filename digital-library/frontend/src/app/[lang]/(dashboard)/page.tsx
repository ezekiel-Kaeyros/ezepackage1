'use client'
import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../public/images/overview.svg";
import { Italiana } from "next/font/google";
import Image from "next/image";
import CardChannel from "@/app/common/components/cardChannel/CardChannel";
import Carousel from "@/app/common/components/caroussel/Carousel";
import Link from "next/link";
import { useAddDocument } from "@/app/hooks/useAddDocument";
import { url } from "inspector";
import { URL } from "url";
import { idHandler } from "@/redux/features/addDocument-slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toggleFunc2 } from "@/redux/features/auth-slice";
import HomeLibrary from "@/app/common/components/LibraryItem/homeLibrary/homeLibrary";
import Filter from "@/app/common/components/LibraryItem/homeLibrary/filterDocument/Filter";


const Home = () => {
  const { arrayDoc, dispatch } = useAddDocument()

  const { push } = useRouter()
  const arraytest = [
    { num: 3, save: true },

    { num: 2, save: false, img: cover2 },

    { num: 2, save: false },
    { num: 3, save: false },
    { num: 2, save: true },
    { num: 2, save: false },
    { num: 2, save: false, img: cover2 },

    { num: 1, save: true },

    { num: 2, save: false },

    { num: 2, save: false, img: cover2 },

    { num: 7, save: true },

    { num: 2, save: false },
  ];

  const arraytest1 = [
    { num: 3, save: true },

    { num: 2, save: false, img: cover2 },

    { num: 2, save: false },
    { num: 3, save: false },


    { num: 2, save: false, img: cover2 },

    { num: 7, save: true },

    { num: 2, save: false },
  ];
  const channelarray = ['health', 'Mines', 'Ict', 'Agro Food Sciences', 'Energie', 'Social Xciences', 'Data Analytics']
  useEffect(() => {
    dispatch(toggleFunc2(false));
  }, []);
  return (
    <div
      className="w-full h-full p-4"
      onClick={() => {
        dispatch(toggleFunc2(false));
      }}
    >

      <div className="flex items-center justify-between mb-10">
        <h1 className="sm:text-3xl text-xl">My Documents</h1>
        <div className="">
          <Filter />
        </div>
      </div>

      <div className="w-full gap-5 mb-14">
        <HomeLibrary />
      </div>
    </div>
  );
};
export default Home;
