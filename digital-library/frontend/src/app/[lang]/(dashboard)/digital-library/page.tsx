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
const home = () => {
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

  const priceArray = [
    {
      text: "Free Plan",
      price: 0,
      description: "Great Fit For Big Organizations",
      detail: [
        { text: "2 Factor Authentication", active: true },
        { text: "Access to Community", active: false },
        { text: "3rd Party Integration", active: false },
        { text: "Dedicated Assistant", active: false },
      ],
    },
    {
      text: "Basic Plan",
      price: 19,
      description: "Great Fit For Big Organizations",
      detail: [
        { text: "2 Factor Authentication", active: true },
        { text: "Access to Community", active: true },
        { text: "3rd Party Integration", active: false },
        { text: "Dedicated Assistant", active: false },
      ],
    },
    {
      text: "Business Plan",
      price: 40,
      description: "Great Fit For Big Organizations",
      detail: [
        { text: "2 Factor Authentication", active: true },
        { text: "Access to Community", active: true },
        { text: "3rd Party Integration", active: true },
        { text: "Dedicated Assistant", active: false },
      ],
    },
    {
      text: "Enterprise Plan",
      price: 99,
      description: "Great Fit For Big Organizations",
      detail: [
        { text: "2 Factor Authentication", active: true },
        { text: "Access to Community", active: true },
        { text: "3rd Party Integration", active: true },
        { text: "Dedicated Assistant", active: true },
      ],
    },
  ];
  return (
    <div className="w-full h-full bg-white ">
      <div className="w-full bg-[#1E1E1E] text-white p-2">
        <h1 className="text-center text-5xl mt-5">
          Welcome on Eze Digital Living Library
        </h1>
        <p className="flex justify-center my-10 w-6/12 m-auto text-center text-lg font-bold">
          Your online gateway to a vast collection of research papers, and
          educational resources. Explore our digital repository to access a
          wealth of knowledge
        </p>
        <div className="relative h-14 lg:w-6/12 w-11/12 m-auto rounded-full overflow-hidden bg-transparent border-2 mb-8 bg-[#E9ECEF] border-[#E9ECEF]">
          <input
            type="text"
            className="w-full h-full pl-12 border rounded-full bg-[#E9ECEF] border-[#E9ECEF]"
            placeholder="Search Articles, Resarch Works, Documentation, Thesis ..."
          />
          <Image
            src={searchIcon}
            alt=""
            className="absolute h-7 w-7 top-[13px] left-3"
          />
        </div>

        <p className="text-center font-bold text-lg mb-10">
          or <br />
          Visit the popular categories
        </p>

        <div className=" w-full flex flex-wrap gap-5 justify-center mb-24 text-black">
          {channelarray.map((item) => (
            <CardChannel text={item.name} id={item.id.toString()} />
          ))}
        </div>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 gap-x-48 items-center xl:px-48 md:px-10 px-2 text-[#1D242D] my-10">
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
          <button className="rounded-full border bg-[#015E44] text-white font-semibold px-3 py-2 text-sm mt-2">
            Show Collection
          </button>
        </div>
        <Image src={group} alt="" className="sm:mb-0 mb-10" />
      </div>

      <div className="bg-[#505FF0] text-white sm:grid sm:grid-cols-2 gap-x-48 xl:px-48 md:px-10 px-2 py-10">
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
          <h1 className="w-36 text-3xl">Comprehensive Collection</h1>
          <p>Dive into a vast ocean of scientific knowledge</p>
          <ul className="my-4 lg:text-base  text-xs">
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Millions of peer-reviewed articles</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <Image src={elips2} alt="" />
              <span>Datasets across various scientific disciplines</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Continuously updated with the latest research</span>
            </li>
          </ul>
          <button className="rounded-full border bg-[#191B29] text-white font-semibold px-3 py-2 text-sm mt-2">
            Show Collection
          </button>
        </div>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 gap-x-48 bg-[#1D242D] text-white items-center xl:px-48 md:px-10 px-2 py-10">
        <div className="sm:mb-0 mb-10">
          <h1 className="w-36 text-3xl">Comprehensive Collection</h1>
          <p>Dive into a vast ocean of scientific knowledge</p>
          <ul className="my-4 lg:text-base  text-xs">
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Millions of peer-reviewed articles</span>
            </li>
            <li className="flex items-center gap-2 my-2">
              <Image src={elips2} alt="" />
              <span>Datasets across various scientific disciplines</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={elips2} alt="" />
              <span>Continuously updated with the latest research</span>
            </li>
          </ul>
          <button className="rounded-full border bg-[#015E44] text-white font-semibold px-3 py-2 text-sm mt-2">
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

      <div className="w-full px-2 pb-2">
        <div className="w-full flex justify-between items-center mb-5 px-1">
          <p className="font-bold text-lg">Recent</p>
          <p className=" font-bold border-b-3 border-[green] text-[green]">
            See More
          </p>
        </div>
        <div className="w-full  pb-14 overflow-hidden">
          <Carousel data={arraytest} />
        </div>

        <div className="flex justify-center flex-wrap  xl:gap-48 lg:gap-36 md:gap-[100px] gap-10   lg:px-5 px-2 mt-10 md:pb-24 pb-14">
          {priceArray.map((item) => (
            <Pricing
              title={item.text}
              description={item.description}
              details={item.detail}
              price={item.price.toString()}
            />
          ))}
        </div>

        {/* <div className="w-full flex justify-between items-center mb-5 px-1">
          <p className="font-bold text-lg">Trending</p>
          <p className=" font-bold border-b-3 border-[green] text-[green]">
            See More
          </p>
        </div>
        <div className="w-full  pb-14">
          <Carousel data={arraytest1} />
        </div> */}
      </div>
      <Footer footer={{}} />
    </div>
  );
};
export default home;
