import Navbar1 from "@/sections/template-demo/contractor/Navbar1";
import Hero1 from "@/sections/template-demo/contractor/Hero1";
// Coffee Shop
import { notFound } from "next/navigation";
import About from "@/sections/template-demo/coffee-shop/About";
import Navbar from "@/sections/template-demo/coffee-shop/Navbar";
import Hero from "@/sections/template-demo/coffee-shop/Hero";
import PopularMenu from "@/sections/template-demo/coffee-shop/PopularMenu";
import OrderPreview from "@/sections/template-demo/coffee-shop/OrderPreview";
import OrderFlow from "@/sections/template-demo/coffee-shop/OrderFlow";
import Features from "@/sections/template-demo/coffee-shop/Features";
import Customization from "@/sections/template-demo/coffee-shop/Customization";
import CTA from "@/sections/template-demo/coffee-shop/CTA";

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

export default async function TemplatePreview({
  params,
}: Props) {

  const { slug } = await params;

  const template = templates.find(
    (item) => item.slug === slug
  );

  if (!template) {
    notFound();
  }

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
  if (slug === "contractor") {
    return (
      <main className="bg-[#FAF7F2]">
        <Navbar />
        <Hero1 />

      </main>
    );
  }   
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-black">{template.title}</h1>
    </main>
  );
  
}