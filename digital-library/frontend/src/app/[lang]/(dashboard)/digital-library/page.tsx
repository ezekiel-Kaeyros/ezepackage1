"use client"
import CardDocument from "@/app/common/components/cardDocument/CardDocument";
import cover2 from "../../../../../public/images/overview.svg";
import searchIcon from "../../../../../public/images/search-normal (2).svg";
import elips from "../../../../../public/images/Ellipse 2.svg";
import elips2 from "../../../../../public/images/Ellipse 2 (1).svg";
import group from "../../../../../public/images/Group 5.svg";
import { Italiana } from "next/font/google";
import Image from "next/image";
import CardChannel from "@/app/common/components/cardChannel/CardChannel";
import Carousel from "@/app/common/components/caroussel/Carousel";
import NewCardDocument from "@/app/common/components/newCardDocument/NewCardDocument";
import Pricing from "@/app/common/components/pricingPlan/PricingPlan";
import firstImgBloc2 from "../../../../../public/images/Frame 469 (1).svg";
import secondImgBloc2 from "../../../../../public/images/Frame 535.svg";
import firstImgBloc3 from "../../../../../public/images/search-normal (4).svg";
import secondImgBloc3 from "../../../../../public/images/search-normal (3).svg";
import Footer from "@/app/common/components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import { useToggleSidebar } from "@/app/hooks/useToggleSidebar";
import { toggleFunc2 } from "@/redux/features/auth-slice";
import BookSearch from "@/app/common/components/LibraryItem/searchBook/BookSearch";import { useRouter } from "next/navigation";




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  const bookSearchRef = useRef<HTMLDivElement>(null);
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
    { name: "Health", id: 1 },
    { name: "Mines", id: 2 },
    { name: "Ict", id: 3 },
    { name: "Agro Food Sciences", id: 4 },
    { name: "Energie", id: 5 },
    { name: "Social Xciences", id: 6 },
    { name: "Data Analytics", id: 7 },
  ];

  const priceArray = [
    {
      id: 1,
      text: "Free Plan",
      price: 0,
      // description: "Eze Basic",
      detail: [
        { text: "01 free training payant / year", active: true },
        { text: "Communities", active: true },
        // { text: "3rd Party Integration", active: false },
        // { text: "Dedicated Assistant", active: false },
      ],
    },
    {
      id: 2,
      text: "Eze Plus",
      price: '10,000',
      // description: "Eze Plus",
      detail: [
        { text: "Eze Basic", active: true },
        { text: "Online Courses (10% discount)", active: true },
        { text: "Digital Library Accesible", active: true },
        // { text: "Dedicated Assistant", active: false },
      ],
    },
    {
      id: 3,
      text: "Eze Premuim",
      price: '20,000',
      // description: "Eze Premuim",
      detail: [
        { text: "Eze Basic", active: true },
        { text: "Online Courses (20% discount)", active: true },
        { text: "Ask The Prof", active: true },
        { text: "All Digital Library Contents", active: true },
        { text: " 10% Discount on SCH & Partners events (IFYAR, OWSD, Kaeyros Analytics...)", active: true },
      ],
    },
    // {
    //   text: "Enterprise Plan",
    //   price: 99,
    //   description: "Great Fit For Big Organizations",
    //   detail: [
    //     { text: "2 Factor Authentication", active: true },
    //     { text: "Access to Community", active: true },
    //     { text: "3rd Party Integration", active: true },
    //     { text: "Dedicated Assistant", active: true },
    //   ],
    // },
  ];
  const [choice,setChoice]=useState('')
  const [choice1, setChoice1] = useState("");
  const { dispatch }=useToggleSidebar()
  const clickHandler = (text: string) => {
    if (text!=choice1) {
      setChoice1(text)
    } else {
      setChoice1('')
    }
  }

  const handleStartSearchingClick = () => {
    if (bookSearchRef.current) {
      bookSearchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(toggleFunc2(false))
  },[])
  return (
    <div
      className="w-full h-full bg-white overflow-hidden "
      onClick={() => {
        dispatch(toggleFunc2(false));
      }}
    >
      <div className="w-full bg-[#1E1E1E] text-white p-2 my-div">
        <h1 className="text-center text-5xl sm:mt-24 mt-14" ref={bookSearchRef}>
          Welcome on Eze Digital Living Library
        </h1>
        <p className="flex justify-center my-10 w-6/12 m-auto text-center text-lg font-bold">
          Your online gateway to a vast collection of research papers, and
          educational resources. Explore our digital repository to access a
          wealth of knowledge
        </p>
        <div>
          <BookSearch />
        </div>
        <p className="text-center font-bold text-lg mb-10">
          or <br />
          Visit the popular categories
        </p>

        <div className=" w-full flex flex-wrap gap-5 justify-center mb-24 text-black ">
          {channelarray.map((item) => {
            return <CardChannel text={item.name} id={item.id.toString()} key={item.id}/>
})}
        </div>
      </div>

      <div className=" w-full sm:grid sm:grid-cols-2 gap-x-48 items-center xl:px-48 md:px-10 px-2 text-[#1D242D]  xl:py-24 sm:py-5">
        <div className="sm:mb-0 mb-10">
          <h1 className="w-36 text-3xl">Comprehensive Collection</h1>
          <p>Dive into a vast ocean of scientific knowledge</p>
          <ul className="my-4 lg:text-base  text-xs">
            <li className="flex items-center gap-2">
              <Image src={elips} alt="" />
              <span>Millions of peer-reviewed articles</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <Image src={elips} alt="" />
              <span>Datasets across various scientific disciplines</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={elips} alt="" />
              <span>Continuously updated with the latest research</span>
            </li>
          </ul>
          <button className="rounded-full border bg-[#015E44] text-white font-semibold px-3 py-2 text-sm mt-2" onClick={() => router.push('/bookmarks')}>
            Show Collection
          </button>
        </div>
        <Image src={group} alt="" className="sm:mb-0 mb-10" />
      </div>

      <div className="bg-[#505FF0]  text-white sm:grid sm:grid-cols-2 gap-x-48 xl:px-48 md:px-10 px-2 xl:py-24 sm:py-5">
        <div className="w-full h-96 relative sm:mb-0 mb-10  sm:h-full ">
          <Image
            src={firstImgBloc2}
            alt=""
            className="w-[50%] h-[60%]  absolute "
          />
          <Image
            src={secondImgBloc2}
            alt=""
            className="w-[50%] h-[60%] right-[35%]   absolute bottom-[20%]"
          />
        </div>
        <div className="sm:mb-0 mb-10">
          <h1 className="w-36 text-3xl">Curated Collections</h1>
          <p>Let our expertise guide you</p>
          <ul className="my-4 lg:text-base  text-xs">
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Featured collections on trending topics.</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <Image src={elips2} alt="" />
              <span>Subject-specific bibliographies for focused research.</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Expertly curated by librarians and scientists.</span>
            </li>
          </ul>
          <button className="rounded-full border bg-[#191B29] text-white font-semibold px-3 py-2 text-sm mt-2" onClick={handleStartSearchingClick}>
            Start Searching
          </button>
        </div>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 gap-x-48 bg-[#1D242D] text-white items-center xl:px-48 md:px-10 px-2 xl:py-24 sm:py-5">
        <div className="sm:mb-0 mb-10">
          <h1 className="w-36 text-3xl">Advanced Search Functionality</h1>
          <p>Find what you need, fast</p>
          <ul className="my-4 lg:text-base  text-xs">
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>
                Keyword search with customizable filters for precise results.
              </span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <Image src={elips2} alt="" />
              <span>Utilize Boolean operators to craft powerful searches.</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>
                Browse by subject, author, or date for a better experience.
              </span>
            </li>
          </ul>
          <button className="rounded-full border bg-[#015E44] text-white font-semibold px-3 py-2 text-sm mt-2" onClick={() => router.push('/bookmarks')}>
            Show Collection
          </button>
        </div>
        <div className="w-full h-96 relative sm:mb-0 mb-10  sm:h-full  overflow-hidden">
          <Image
            src={firstImgBloc3}
            alt=""
            className="absolute w-[50%] h-[50%] left-[12.5%]"
          />
          <Image
            src={secondImgBloc3}
            alt=""
            className="absolute w-[50%] h-[50%]   bottom-0 right-[12.5%]"
          />
        </div>
        {/* <Image src={group} alt="" className="sm:mb-0 mb-10" /> */}
      </div>

      {/* <div className="flex flex-wrap gap-3">
            {channelarray.map((item)=> <div><NewCardDocument/></div>)}
      </div> */}

      <div className="w-full px-2 pb-2 pt-10 bg-[#F5F7F9]">
        <div className="w-full flex justify-between items-center mb-5 px-5">
          <p className="font-bold text-lg">Recent</p>
          {/* <p className=" font-bold border-b-3 border-[green] text-[green]">
            See More
          </p> */}
        </div>
        <div className="w-full  pb-14 overflow-hidden">
          <Carousel data={arraytest} />
        </div>

        <div className="flex gap-x-20 items-center justify-center flex-wrap">
          {priceArray.map((item) => (
            <Pricing
            key={item.id}
            itemId={item.id}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
              title={item.text}
              // description={item.description}
              details={item.detail}
              price={item.price.toString()}
              // periode={item.periode}
              state={choice}
              remove={() => setChoice("")}
              take={() => setChoice(item.text)}
              click={choice1}
              chickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
      <Footer footer={{}} />
    </div>
  );
};
export default Home;

