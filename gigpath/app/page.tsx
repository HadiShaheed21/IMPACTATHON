import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import CoreInsight from "@/components/sections/CoreInsight";
import HowItWorks from "@/components/sections/HowItWorks";
import SkillPathways from "@/components/sections/SkillPathways";
import CareerRoadmap from "@/components/sections/CareerRoadmap";
import RolesReady from "@/components/sections/RolesReady";
import Community from "@/components/sections/Community";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <CoreInsight />
      <HowItWorks />
      <SkillPathways />
      <CareerRoadmap />
      <RolesReady />
      <Community />
      <WhyDifferent />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
