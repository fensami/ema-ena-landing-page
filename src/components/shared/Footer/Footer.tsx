import { footerImage } from "@/components/utils/ImportantData/ImportantData";
import Image from "next/image";
import {
  LiaBehance,
  LiaDribbble,
  LiaFacebookSquare,
  LiaInstagram,
  LiaLinkedin,
} from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-[#1fffa5]">
      <div className=" flex flex-col gap-4 sm:flex-row items-center justify-between p-4 md:py-[64px] lg:py-[64px] max-w-[990px] mx-auto">
        <div className="">
          <Image
            src={footerImage}
            width={160}
            height={36}
            className="object-cover"
            alt="img"
          />
        </div>
        <p className="hidden md:block text-[12px] font-normal leading-[18px] tracking-[0] text-primary_dark text-end md:text-start">
          © All rights reserved to Ena Ema Technologies
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
          <p className="md:hidden block text-[12px] font-normal leading-[18px] tracking-[0] text-primary_dark text-end md:text-start">
            © All rights reserved to Ena Ema Technologies
          </p>
          <div className="sm:self-end md:self-center flex items-center justify-center md:gap-x-4 gap-x-2">
            <LiaLinkedin fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
            <LiaFacebookSquare
              fill="#0A0F0D"
              className="h-6 w-6 cursor-pointer"
            />
            <LiaInstagram fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
            <LiaBehance fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
            <LiaDribbble fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
