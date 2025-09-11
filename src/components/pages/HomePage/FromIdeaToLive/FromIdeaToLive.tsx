import Image from "next/image";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiRocketLaunch } from "react-icons/pi";
const cards = [
  {
    icon: <PiRocketLaunch />,
    name: "Book Your Project",
    designations: "Fill out a short form and we'll get started immediately.",
    duration: "Day 1",
  },
  {
    icon: <IoColorPaletteOutline />,
    name: "Design & Development",
    designations:
      "Unlimited revisions until perfect. You're involved every step.",
    duration: "Day 2-4",
  },
  {
    icon: <HiOutlineLightningBolt />,
    name: "Launch",
    designations:
      "Fully deployed on your hosting and ready to convert visitors.",
    duration: "Day 5",
  },
];
const FromIdeaToLive = () => {
  return (
    <>
      <div className="relative z-10 py-[120px] bg-[#151E1B] overflow-hidden">
        <p className="text-center manrope-med-48 mb-2">
          From Idea to Live Landing Page in
          <span className="text-primary"> Just 5 Days </span>
        </p>
        <p className="text-center general-reg-16 mb-12">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((i, index) => (
              <div
                key={index}
                className="curved flex flex-col items-center justify-between bg-card relative p-9"
              >
                <div className="w-full">
                  <div className="bg-[#003D25] p-6 flex justify-center items-center w-[84px]  h-[84px] mx-auto rounded-full mb-9">
                    <span className="text-[36px] text-primary">{i.icon}</span>
                  </div>
                  {/* <div className="h-[84px] w-[84px] mx-auto bg-foreground rounded-full flex items-center justify-center p-6">
                    <Image
                      src={i.image}
                      height={30}
                      width={30}
                      className="object-cover"
                      alt="img"
                    />
                  </div> */}
                </div>
                <div className="">
                  <p className="general-med-20 text-text-light text-center">
                    {i.name}
                  </p>
                  <p className="general-reg-14 text-secondary-light text-center text-wrap mt-1">
                    {i.designations}
                  </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[18px] border border-[#1FFFA5] rounded-full">
                  <p className="general-reg-12 text-primary px-2">
                    {i.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" absolute left-0 top-0 -z-10">
          <Image
            src="https://res.cloudinary.com/dbbemyywc/image/upload/v1757559698/image20_vbuotg.png"
            width={1300}
            height={1000}
            className="object-cover"
            alt="bg-left"
          />
        </div>
      </div>
    </>
  );
};

export default FromIdeaToLive;
