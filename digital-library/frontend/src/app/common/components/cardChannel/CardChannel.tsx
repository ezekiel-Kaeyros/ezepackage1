import Image from "next/image"
import logo from "../../../../../public/images/Vector (25).svg"
import Link from "next/link"
const CardChannel: React.FC<{ text: string,id:string }> = (props) => { 
    return (
      <Link href={`/digital-library/${props.id.toString()}`}>
        <div className="border rounded-xl  h-[150px] w-72 bg-white overflow-hidden relative pt-8 pl-5">
          <p className="font-bold text-xl max-w-[170px]">{props.text}</p>
          <Image src={logo} alt="" className="absolute bottom-0 right-0 " />
        </div>
      </Link>
    );
}
export default CardChannel