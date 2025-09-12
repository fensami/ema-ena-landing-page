"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { formIdeaCard } from "@/components/utils/ImportantData/ImportantData";

const FromIdeaToLive = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden py-[100px] md:py-[120px] px-4 bg-[#151E1B] ">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title text-center mb-11"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5]">
            From Idea to Live Landing Page in{" "}
            <span className="text-primary">Just 5 Days</span>
          </h1>
          <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
            Our streamlined process ensures fast delivery without compromising
            quality.
          </p>
        </motion.div>

        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formIdeaCard.map((i, index) => (
              <motion.div
                initial={i.animation.initial}
                whileInView={i.animation.animate}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="curved flex flex-col items-center justify-between bg-card relative p-9"
              >
                <div className="w-full">
                  <div className="bg-[#003D25] p-6 flex justify-center items-center w-[84px]  h-[84px] mx-auto rounded-full mb-9">
                    <span className="text-[36px] text-primary">{i.icon}</span>
                  </div>
                </div>
                <div>
                  <p className=" text-text-light text-center">{i.name}</p>
                  <p className="custom-text-14 text-secondary-light text-center text-wrap mt-1">
                    {i.designations}
                  </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[18px] border border-[#1FFFA5] rounded-full">
                  <p className="custom-text-12 text-primary px-2">
                    {i.duration}
                  </p>
                </div>
              </motion.div>
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
