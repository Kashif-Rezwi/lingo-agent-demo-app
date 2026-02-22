import { HeroSection } from "@/components/HeroSection";
import { BrandLogos } from "@/components/BrandLogos";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EcommerceSection } from "@/components/EcommerceSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BottomCTA } from "@/components/BottomCTA";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-white pt-[72px]">
      <HeroSection />
      <BrandLogos />
      <FeaturesSection />
      <EcommerceSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <BottomCTA />
      <SiteFooter />
    </main>
  );
}
