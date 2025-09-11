"use client";

import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";

import Image from "next/image";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegStar, FaRegUser } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";

const contactBottom = [
  { icon: <MdOutlineLock />, title: "SSL secure" },
  { icon: <IoMdCheckmark />, title: "Money-back guaranteed" },
  { icon: <FaRegStar />, title: "Satisfaction guaranteed" },
];
const heroData = [
  { icon: <FaRegUser />, title: "Your name", type: "text" },
  { icon: <HiOutlineMailOpen />, title: "Email Address", type: "email" },
  { icon: <BsTelephone />, title: "Phone Number", type: "number" },
];
const ReadyToTurn = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (title: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    // replace with your API call if needed
  };

  return (
    <div
      className="
        bg-[#0a0f0d]
        relative flex items-center flex-col md:py-[131px] md:px-[120px] px-4 py-[64px]
      "
    >
      {/* left shadow */}
      {/* <Image
        src={images.shadow1}
        alt=""
        className="
          hidden md:block
          absolute left-0 top-0
          w-[50vw]
          h-screen
          pointer-events-none
        "
      /> */}

      {/* right shadow */}
      {/* <Image
        src={images.shadow2}
        alt=""
        className="
          hidden md:block
          absolute right-0 top-0
          w-[50vw]
          h-screen
          pointer-events-none
        "
      /> */}

      {/* Heading */}
      <div className="md:w-[90%] w-full md:mb-12 mb-9 text-center mx-auto">
        <p className="manrope-bold-72 text-text-light md:mb-4 mb-3">
          Ready to Turn Visitors Into
          <span className="text-primary"> Real Customers?</span>
        </p>
        <p className="general-reg-18">
          Don t settle for an average page. Get a premium, conversion-focused
          landing page that pays for itself.
        </p>
      </div>

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
    </div>
  );
};

export default ReadyToTurn;
