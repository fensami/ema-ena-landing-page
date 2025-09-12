import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiRocketLaunch } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import {
  PiArrowsClockwiseBold,
  PiCurrencyDollarBold,
  PiTrophy,
} from "react-icons/pi";
//  Form Idea Card
export const formIdeaCard = [
  {
    icon: <PiRocketLaunch />,
    name: "Book Your Project",
    designations: "Fill out a short form and we'll get started immediately.",
    duration: "Day 1",
    animation: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6 },
    },
  },
  {
    icon: <IoColorPaletteOutline />,
    name: "Design & Development",
    designations:
      "Unlimited revisions until perfect. You're involved every step.",
    duration: "Day 2-4",
    animation: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    },
  },
  {
    icon: <HiOutlineLightningBolt />,
    name: "Launch",
    designations:
      "Fully deployed on your hosting and ready to convert visitors.",
    duration: "Day 5",
    animation: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6 },
    },
  },
];
// Hero Top Shadow
export const heroTopShadow =
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757518214/hero_top_shadow_upyl9i.png";

export const logo =
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757518241/Logo_jbnlqu.svg";
//  Hero Data
export const heroData = [
  { icon: <FaRegUser />, title: "Your name", type: "text" },
  { icon: <HiOutlineMailOpen />, title: "Email Address", type: "email" },
  { icon: <BsTelephone />, title: "Phone Number", type: "number" },
];
//  Contact Button
export const contactBottom = [
  { icon: <MdOutlineLock />, title: "SSL secure" },
  { icon: <IoMdCheckmark />, title: "Money-back guaranteed" },
  { icon: <FaRegStar />, title: "Satisfaction guaranteed" },
];

//  Auto Scroll Images
export const autoScrollImages = [
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757646466/image_2_kpdiyk.png",
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757648271/image_17_x580uc.png",
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757648133/image_19_1_gqyi88.png",
];

//  Why Business Trust Card
export const whyBusinessTrustCard = [
  {
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    icon: <PiRocketLaunch />,
    animation: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
  },
  {
    title: "Agency Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag.",
    icon: <IoColorPaletteOutline />,
    animation: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
  },
  {
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
    icon: <HiOutlineLightningBolt />,
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, just clear value. What you see is what you pay.",
    icon: <PiCurrencyDollarBold />,
    animation: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
  },
  {
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
    icon: <PiArrowsClockwiseBold />,
    animation: {
      initial: { opacity: 0, rotate: -10, y: 100 },
      animate: { opacity: 1, rotate: 0, y: 0 },
    },
  },
  {
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
    icon: <PiTrophy />,
    animation: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  },
];

type ProjectShowcase = {
  name: string;
  point1: string;
  point2: string;
  image: string;
};
// Project Show Case Data
export const projectShowcaseData: ProjectShowcase[] = [
  {
    name: "Velora",
    point1: "20% high conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527740/section1_moduut.png",
  },
  {
    name: "Flow Point",
    point1: "20% higher conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527728/section2_hnhjj4.png",
  },
  {
    name: "GrowthSummit",
    point1: "20% higher conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527728/section3_ln5ut6.png",
  },
  {
    name: "Velora",
    point1: "20% high conversion than average in first week",
    point2: "Clean and modern design with clear CTA",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757527740/section1_moduut.png",
  },
];

//  Plans Data
export const plans = [
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
    animation: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      delay: 0,
    },
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
    animation: {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      delay: 0.1,
    },
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
    animation: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      delay: 0.2,
    },
  },
];

// Client Saying Data
export const clientSayingData = [
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
      "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before The Delivered.",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
  {
    name: "Amanda Rodriguez",
    title: "E-Commerce Owner",
    description:
      "Best investment for my business. The ROI was immediate and substantial. Will definitely order again The Delivered.",
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
  {
    name: "Amanda Rodriguez",
    title: "E-Commerce Owner",
    description:
      "Best investment for my business. The ROI was immediate and substantial. Will definitely order again The Delivered",
    image:
      "https://res.cloudinary.com/dbbemyywc/image/upload/v1757563107/client4_kfl5jp.png",
  },
];

// Got Questions Data
export const gotQuestionsData = [
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

export const footerImage =
  "https://res.cloudinary.com/dbbemyywc/image/upload/v1757517793/FooterLogo_czdxa4.svg";
