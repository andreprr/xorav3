import Hero from "@/sections/portfolio/Hero";
import FeaturedProjects from "@/sections/portfolio/FeaturedProjects";
import ProjectGrid from "@/sections/portfolio/ProjectGrid";
import Process from "@/sections/portfolio/Process";
import Testimonials from "@/sections/portfolio/Testimonials";
import CTA from "@/sections/portfolio/CTA";

export const metadata = {
  title: "Portfolio",

  description:
    "Portfolio website premium yang telah dibuat oleh XORA.",

  alternates: {
    canonical: "https://xora.id/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ProjectGrid />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}