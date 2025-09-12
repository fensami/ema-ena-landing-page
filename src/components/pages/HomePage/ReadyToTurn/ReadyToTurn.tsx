"use client";

import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import {
  contactBottom,
  heroData,
} from "@/components/utils/ImportantData/ImportantData";
import { motion } from "framer-motion";

const ReadyToTurn = () => {
  return (
    <div
      className="
        bg-[#0a0f0d]
        relative flex items-center flex-col md:py-[131px]  px-4 py-[64px]
      "
    >
      {/* Heading */}
      <div className="md:w-[90%] w-full md:mb-12 mb-9 text-center mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title text-center mb-11"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5] max-w-[960px] mx-auto">
            Ready to Turn Visitors Into
            <span className="text-primary"> Real Customers?</span>
          </h1>
          <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
            Don t settle for an average page. Get a premium, conversion-focused{" "}
            <br />
            landing page that pays for itself.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col"
      >
        <div className="heroContactMain   p-3 md:p-9 bg-[#151E1B] rounded-lg border border-[#2A3C36]">
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
                    className="flex-1 max-w-[230px] text-nowrap focus:outline-none border-none custom-text-12"
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
    </div>
  );
};

export default ReadyToTurn;
