import Hero from "@/sections/products/Hero";
import ProductList from "@/sections/products/ProductList";
import FAQ from "@/sections/products/FAQ";
import CTA from "@/sections/products/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",

  description:
    "Berbagai layanan pembuatan website profesional dari XORA.",

  alternates: {
    canonical: "https://xora.id/products",
  },
};
export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProductList />
      <FAQ />
      <CTA />
    </main>
  );
}