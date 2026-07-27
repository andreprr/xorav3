import Hero from "@/sections/about/Hero";
import Story from "@/sections/about/Story";
import WhyChoose from "@/sections/about/WhyChoose";
import Values from "@/sections/about/Values";
import TechStack from "@/sections/about/TechStack";
import CTA from "@/sections/about/CTA";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Story />
      <WhyChoose />
      <Values />
      <TechStack />
      <CTA />
    </main>
  );
}