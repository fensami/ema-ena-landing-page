import Image from "next/image";
import { MdRocketLaunch } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
// import { cards } from "./_constants/constants";
const cards = [
  {
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    icon: <PiRocketLaunch />,
  },
  {
    title: "Agency Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag.",
    icon: <MdRocketLaunch />,
  },
  {
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
    icon: <MdRocketLaunch />,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, just clear value. What you see is what you pay.",
    icon: <MdRocketLaunch />,
  },
  {
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
    icon: <MdRocketLaunch />,
  },
  {
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
    icon: <MdRocketLaunch />,
  },
];

const WhyBusinessTrust = () => {
  return (
    <>
      <div className="px-[16px] py-[64px] md:px-[120px] md:py-[120px] bg-background">
        <p
          //   data-aos="fade-up"
          //   data-aos-duration={300}
          //   data-aos-delay="200"
          className="text-center manrope-med-48 mb-2"
        >
          Why Businesses <span className="text-primary">Trust Us</span> With
          Their Designs
        </p>
        <p
          //   data-aos="fade-up"
          //   data-aos-duration={300}
          //   data-aos-delay="300"
          className="text-center general-reg-16 mb-12"
        >
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:gap-9 gap-4">
          {cards.map((i, indx) => (
            <div
              key={indx}
              //   data-aos="fade-up"
              //   data-aos-delay={indx * 100 + 300}
              className="p-6 flex flex-col items-start justify-between bg-card  curved 
                         border border-transparent hover:border-[#1FFFA5] 
                         transition-all duration-1000 ease-in-out
                         relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#1FFFA5]/20 to-transparent 
                              group-hover:h-full transition-all duration-500 ease-in-out"
              />

              {/* <Image
                src={i.image}
                height={48}
                width={48}
                className="object-cover relative z-10"
                alt="img"
              /> */}
              <span className="text-[48px] mb-[46px] text-primary">
                {i.icon}
              </span>
              <div className="space-y-[12px] relative z-10">
                <p className="manrope-med-16 text-text-light">{i.title}</p>
                <p className="general-reg-14 text-secondary-light">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyBusinessTrust;
