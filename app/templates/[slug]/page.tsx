import { notFound } from "next/navigation";

// Contractor Imports
import Navbar1 from "@/sections/template-demo/contractor/Navbar1";
import Hero1 from "@/sections/template-demo/contractor/Hero1";

// Coffee Shop Imports
import About from "@/sections/template-demo/coffee-shop/About";
import Navbar from "@/sections/template-demo/coffee-shop/Navbar";
import Hero from "@/sections/template-demo/coffee-shop/Hero";
import PopularMenu from "@/sections/template-demo/coffee-shop/PopularMenu";
import OrderPreview from "@/sections/template-demo/coffee-shop/OrderPreview";
import OrderFlow from "@/sections/template-demo/coffee-shop/OrderFlow";
import Features from "@/sections/template-demo/coffee-shop/Features";
import Customization from "@/sections/template-demo/coffee-shop/Customization";
import CTA from "@/sections/template-demo/coffee-shop/CTA";

// Startup Launch Imports
import StartupNavbar from "@/sections/template-demo/startup-launch/Navbar";
import StartupHero from "@/sections/template-demo/startup-launch/Hero";
import StartupFeatures from "@/sections/template-demo/startup-launch/Features";
import StartupPricing from "@/sections/template-demo/startup-launch/Pricing";
import StartupCTA from "@/sections/template-demo/startup-launch/CTA";

const templates = [
  {
    slug: "brewly",
    title: "Brewly Coffee",
  },
  {
    slug: "contractor",
    title: "Contractor Modern Building",
  },
  {
    slug: "startup-launch",
    title: "Startup Launch",
  },
];

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TemplatePreview({ params }: Props) {
  const { slug } = await params;

  const template = templates.find((item) => item.slug === slug);

  if (!template) {
    notFound();
  }

  // Brewly / Coffee Shop
  if (slug === "brewly") {
    return (
      <main className="bg-[#FAF7F2]">
        <Navbar />
        <Hero />
        <About />
        <PopularMenu />
        <OrderPreview />
        <OrderFlow />
        <Features />
        <Customization />
        <CTA />
      </main>
    );
  }

  // Contractor
  if (slug === "contractor") {
    return (
      <main className="bg-[#FAF7F2]">
        <Navbar1 />
        <Hero1 />
      </main>
    );
  }

  // Startup Launch
  if (slug === "startup-launch") {
    return (
      <main className="min-h-screen bg-slate-950 text-white font-sans">
        <StartupNavbar />
        <StartupHero />
        <StartupFeatures />
        <StartupPricing />
        <StartupCTA />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-black">{template.title}</h1>
    </main>
  );
}