import Process from "@/sections/home/process/Process";
import Hero from "@/components/home/hero/Hero";
import PricingPreview from "@/sections/home/pricing/PricingPreview";
import Trusted from "@/sections/home/Trusted";
import ProductPreview from "@/sections/home/product/ProductPreview";
import WhyXora from "@/sections/home/whyxora/WhyXora";
import CTA from "@/sections/home/cta/CTA";
import PortfolioPreview from "@/sections/home/portfolio/PortfolioPreview";
import HomepageScrollTimeline from "@/components/animation/HomepageScrollTimeline";
import ProductScrollTimeline from "@/components/animation/ProductScrollTimeline";
export default function Home() {
  return (
    <>
      <HomepageScrollTimeline />
      <ProductScrollTimeline />

      <Hero />
      <ProductPreview />
      <WhyXora />
      <Process />
      <PortfolioPreview />
      <PricingPreview />
      <Trusted />
      <CTA />
    </>
  );
}
