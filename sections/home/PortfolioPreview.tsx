import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HoverCard from "@/components/animation/HoverCard";

const portfolios = [
  {
    title: "Website Company Profile",
    category: "Corporate Website",
  },
  {
    title: "Landing Page Produk",
    category: "Landing Page",
  },
  {
    title: "Dashboard Sistem Bisnis",
    category: "Business System",
  },
];

export default function PortfolioPreview() {
  return (
    <HoverCard>
    <section id="portfolio" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-end justify-between">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              Project Terbaru Kami
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="flex items-center gap-2 font-semibold"
          >
            Lihat Semua
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {portfolios.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/10] bg-slate-200" />

              <div className="p-8">

                <p className="text-sm uppercase tracking-wider text-slate-500">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
    </HoverCard>
  );
}