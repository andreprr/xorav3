import Hero from "@/sections/templates/Hero";
import TemplateCategories from "@/sections/templates/TemplateCategories";
import TemplateGallery from "@/sections/templates/TemplateGallery";
import WhyTemplates from "@/sections/templates/WhyTemplates";
import FAQ from "@/sections/templates/FAQ";
import CTA from "@/sections/templates/CTA";

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      <Hero />
      <TemplateCategories />
      <TemplateGallery />
      <WhyTemplates />
      <FAQ />
      <CTA />
    </main>
  );
}