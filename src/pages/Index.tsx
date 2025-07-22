
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { DebtIntelligenceChat } from "@/components/DebtIntelligenceChat"
import { StatsSection } from "@/components/StatsSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { TestimonialSection } from "@/components/TestimonialSection"
import { PricingSection } from "@/components/PricingSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen font-primary">
      <Navigation />
      <HeroSection />
      
      {/* Market Intelligence Platform */}
      <section className="py-20 bg-white">
        <DebtIntelligenceChat />
      </section>
      <StatsSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
