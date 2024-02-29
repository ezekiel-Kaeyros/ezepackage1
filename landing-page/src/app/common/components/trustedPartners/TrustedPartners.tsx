import Image from 'next/image'
import React from 'react'
import Logo3 from '../../../../../public/icons/biologist.svg'
import Logo4 from '../../../../../public/icons/camlogo.svg'
import Logo5 from '../../../../../public/icons/ecopark.svg'
import Logo1 from '../../../../../public/icons/ifyar.svg';
import Logo2 from '../../../../../public/icons/logo sch.svg';
import Marquee from "react-fast-marquee";
export type HomeProps = {
    home: any;
    lang: any;
  };

const TrustedPartners: React.FC<HomeProps> = ({ home, lang}) => {
  return (
    <section className='mt-20 max-sm:mt-20 w-full'>
        <h1 className='text-center mb-10 text-4xl font-bold'>{home.home.section2.sec5.title1}</h1>
        <div className="grid gap-y-4 sm:gap-y-10">
          <Marquee 
            pauseOnHover={true}
            autoFill={true} 
            style={{display:"flex", gap:"0 10px"}}>
              <span className='flex gap-x-0 sm:gap-x-10'>
                <Image src={Logo1} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo2} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo3} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo4} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo5} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo1} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo2} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo3} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo4} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo5} alt="logo" className=" w-[100px] sm:w-[150px] " />
              </span>
          </Marquee>
          <Marquee 
            pauseOnHover={true}
            autoFill={true} 
            direction="right"
            style={{display:"flex", gap:"0 10px"}}>
              <span className='flex gap-x-0 sm:gap-x-10'>
                <Image src={Logo5} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo4} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo3} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo2} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo1} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo5} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo4} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo3} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo2} alt="logo" className=" w-[100px] sm:w-[150px] " />
                <Image src={Logo1} alt="logo" className=" w-[100px] sm:w-[150px] " />
              </span>
          </Marquee>
        </div>
      </section>
  )
}

export default TrustedPartners