"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { autoScrollImages } from "@/components/utils/ImportantData/ImportantData";

const AutoScrolll = () => {
  return (
    <section className="bg-[#151E1B]">
      <div className="max-w-[1440px] mx-auto border">
        <Swiper
          modules={[Autoplay]}
          freeMode={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 3000, // ✅ 3 seconds between slides
            disableOnInteraction: false, // ✅ keep autoplay even if user swipes
          }}
          loop={true} // ✅ Infinite loop
          speed={800} // ✅ Smooth transition (in ms)
          breakpoints={{
            680: { slidesPerView: 2 },
          }}
          className="mySwiper h-[470px]" // ✅ Fixed height
        >
          {autoScrollImages.map((src, index) => (
            <SwiperSlide key={index} className="relative">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AutoScrolll;
