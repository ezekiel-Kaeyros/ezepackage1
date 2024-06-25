import Image from "next/image";
import check from "../../../../../../public/images/Frame 492.svg";

const Stepper: React.FC<{ step: number }> = ({ step }) => {
  const arrayStep = [
    { id: 1, text: "Settings", description: "Document Settings" },
    { id: 2, text: "Setup", description: "Document Related" },
    { id: 3, text: "Upload", description: "Upload your documents" },
    { id: 4, text: "Publish", description: "Publish your document " },
  ];
  return (
    <div className="w-full h-hull border-r md:pr-10 pr-2">
      <div className="w-full flex flex-col gap-9">
        {arrayStep.map((item) => (
          <div className="flex items-center gap-2">
            {step > item.id ? (
              <Image src={check} alt="" className="h-10 w-10"/>
            ) : (
              <div
                className={` ${
                  item.id == step ? "bg-[#1D242D]" : "bg-[#3D4C5E] "
                } h-10 border w-10 rounded-full p-1 flex items-center justify-center text-white`}
              >
                {item.id}
              </div>
            )}
            <div className="sm:block hidden">
              <p className="font-semibold">{item.text}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stepper;
