import AutoScrolll from "@/components/pages/HomePage/AutoScrolll/AutoScrolll";
import CaseStudies from "@/components/pages/HomePage/CaseStudies/CaseStudies";
import ClientSaying from "@/components/pages/HomePage/ClientSaying/ClientSaying";
import FromIdeaToLive from "@/components/pages/HomePage/FromIdeaToLive/FromIdeaToLive";
import GotQuestions from "@/components/pages/HomePage/GotQuestions/GotQuestions";
import HeroSection from "@/components/pages/HomePage/HeroSection/HeroSection";
import PricingPlan from "@/components/pages/HomePage/PricingPlan/PricingPlan";
import ReadyToTurn from "@/components/pages/HomePage/ReadyToTurn/ReadyToTurn";
import WhyBusinessTrust from "@/components/pages/HomePage/WhyBusinessTrust/WhyBusinessTrust";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AutoScrolll />
      <WhyBusinessTrust />
      <CaseStudies />
      <PricingPlan />
      <FromIdeaToLive />
      <ClientSaying />
      <GotQuestions />
      <ReadyToTurn />
      <Footer />
    </div>
  );
}
