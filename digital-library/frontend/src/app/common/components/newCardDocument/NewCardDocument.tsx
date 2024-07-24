import Image from "next/image";
import cover from "../../../../../public/images/overview.svg";
import startGrey from "../../../../../public/images/Shape.svg";
import start from "../../../../../public/images/star (1).svg";
import saveGrey from "../../../../../public/images/Save to library.svg";
import save from "../../../../../public/images/Save to library (1).svg";
import { useRouter } from "next/navigation";
import { useAddDocument } from "@/app/hooks/useAddDocument";

const arrayTest = [1, 2, 3, 4, 5];
const NewCardDocument: React.FC<{
  number?: number;
  saveDoc?: boolean;
  imgCover?: any;
  categorie?: string;
  title?: string;
  description?: string;
  id?: string;
  name?: string;
  url?: any;
  date?: any;
  price?: string;
}> = (props) => {

  const convertDateToFrenchFormat = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const formattedDate = `${day} ${monthNames[month]} ${year}`;
    return formattedDate;
  };

  const newFormat = convertDateToFrenchFormat(props.date);
  return (

    <div className="">
      {/* <Link href={'#'} target="_blank"> */}
      <div
        className="w-full cursor-pointer"
      // onClick={() => {
      //   props.id && dispatch(idHandler(props.id));
      //   push("/view-document");
      // }}
      >
        <div className="h-[200px]">
          <div className="h-[56px]"></div>
          <div className="flex gap-5 justify-between items-start relative h-36 bg-white border-t border-l border-r border-white rounded-tr-3xl">
            <Image
              src={props.imgCover ? props.imgCover : cover}
              alt=""
              width={192}
              height={200}
              className="w-48 h-80 -mt-12 object-cover"
            />

            <p className="lg:text-base sm:text-sm text-xs px-3 py-2 bg-[#47586E] font-semibold text-white rounded-tl-full rounded-bl-full rounded-tr-full">
              {props.categorie ? props.categorie : " Thesisjjjjj"}
            </p>
          </div>
        </div>
        <div className="p-2 bg-white relative pt-5  overflow-hidden ">
          <h1 className="w-48 h-14 text-lg truncate">
            {props.title
              ? props.title
              : " The Contant Evolution of Quantum Physics"}
          </h1>
          <div className="my-4 text-sm w-[260px]  h-12 overflow-hidden  text-clip	">
            <p className="truncate">
              {" "}
              {props.description
                ? props.description
                : "  Lorem ipsum dolor sit amet consectetur. Ac sed turpis tellus scelerisque neque cursus urna. Tristique nunc mi adipiscing vitae fames odio varius..."}
            </p>
          </div>
          <p className="my-2 text-[#909DAD] text-sm font-semibold">By {props.name}</p>
          <p className="flex justify-between text-[#47586E] font-bold">
            <span>{newFormat.includes('undefined') ? '' : newFormat}</span>
            {/* <span>{Math.floor(10000 + Math.random() * 90000)}</span> */}
            <span>{props.price} XAF</span>
          </p>

          <div className="flex justify-between items-center my-4">
            <div className="flex justify-start sm:gap-2  items-center">
              {arrayTest.map((item, index) => {
                if (props.number && props.number > 0 && item <= props.number) {
                  return <Image src={start} alt="" key={index} />;
                } else {
                  return <Image src={startGrey} alt="" key={index} />;
                }
              })}
            </div>
            <Image src={props.saveDoc ? save : saveGrey} alt="" />
          </div>

          <div className="flex justify-between items-center my-2">
            <span></span>
            <button className="px-4 py-2 text-white font-semibold rounded-full bg-mainColor text-sm">
              suscribe
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
export default NewCardDocument;
