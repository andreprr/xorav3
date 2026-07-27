import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "Mulai 2 Juta",
    features: [
      "Company Profile",
      "Responsive Design",
      "SEO Basic",
      "Free Domain*",
    ],
  },
  {
    title: "Business",
    price: "Mulai 5 Juta",
    features: [
      "Landing Page / Company",
      "CMS Dashboard",
      "Optimasi SEO",
      "Support 3 Bulan",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Business System",
      "Dashboard Admin",
      "API Integration",
      "Maintenance",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="bg-[#FAFAF8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Pricing
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Pilih Paket Sesuai Kebutuhan
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Harga transparan dengan solusi yang dapat disesuaikan untuk bisnis Anda.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {plan.title}
              </h3>

              <p className="mt-3 text-3xl font-bold">
                {plan.price}
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 font-semibold"
          >
            Lihat Selengkapnya
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}