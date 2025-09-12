"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoEllipse } from "react-icons/io5";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import { motion } from "framer-motion";
import { plans } from "@/components/utils/ImportantData/ImportantData";

const PricingPlan = () => {
  return (
    <section className="bg-[#0A0F0D] overflow-hidden py-[80px] md:py-[100px] xl:py-[120px]">
      <div className=" text-white  px-4 max-w-[1200px] mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title mb-11"
        >
          <h1 className="text-3xl text-[#F5F5F5] sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary">
            Simple, Transparent Pricing —{" "}
            <span className="text-primary">Choose Your Plan</span>
          </h1>
          <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 ">
          {plans.map((plan, index) => (
            <motion.div
              initial={plan.animation.initial}
              whileInView={plan.animation.animate}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: plan.animation.delay }}
              key={index}
              className="relative bg-[rgb(25,36,32)] p-6 rounded-lg border-2 hover:border-[#1fffa5] border-[#0A0F0D] transition-all duration-400 ease-linear group "
            >
              <div className="flex pb-11 mb-11 justify-between border-b-2 border-[#2A3C36]">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                </div>
                <p className="text-2xl leading-[26px] font-bold mb-4 text-primary">
                  ${plan.price}
                </p>
              </div>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center mb-3 text-[12px] leading-4 font-normal text-[#B2B2B2]"
                  >
                    <span className="text-green-400 mr-3.5">
                      <IoEllipse />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-11">
                <button className="w-full bg-[#003D25] hover:bg-green-700 text-primary py-4 px-8 rounded-lg transition flex items-center justify-between">
                  Start my project
                  <span className="ml-3">
                    <FaArrowRight />
                  </span>
                </button>
              </div>

              {plan.mostPopular ? (
                <span className="absolute top-[-17px] left-4 bg-[rgb(25,36,32)] border-[rgb(25,36,32)] border-2 group-hover:border-[#1FFFA5] px-3 py-1.5 rounded-full transition-all duration-400 ease-linear">
                  Most Popular
                </span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Special Offer */}
      <SpecialOffer />
    </section>
  );
};

export default PricingPlan;
