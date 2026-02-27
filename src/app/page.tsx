import { t } from "../lib/i18n";
import { HeroSection } from "@/components/HeroSection";
import { BrandLogos } from "@/components/BrandLogos";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EcommerceSection } from "@/components/EcommerceSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BottomCTA } from "@/components/BottomCTA";
import { SiteFooter } from "@/components/SiteFooter";
export default function Home() {
  return <main className={t("2b38222fd1b68b13b58d3bba2edbc286e8f13e3421cb63c61769bf353a76434c")}>
      <HeroSection />
      <BrandLogos />
      <FeaturesSection />
      <EcommerceSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <BottomCTA />
      <SiteFooter />
    </main>;
}