"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projectShowcaseData } from "@/components/utils/ImportantData/ImportantData";

const CaseStudies = () => {
  return (
    <section className="bg-[#0A0F0D]">
      <div className="flex flex-col justify-center items-center gap-y-[48px] py-[100px] md:py-[120px] px-4 ">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-title text-center"
        >
          <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5]">
            Case Studies
          </h1>
          <p className="text-gray-400 md:mb-8 text-[16px] font-normal leading-6">
            See the designs that delivered results
          </p>
        </motion.div>

        {/* ✅ Replace flex layout with Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000, // ✅ 3 seconds between slides
            disableOnInteraction: false, // ✅ keep autoplay even if user swipes
          }}
          breakpoints={{
            680: { slidesPerView: 2 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {projectShowcaseData.map((i, index) => (
            <SwiperSlide key={index}>
              {/* Make slide content flex column and fill height */}
              <div className="flex flex-col items-center gap-y-1 p-3 border-2 border-[#2A3C36] rounded-[12px] bg-background h-full">
                {/* Image wrapper */}
                <div className="w-full relative aspect-[560/372] overflow-hidden rounded-[8px]">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text content grows to match tallest slide */}
                <div className="flex flex-wrap flex-1 justify-between gap-y-2 w-full p-3">
                  <p className="font-primary text-[#F5F5F5] text-2xl font-bold">
                    {i.name}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground">
                      <FaCheck className="text-primary" />
                      <p className="custom-text-12">{i.point1}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground">
                      <FaCheck className="text-primary" />
                      <p className="custom-text-12">{i.point2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ButtonPrimary text="I want similar results" />
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
