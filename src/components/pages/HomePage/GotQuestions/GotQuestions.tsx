import { IoEllipse } from "react-icons/io5";
const gotQuestionsData = [
  {
    title: "How long does it take?",
    description:
      "5 days from start to finish - design, development, and deployment included.",
  },
  {
    title: "Do you provide revisions?",
    description:
      "Yes, unlimited revisions until you're 100% satisfied with the final result.",
  },
  {
    title: "What's the payment process?",
    description:
      "50% upfront to get started, 50% after final delivery and your approval.",
  },
  {
    title: "Can you deploy on my hosting?",
    description:
      "Absolutely! Deployment is included in every package, on your hosting or ours.",
  },
  {
    title: "Why are your prices so affordable compared to agencies?",
    description:
      "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
  },
];

const GotQuestions = () => {
  return (
    <>
      <div className="py-[64px] md:py-[120px] bg-[#151E1B] ">
        <p
          data-aos="fade-up"
          data-aos-duration={300}
          className="manrope-med-48 mb-9 mx-auto text-center"
        >
          Got Questions<span className="text-primary">? </span>We have Got The
          Answers
        </p>
        <div className="flex items-center flex-col md:px-[210px] px-[16px] ">
          {gotQuestionsData.map((i, indx) => (
            <div
              key={indx}
              className="p-6 rounded-[12px] bg-card w-full md:mb-6 mb-3 border border-transparent hover:border-[#1FFFA5] 
                         transition-all duration-1000 ease-in-out
                         relative overflow-hidden group"
            >
              <span className="text-primary">
                <IoEllipse />
              </span>
              {/* <Image
                className="mb-6"
                src={images.ellipse}
                width={12}
                height={12}
                alt="img"
              /> */}
              <p className="manrope-bold-24 mb-6">{i.title}</p>
              <p className="general-reg-18">{i.description}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#1FFFA5]/20 to-transparent 
                              group-hover:h-full transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GotQuestions;
