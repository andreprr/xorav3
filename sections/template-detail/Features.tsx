"use client";

import {
  Smartphone,
  Search,
  Gauge,
  ShieldCheck,
  Sparkles,
  Code2,
} from "lucide-react";

import FadeIn from "@/components/animation/FadeIn";

const features = [
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Tampilan sempurna di Desktop, Tablet, hingga Mobile.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Struktur website sudah ramah mesin pencari Google.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Optimasi loading cepat dengan Next.js App Router.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Code",
    description:
      "Struktur project rapi dan mudah dikembangkan.",
  },
  {
    icon: Sparkles,
    title: "Modern Animation",
    description:
      "Micro interaction halus menggunakan Framer Motion.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Menggunakan TypeScript & Tailwind CSS dengan best practice.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">

              Features

            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

              Everything You Need

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Template dibuat menggunakan teknologi modern
              dengan performa tinggi dan mudah dikembangkan.

            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <FadeIn key={feature.title} delay={index * 0.1}>

                <div className="group rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {feature.title}

                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">

                    {feature.description}

                  </p>

                </div>

              </FadeIn>

            );

          })}

        </div>

      </div>

    </section>
  );
}