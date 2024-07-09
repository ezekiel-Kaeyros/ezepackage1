'use client'
import Image from "next/image"
import activeIcon from "../../../../../public/images/Icon.svg";
import notActive from "../../../../../public/images/Icon (1).svg";
import { useState } from "react";
const Pricing: React.FC<{
  // id: string;
  title: string;
  price: string;
  description?: string | any;
  // periode: string;
  details: { text: string; active: boolean }[];
  state: string;
  remove: any;
  take: any;
  click: string;
  chickHandler: any;
  setCurrentIndex: (index: number) => void;
  currentIndex:number,
  itemId:number,
}> = (props) => {


  const ActiveIndex = props.currentIndex === props.itemId;
  const handleClick = () => {
    if (ActiveIndex) {
      props.setCurrentIndex(null as any);
    } else {
      props.setCurrentIndex(props.itemId);
    }
  };
  const [active, setActive] = useState(false);
  return (
    <div
      className={`bg-transparent mt-8 cursor-pointer w-[350px] p-1 flex flex-col justify-between mb-20 ${
        props.click == props.title && "rounded-xl"
      }`}
      // onMouseEnter={() => props.take()}
      // onMouseLeave={() => props.remove()}
      onClick={() => props.chickHandler(props.title)}
    >
      <h1 className="lg:text-2xl">{props.title}</h1>
      <span className="text-[#999999] md:text-sm text-xs ">
        {props.description}
      </span>

      <div className="my-5">
        <p>
          <span
            className={`lg:text-5xl text-2xl font-bold ${
              props.state == props.title || props.click == props.title
                ? "text-[#015E44]"
                : " text-[#1D242D]"
            }`}
          >
            {props.price}
            <small className="text-xl">/XAF</small>
          </span>
          {/* <span className="text-[#666666]">/{props.periode}</span> */}
        </p>
      </div>

      <p className="mb-8 lg:text-base text-sm font-bold">Available Features</p>
      <div className="flex flex-col gap-5 h-64 mb-5">
        {props.details.map((item) => (
          <p className={`flex items-center gap-3 lg:text-sm text-xs`}>
            <Image src={item.active ? activeIcon : notActive} alt="" />

            <span
              className={` ${!item.active && "line-through text-[#999999]"}`}
            >
              {item.text}
            </span>
          </p>
        ))}
      </div>

      <button
        className={`w-full text-center font-bold py-3 rounded-full mt-10 ${
          props.state == props.title || props.click == props.title
            ? "bg-[#015E44] text-white"
            : "bg-[#D9E8E4] text-[#1D242D]"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};
export default Pricing