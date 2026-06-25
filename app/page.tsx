import { ContactSection } from "@/components/sections/contact-section";
import { EnergyServiceSection } from "@/components/sections/energy-service-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocalizationSection } from "@/components/sections/localization-section";
import { MicrogridSection } from "@/components/sections/microgrid-section";
import { MobilitySection } from "@/components/sections/mobility-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WhySection } from "@/components/sections/why-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <SiteHeader />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <EnergyServiceSection />
      <MicrogridSection />
      <LocalizationSection />
      <MobilitySection />
      <WhySection />
      <ContactSection />
    </main>
  );
}
