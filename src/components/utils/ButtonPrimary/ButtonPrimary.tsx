"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface HeroButtonProps {
  text: string;
}

const ButtonPrimary: React.FC<HeroButtonProps> = ({ text }) => {
  return (
    <div className="heroContactButton group px-2 sm:px-8 py-4 text-[16px] sm:font-medium cursor-pointer rounded-[8px] hover:rounded-[18px]  flex items-center space-x-[12px]">
      <button className=" cursor-pointer transition-all duration-300 group-hover:-translate-x-1">
        {text}
      </button>
      <FaArrowRightLong className="leading-1" />
    </div>
  );
};

export default ButtonPrimary;
