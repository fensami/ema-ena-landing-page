import { div, section } from "motion/react-client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoEllipse } from "react-icons/io5";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
const plans = [
  {
    name: "Basic",
    price: 200,
    description: "Perfect for solopreneurs",
    features: [
      "1 Landing Page (Design + Development)",
      "Hosting Deployment",
      "5-Day Delivery",
      "Basic Support",
      "5-Day Delivery",
    ],
    mostPopular: false,
  },
  {
    name: "Standard",
    price: 300,
    description: "Best balance of value & features",
    features: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
      "Priority Support",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    price: 500,
    description: "For brands & agencies",
    features: [
      "Everything in Standard",
      "Advanced Animations",
      "Priority Delivery (3 Days)",
      "6 Months Free Support",
      "Performance Optimization",
    ],
    mostPopular: false,
  },
];
const PricingPlan = () => {
  return (
    <section className="bg-[#0A0F0D] py-[80px] md:py-[100px] xl:py-[120px]">
      <div className=" text-white  px-4 max-w-[1200px] mx-auto">
        {/* Section title */}
        <div className="section-title mb-11">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-4 font-primary">
            Simple, Transparent Pricing —{" "}
            <span className="text-primary">Choose Your Plan</span>
          </h1>
          <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[rgb(25,36,32)] p-6 rounded-lg border-1 hover:border-[#1fffa5] border-[#0A0F0D] "
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
            </div>
          ))}
        </div>
      </div>
      <SpecialOffer />
    </section>
  );
};

export default PricingPlan;
