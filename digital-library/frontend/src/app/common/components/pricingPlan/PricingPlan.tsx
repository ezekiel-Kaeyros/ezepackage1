'use client'
import Image from "next/image"
import activeIcon from "../../../../../public/images/Icon.svg";
import notActive from "../../../../../public/images/Icon (1).svg";
import { useState } from "react";
const Pricing: React.FC<{ title: string, price: string, description: string, details: { text: string, active:boolean}[]}> = (props) => {
  
  const [active,setActive]=useState(false)
    return (
      <div className="bg-transparent mt-8 cursor-pointer" onClick={()=>setActive((active)=>!active)} >
        <h1 className="lg:text-lg">{props.title}</h1>
        <span className="text-[#999999] md:text-sm text-xs ">{props.description}</span>

        <div className="my-5">
          <span className="text-xs text-[#999999]">only</span>
          <p>
            <span
              className={`lg:text-5xl text-2xl font-bold ${
                active
                  ? "text-[#015E44]"
                  : " text-[#1D242D]"
              }`}
            >
              {"$" + props.price}
            </span>
            <span className="text-[#666666]">/month</span>
          </p>
        </div>

        <p className="mb-8 lg:text-base text-sm">Available Features</p>
        <div className="flex flex-col gap-5">
          {props.details.map((item) => (
            <p className={`flex items-center gap-3 lg:text-sm text-xs`}>
              <Image src={item.active ? activeIcon : notActive} alt="" />
              <span
                className={` ${!item.active && "line-through text-[#999999]"}`}
                  >{item.text}</span>
            </p>
          ))}
        </div>

        <button
          className={`w-full text-center font-bold py-3 rounded-full mt-10 ${
            active ? "bg-[#015E44] text-white" : "bg-[#D9E8E4] text-[#1D242D]"
          }`}
        >
          Get Started
        </button>
      </div>
    );
}
export default Pricing