import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EnergyServiceSection } from "@/components/sections/energy-service-section";
import { EnergyVisualSection } from "@/components/sections/energy-visual-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnerDeliverySection } from "@/components/sections/localization-section";
import { MicrogridSection } from "@/components/sections/microgrid-section";
import { MobilitySection } from "@/components/sections/mobility-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <SiteHeader />
      <HeroSection />
      <EnergyVisualSection />
      <SolutionsSection />
      <PainPointsSection />
      <EnergyServiceSection />
      <MicrogridSection />
      <PartnerDeliverySection />
      <MobilitySection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
