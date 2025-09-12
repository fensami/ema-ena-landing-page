"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { clientSayingData } from "@/components/utils/ImportantData/ImportantData";

const ClientSaying = () => {
  return (
    <div className="py-[50px] md:py-[120px] px-[16px] bg-[#151E1B]">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="section-title text-center mb-11"
      >
        <h1 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium mb-2 font-primary text-[#F5F5F5]">
          What Our Clients Are Saying
          <span className="text-primary"> About Us</span>
        </h1>
        <p className="text-gray-400 mb-8 text-[16px] font-normal leading-6">
          Real feedback from real businesses who have seen real results.
        </p>
      </motion.div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          868: { slidesPerView: 3 },
          1224: { slidesPerView: 4 },
        }}
        className="max-w-[1200px] mx-auto"
      >
        {clientSayingData.map((clientdata, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="p-6 flex flex-col items-start justify-between bg-card rounded-[12px]">
              <div>
                <ul className="flex items-center gap-x-2 text-primary">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                </ul>
                <blockquote className="custom-text-14 text-text-light mt-6">
                  {clientdata.description}
                </blockquote>
              </div>
              <div className="flex items-center justify-start gap-x-3 mt-9">
                <Image
                  src={clientdata.image}
                  height={36}
                  width={36}
                  alt="img"
                  className="object-cover rounded-full"
                />
                <div>
                  <p className="text-text-light mb-[2px]">{clientdata.name}</p>
                  <p className="custom-text-12 text-text-light">
                    {clientdata.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSaying;
