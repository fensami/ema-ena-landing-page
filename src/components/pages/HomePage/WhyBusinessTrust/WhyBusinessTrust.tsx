"use client";

import { whyBusinessTrustCard } from "@/components/utils/ImportantData/ImportantData";
import { motion } from "framer-motion";

const WhyBusinessTrust = () => {
  return (
    <section className="bg-background overflow-hidden">
      <div className="px-[16px]  md:py-[120px] max-w-[1200px] mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title text-center mb-11"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5]">
            Why Businesses <span className="text-primary">Trust Us</span> With
            Their Designs
          </h1>
          <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
            We combine proven conversion frameworks with agency-level design to
            deliver results that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 lg:gap-9">
          {whyBusinessTrustCard.map((i, indx) => (
            <motion.div
              initial={i.animation.initial}
              whileInView={i.animation.animate}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
              key={indx}
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

              <span className="text-[48px]  text-primary">{i.icon}</span>
              <div className="mt-[36px]">
                <p className="manrope-med-16 text-text-light mb-2.5">
                  {i.title}
                </p>
                <p className="custom-text-14 text-secondary-light">
                  {i.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessTrust;
