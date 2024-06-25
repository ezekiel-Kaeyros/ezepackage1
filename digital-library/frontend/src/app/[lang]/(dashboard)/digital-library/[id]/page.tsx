'use client'
import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../../../public/images/overview.svg";
import arrowIcon from "../../../../../../public/images/arrow-left (2).svg";
import { Italiana } from "next/font/google";
import Image from "next/image";
import CardChannel from "@/app/common/components/cardChannel/CardChannel";
import Carousel from "@/app/common/components/caroussel/Carousel";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CarouselChannel from "@/app/common/components/caroussel/carousselChannel";
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
  const channelarray = [
    { name: "health", id: 1 },
    { name: "Mines", id: 2 },
    { name: "Ict", id: 3 },
    { name: "Agro Food Sciences", id: 4 },
    { name: "Energie", id: 5 },
    { name: "Social Xciences", id: 6 },
    { name: "Data Analytics", id: 7 },
  ];
const home = () => {
    const pathname = usePathname();
    const name = channelarray.find(
      (item) => item.id.toString() == pathname.split("/")[pathname.split("/").length - 1]
    )?.name;

      const newArrayChannel = channelarray.filter(
        (item) =>
          item.id.toString() !=
          pathname.split("/")[pathname.split("/").length - 1]
      );
    console.log('newArrayChannel',newArrayChannel);
    
  return (
    <div className="w-full h-full  p-2 ">
      <Link
        href={"/digital-library"}
        className="flex justify-start items-center gap-2 text-[#015E44] pl-2"
      >
        <Image src={arrowIcon} alt="" />
        <span>Back To Documents</span>
      </Link>

      <div className="w-full flex justify-between items-center mb-5 px-2 mt-5">
        <p className=" text-lg">
          {name}
          <span className="font-bold"> Documents</span>
        </p>
      </div>
      <div className="w-full  pb-14 overflow-hidden">
        <Carousel data={arraytest} />
      </div>

      <div className="w-full flex justify-between items-center mb-5 px-1">
        <p className="font-bold text-lg">Trending</p>
        <p className=" font-bold border-b-3 border-[green] text-[green]">
          See More
        </p>
      </div>
      <div className="w-full  pb-14">
        <Carousel data={arraytest1} />
      </div>

      <p className="font-bold text-xl">Other Categories</p>
      <div className="w-full  pb-14">
        <CarouselChannel data={newArrayChannel}/>
      </div>
    </div>
  );
};
export default home;
