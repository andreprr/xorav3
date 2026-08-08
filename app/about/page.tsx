import Hero from "@/sections/about/Hero";
import Story from "@/sections/about/Story";
import Values from "@/sections/about/Values";
import TechStack from "@/sections/about/TechStack";
import CTA from "@/sections/about/CTA";
import VisiMisi from "@/sections/about/VisiMisi";
import Owner from "@/sections/about/owner";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <VisiMisi />
      <Story />
      <Owner />
      <Values />
      <TechStack />
      <CTA />
    </main>
  );
}