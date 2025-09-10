"use client";

import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";

// import { images } from "@/assets";
// import { contactBottom, heroData } from "@/data/fakeData";
// import Image from "next/image";
// import { useState } from "react";
// import CustomButton from "./button";
const heroTopShadow =
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757518214/hero_top_shadow_upyl9i.png";
const logo =
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757518241/Logo_jbnlqu.svg";
// interface HeroItem {
//   icon: StaticImageData;
//   title: string;
//   type: "text" | "email" | "number";
// }
const heroData = [
  { icon: <FaRegUser />, title: "Your name", type: "text" },
  { icon: <HiOutlineMailOpen />, title: "Email Address", type: "email" },
  { icon: <BsTelephone />, title: "Phone Number", type: "number" },
];

export const contactBottom = [
  { icon: <MdOutlineLock />, title: "SSL secure" },
  { icon: <IoMdCheckmark />, title: "Money-back guaranteed" },
  { icon: <FaRegStar />, title: "Satisfaction guaranteed" },
];

const HeroSection = () => {
  return (
    <div className="relative flex items-center flex-col pt-6 md:pb-[131px] md:px-[120px] px-4 py-4 mb-[26px] md:mb-0 bg-background z-10">
      {/* <Image
        className="absolute top-0"
        src={heroTopShadow}
        alt="Hero Top Shadow"
      /> */}

      {/* icon part */}
      <div className="mb-[80px]">
        {/* <img src={logo} alt="" /> */}
        <Image
          className="object-cover  "
          src={logo}
          width={80}
          height={18}
          alt="logo"
        />
      </div>
      {/* text part */}
      <div className="flex justify-center items-center flex-col mt-[33px] md:mt-0">
        <h3 className="textPart text-[12px] px-4 py-2 md:mb-6 mb-9">
          <span className="text-primary text-[16px]">
            <IoSparklesOutline />
          </span>
          <p className="general-reg-12">
            Trusted by 30+ startups & entrepreneurs worldwide
          </p>
        </h3>
        <div className="md:w-[90%] w-full md:mb-12 mb-9 text-center">
          <p className=" text-[72px] font-bold text-[#F5F5F5] leading-[72px] md:mb-4 mb-3 max-w-[990px] font-manrope ">
            Strategic Landing Pages That Convert From Just
            <span className="text-primary"> $200</span>
          </p>
          <p className="general-reg-18">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </div>
      </div>
      {/* this is for hero contact */}
      <div className="flex flex-col">
        <div className="heroContactMain w-[90vw] lg:w-[60vw] mx-auto p-3 md:p-9">
          <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {heroData.map((item, index) => (
                <div
                  className="heroContact p-[18px] flex items-center gap-x-2 w-full rounded-md 
             border-2 border-transparent 
             transition-colors duration-300 
             hover:bg-white/5 
             focus:ring-[#1fffa5]"
                  key={index}
                >
                  {/* <img src={item.icon} alt={item.title} /> */}
                  {/* <Image
                    height={16}
                    width={16}
                    src={item.icon}
                    alt={item.title}
                  /> */}
                  <span className="text-primary">{item.icon}</span>
                  <input
                    className="flex-1 text-nowrap focus:outline-none border-none general-reg-12"
                    placeholder={item.title}
                    type={item.type}
                  />
                </div>
              ))}
            </div>
            <ButtonPrimary text="Get my high-converting landing page" />
            {/* <CustomButton text="Get my high-converting landing page" /> */}
          </div>
        </div>

        <div className="flex justify-between md:justify-center items-center flex-wrap md:gap-[64px] mt-4">
          {contactBottom.map((data, index) => (
            <div
              className="flex justify-center items-center space-x-[8px]"
              key={index}
            >
              <span className="text-white">{data.icon}</span>
              {/* <img src={data.icon} alt={data.title} /> */}
              {/* <Image height={16} width={16} src={data.icon} alt={data.title} /> */}
              <span className="text-nowrap general-reg-12-2">{data.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 -z-10">
        <Image src={heroTopShadow} width={816} height={252} alt="" />
        {/* <img src={heroTopShadow} alt="" /> */}
        {/* width: 816px;
height: 252px; */}
      </div>
    </div>
  );
};

export default HeroSection;
