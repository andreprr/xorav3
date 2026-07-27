import Hero from "@/sections/pricing/Hero";
import PricingCards from "@/sections/pricing/PricingCards";
import Comparison from "@/sections/pricing/Comparison";
import FAQ from "@/sections/pricing/FAQ";
import CTA from "@/sections/pricing/CTA";

export const metadata = {
  title: "Pricing",

  description:
    "Paket harga jasa pembuatan website XORA.",

  alternates: {
    canonical: "https://xora.id/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="bg-white">
      <Hero />
      <PricingCards />
      <Comparison />
      <FAQ />
      <CTA />
    </main>
  );
}