import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeSolutionsSection } from "@/components/sections/home-solutions-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <SiteHeader />
      <HeroSection />
      <HomeSolutionsSection />
      <ProjectsSection />
      <PainPointsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
