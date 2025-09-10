import CaseStudies from "@/components/pages/HomePage/CaseStudies/CaseStudies";
import HeroSection from "@/components/pages/HomePage/HeroSection/HeroSection";
import WhyBusinessTrust from "@/components/pages/HomePage/WhyBusinessTrust/WhyBusinessTrust";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyBusinessTrust />
      <CaseStudies />
      <Footer />
    </div>
  );
}
