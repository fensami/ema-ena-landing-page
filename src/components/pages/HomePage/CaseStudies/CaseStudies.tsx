import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
type ProjectShowcase = {
  name: string;
  point1: string;
  point2: string;
  image: string;
};
export const projectShowcaseData: ProjectShowcase[] = [
  {
    name: "Velora",
    point1: "20% high conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527740/section1_moduut.png",
  },
  {
    name: "Flow Point",
    point1: "20% higher conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527728/section2_hnhjj4.png",
  },
  {
    name: "GrowthSummit",
    point1: "20% higher conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527728/section3_ln5ut6.png",
  },
];
const CaseStudies = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[48px] py-[120px] px-4 bg-[#0A0F0D]">
      <div>
        <h1 className="manrope-med-48 mb-2 text-text-light text-center">
          Case Studies
        </h1>
        <p className="general-reg-16 text-text-light text-center">
          See the designs that delivered results
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-4">
        {projectShowcaseData.map((i, index) => (
          <div
            key={index}
            className="p-3 border-2 border-[#2A3C36] rounded-[12px] bg-background flex flex-col items-center gap-y-1"
          >
            <div className=" h-full w-full">
              <Image
                src={i.image}
                width={560}
                height={372}
                className="object-cover h-full w-full"
                alt="img"
              />
            </div>
            <div className="flex justify-between p-3 w-full ">
              <div className="self-start">
                <p className="manrope-bold-24">{i.name}</p>
              </div>
              <div className="flex flex-col items-start justify-between gap-y-2">
                <div className="px-4 py-2 rounded-full gap-x-2 bg-foreground flex items-center">
                  <span className="text-primary">
                    <FaCheck />
                  </span>
                  <p className="general-reg-12">{i.point1}</p>
                </div>
                <div className="px-4 py-2 rounded-full gap-x-2 bg-foreground flex items-center">
                  <span className="text-primary">
                    <FaCheck />
                  </span>
                  <p className="general-reg-12">{i.point2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonPrimary text="I want similar results" />
    </div>
  );
};

export default CaseStudies;
