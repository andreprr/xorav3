import Hero from "@/app/templates/Hero";
import TemplateCategories from "@/app/templates/TemplateCategories";
import TemplateGallery from "@/app/templates/TemplateGallery";
import WhyTemplates from "@/app/templates/WhyTemplates";
import FAQ from "@/app/templates/FAQ";
import CTA from "@/app/templates/CTA";

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