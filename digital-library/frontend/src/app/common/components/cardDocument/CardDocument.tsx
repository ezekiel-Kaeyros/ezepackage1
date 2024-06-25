import { Button } from "@nextui-org/react";
import Image from "next/image";
import cover from "../../../../../public/images/Rectangle 1.svg";
import startGrey from "../../../../../public/images/Shape.svg";
import start from "../../../../../public/images/star.svg";
import saveGrey from "../../../../../public/images/Save to library.svg";
import save from "../../../../../public/images/Save to library (1).svg";
import { number } from "zod";
const arrayTest = [1, 2, 3, 4, 5];
const CardDocument: React.FC<{
  img?: any;
  theme?: any;
  number: number;
  saveDoc: boolean;
}> = (props) => {
  return (
    <div className="w-full border border-[#B2BBC6] rounded-xl overflow-hidden">
      <div className="relative  h-48 rounded-xl">
        <div className="bg-white border rounded-l-full h-10 w-5/12 absolute top-0 right-0  flex justify-center items-center text-xs">
          <span>Thesis</span>
        </div>
        <Image
          src={props.img ? props.img : cover}
          alt=""
          className="object-cover h-full w-full "
        />
      </div>
      <div className="py-5 sm:px-3 px-1 bg-white ">
        <Button className="rounded-full flex justify-center sm:px-3 px-1 py-2">
          pdf
        </Button>

        <p className="text-lg font-bold mt-3">The Evolution of Quantum</p>
        <p className="text-xs text-[#909DAD] mb-3">Added by IFYAR</p>

        <div className="flex justify-between items-center">
          <div className="flex justify-start sm:gap-2  items-center">
            {arrayTest.map((item) => {
              if (props.number > 0 && item <= props.number) {
                return <Image src={start} alt="" />;
              } else {
                return <Image src={startGrey} alt="" />;
              }
            })}
          </div>
          <Image src={props.saveDoc ? save : saveGrey} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CardDocument;
