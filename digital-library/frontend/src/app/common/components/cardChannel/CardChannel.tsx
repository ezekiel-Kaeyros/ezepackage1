import Image from "next/image"
import logo from "../../../../../public/images/Vector (25).svg"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
import { setCathegoryName } from "@/redux/features/auth-slice";
import { RootState } from "@/redux/store";

const CardChannel: React.FC<{ text: string,id:string }> = (props) => { 
  const dispatch = useDispatch();

    return (
      <Link href={`/en/digital-library/seeFileCat/${props.text}`} onClick={() => dispatch(setCathegoryName(props.text))}>
        <div className="border rounded-xl  h-[150px] w-72 bg-white overflow-hidden relative pt-8 pl-5 hover:border-2 border-black">
          <p className="font-bold text-xl max-w-[170px]">{props.text}</p>
          <Image src={logo} alt="" className="absolute bottom-0 right-0 " />
        </div>
      </Link>
    );
}
export default CardChannel