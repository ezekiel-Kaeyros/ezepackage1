'use client'
import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../public/images/overview.svg";
import addIcon from "../../../../public/images/add-square.svg";
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


const Home = () => {
  const { arrayDoc, dispatch } = useAddDocument()

  const{push}= useRouter()
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
    const channelarray=['health','Mines','Ict','Agro Food Sciences','Energie','Social Xciences', 'Data Analytics']
  useEffect(() => {
    dispatch(toggleFunc2(false));
  }, []);
  return (
    <div
      className="w-full h-full p-4  "
      onClick={() => {
        dispatch(toggleFunc2(false));
      }}
    >
      <h1 className="mb-4 sm:text-3xl text-xl">My Documents</h1>

      <div className="flex flex-wrap w-full gap-5 mb-14">
        <Link href={"/en/add-document"}>
          <div className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-36 h-36 bg-[#B0D0C7] pt-3 px-2 pb-4 rounded-xl  flex flex-col">
            <p className="truncate sm:text-sm text-xs font-[500]">
              Add New Document
            </p>

            <div className="w-full flex-grow flex justify-center items-center  bg-[#D9E8E4] mt-2">
              <Image src={addIcon} alt="" />
            </div>
          </div>
        </Link>

        {/* {arrayDoc.length > 0 &&
          arrayDoc.map((item, index) => (
            <div
              key={index}
              className="lg:w-56 lg:h-56 md:w-48 md:h-48 w-36 h-36 bg-[#B0D0C7] pt-3 px-2 pb-1 rounded-xl  flex flex-col cursor-pointer"
              onClick={() => {
                item.id && dispatch(idHandler(item.id));
                push("/en/view-document");
              }}
            >
              <p className="truncate  sm:text-sm text-xs">{item.firstName}</p>

              <div className="w-full flex-grow mb-1 border  flex justify-center items-center  overflow-hidden mt-2">
                <Image
                  src={item.url!}
                  alt=""
                  width={30}
                  height={30}
                  className="w-full h-full "
                />
              </div>
              <p className="truncate text-xs text-[#47586E]">
                {item.categorie}
              </p>
            </div>
          ))} */}
      </div>
    </div>
  );
};
export default Home;
