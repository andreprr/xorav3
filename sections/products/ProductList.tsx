import { Globe, Boxes, MonitorCog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Website profesional untuk membangun kredibilitas dan meningkatkan penjualan.",
    products: [
      "Company Profile",
      "Landing Page",
      "Website Catalog",
      "Custom Website",
    ],
  },
  {
    icon: Boxes,
    title: "Business System",
    description:
      "Digitalisasi operasional bisnis agar lebih cepat, efisien dan terukur.",
    products: [
      "Stock Management",
      "Inventory System",
      "Point of Sale (POS)",
      "Dashboard Admin",
      "Sales Management",
      "Reporting System",
    ],
  },
  {
    icon: MonitorCog,
    title: "Custom Development",
    description:
      "Membangun sistem berbasis web sesuai kebutuhan bisnis dan workflow perusahaan.",
    products: [
      "Custom Dashboard",
      "Internal System",
      "API Integration",
      "ERP Sederhana",
    ],
  },
];

export default function ProductList() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Digital Products
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Solusi Digital yang
            <br />
            Kami Bangun
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seluruh layanan XORA dirancang untuk membantu UMKM dan Startup
            membangun fondasi digital yang modern, scalable, dan mudah
            dikembangkan di masa depan.
          </p>
        </div>

        <div className="mt-20 space-y-8">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-3xl border bg-white p-10 shadow-sm"
              >
                <div className="grid gap-12 lg:grid-cols-[320px_1fr]">

                  {/* Left */}
                  <div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      {category.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {category.description}
                    </p>

                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="mt-8"
                      >
                        Konsultasi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                  </div>

                  {/* Right */}

                  <div className="grid gap-5 md:grid-cols-2">

                    {category.products.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 p-6 transition hover:border-black hover:shadow-lg"
                      >
                        <h4 className="text-xl font-semibold">
                          {item}
                        </h4>

                        <p className="mt-3 text-slate-500">
                          Solusi digital profesional yang dapat disesuaikan
                          dengan kebutuhan bisnis Anda.
                        </p>
                      </div>
                    ))}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}