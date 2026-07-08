import FrameBackground from "@/components/background/FrameBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <FrameBackground />
      <div className="relative z-[2] overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
