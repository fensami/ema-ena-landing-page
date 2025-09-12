import ButtonPrimary from "@/components/utils/ButtonPrimary/ButtonPrimary";
import { BsLightningCharge } from "react-icons/bs";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <div className=" text-white relative max-w-[1200px] mx-auto mt-12 px-4">
      {/* Limited Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-4  text-[#F5F5F5] px-4 py-2 rounded-full  "
      >
        <BsLightningCharge className="text-4xl text-primary" />
        <div>
          <h2 className="text-2xl leading-[26px] font-bold mb-2">
            Limited Availability
          </h2>
          <p className="text-[14px] leading-[18px] font-normal">
            We only onboard 5 new clients per month. 2 spots left for this month
            — secure yours today.
          </p>
        </div>
      </motion.div>

      {/* Offer Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=" text-center mt-10 bg-[#192420] py-12 rounded-2xl"
      >
        <h2 className="text-3xl sm:text-4xl xl:text-5xl xl:leading-[72px] font-medium  text-[#F5F5F5] font-primary">
          Special Offer For Early Clients
        </h2>
        <p className="text-[#F5F5F5]">
          Get 10% OFF + Free Hosting Setup when you book this week.
        </p>

        {/* Claim Button */}
        <div className="max-w-[266px] mx-auto mt-12">
          <ButtonPrimary text="Claim my 10% discount" />
        </div>
      </motion.div>
    </div>
  );
};

export default SpecialOffer;
