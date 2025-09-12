"use client";
import { IoEllipse } from "react-icons/io5";
import { motion } from "framer-motion";
import { gotQuestionsData } from "@/components/utils/ImportantData/ImportantData";

const GotQuestions = () => {
  return (
    <>
      <div className="py-[64px] md:pt-[100px] md:pb-[120px] px-4 bg-[#151E1B] ">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title text-center mb-11"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5]">
            Got Questions<span className="text-primary">? </span>We have Got The
            Answers
          </h1>
        </motion.div>

        <div className="flex items-center flex-col  max-w-[960px] mx-auto">
          {gotQuestionsData.map((i, indx) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              key={indx}
              className="p-6 rounded-[12px] bg-card w-full md:mb-6 mb-3 border border-transparent hover:border-[#1FFFA5] 
                         transition-all duration-1000 ease-in-out
                         relative overflow-hidden group"
            >
              <span className="text-primary ">
                <IoEllipse />
              </span>

              <p className=" mb-6 text-[#F5F5F5] text-2xl leading-[26px] font-bold my-6 font-primary">
                {i.title}
              </p>
              <p className="custom-text-18">{i.description}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#1FFFA5]/20 to-transparent 
                              group-hover:h-full transition-all duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GotQuestions;
