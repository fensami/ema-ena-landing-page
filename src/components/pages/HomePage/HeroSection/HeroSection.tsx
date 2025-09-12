"use client";
import { motion } from "framer-motion";
import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import Image from "next/image";

import { IoSparklesOutline } from "react-icons/io5";
import {
  contactBottom,
  heroData,
  heroTopShadow,
  logo,
} from "@/components/utils/ImportantData/ImportantData";

const HeroSection = () => {
  return (
    <div className="relative flex items-center flex-col pt-6 md:pb-[131px] md:px-[120px] px-4 py-4  md:mb-0 bg-background z-10">
      {/* icon part */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:mb-[80px] mb-5 md:mb-10 "
      >
        <Image
          className="object-cover  "
          src={logo}
          width={80}
          height={18}
          alt="logo"
        />
      </motion.div>
      {/* text part */}
      <div className="flex justify-center items-center flex-col mt-[33px] md:mt-0">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="textPart text-[12px] px-4 py-2 md:mb-6 mb-9"
        >
          <span className="text-primary text-[16px]">
            <IoSparklesOutline />
          </span>
          <p className="custom-text-12">
            Trusted by 30+ startups & entrepreneurs worldwide
          </p>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-[90%] w-full md:mb-12 mb-9 text-center"
        >
          <p className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#F5F5F5] lg:leading-[72px] md:mb-4 mb-3 max-w-[1090px] font-manrope ">
            Strategic Landing Pages That Convert From Just
            <span className="text-primary"> $200</span>
          </p>
          <p className="custom-text-18 max-w-[960px]">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </motion.div>
      </div>
      {/* this is for hero contact */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col"
      >
        <div
          className="bg-[#151e1b] border-[#2a3c36] rounded-[8px] w-full lg:w-[794px] mx-auto 
        p-3 md:p-9 hero-box-shadow"
        >
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
                  <span className="text-primary">{item.icon}</span>
                  <input
                    className="flex-1 text-nowrap focus:outline-none border-none custom-text-12"
                    placeholder={item.title}
                    type={item.type}
                  />
                </div>
              ))}
            </div>
            <ButtonPrimary text="Get my high-converting landing page" />
          </div>
        </div>

        <div className="flex  gap-3 md:flex-row  justify-between md:justify-center items-start md:items-center flex-wrap md:gap-[64px] mt-4">
          {contactBottom.map((data, index) => (
            <div
              className="flex justify-center items-center space-x-[8px]"
              key={index}
            >
              <span className="text-white">{data.icon}</span>
              <span className="text-nowrap custom-text-12-2">{data.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-0 -z-10">
        <Image src={heroTopShadow} width={816} height={252} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
