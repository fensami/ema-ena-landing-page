"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const clientSayingData = [
  {
    name: "Sarah Johnson",
    title: "SaaS Founder",
    description:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
  {
    name: "Mike Chen",
    title: "Fitness Coach",
    description:
      "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
  {
    name: "Amanda Rodriguez",
    title: "E-Commerce Owner",
    description:
      "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
  {
    name: "David Lee",
    title: "SaaS Founder",
    description:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
];
const ClientSaying = () => {
  return (
    <div className="py-[64px]  md:py-[120px] pr-[16px] md:pr-0 bg-[#151E1B]">
      <p className="md:text-left text-center manrope-med-48 mb-2 pl-[16px] md:pl-[120px]">
        What Our Clients Are Saying
        <span className="text-primary"> About Us</span>
      </p>
      <p className="md:text-left text-center general-reg-16 mb-12 pl-[16px] md:pl-[120px]">
        Real feedback from real businesses who have seen real results.
      </p>

      {/* Drag Container */}
      <motion.div
        className="cursor-grab overflow-hidden pl-[16px] md:pl-[120px]"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          className="flex gap-6"
        >
          {clientSayingData.map((clientdata, index) => (
            <div
              key={index}
              className="min-w-[280px] p-6 flex flex-col items-start justify-between bg-card rounded-[12px] "
            >
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
                <blockquote className="general-reg-14 text-text-light mt-6">
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
                  <p className="general-med-16 text-text-light mb-[2px]">
                    {clientdata.name}
                  </p>
                  <p className="general-reg-12 text-text-light">
                    {clientdata.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientSaying;
