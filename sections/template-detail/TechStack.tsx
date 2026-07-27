"use client";

import {
  Code2,
  Globe,
  Palette,
  Zap,
  ShieldCheck,
  Smartphone,
  Rocket,
  Database,
} from "lucide-react";

import FadeIn from "@/components/animation/FadeIn";

const stacks = [
  {
    icon: Rocket,
    title: "Next.js 15",
    desc: "App Router & Server Components",
  },
  {
    icon: Code2,
    title: "TypeScript",
    desc: "Type Safe Development",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    desc: "Utility First Styling",
  },
  {
    icon: Zap,
    title: "Framer Motion",
    desc: "Smooth Animation",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Desktop • Tablet • Mobile",
  },
  {
    icon: ShieldCheck,
    title: "SEO Ready",
    desc: "Optimized for Google",
  },
  {
    icon: Globe,
    title: "Deploy Ready",
    desc: "Vercel Compatible",
  },
  {
    icon: Database,
    title: "Scalable",
    desc: "Easy to Extend",
  },
];

export default function TechStack() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Technology
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
              Built With Modern Stack
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Menggunakan teknologi modern untuk memastikan performa,
              keamanan, dan kemudahan pengembangan di masa depan.
            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stacks.map((item, index) => {

            const Icon = item.icon;

            return (

              <FadeIn
                key={item.title}
                delay={index * 0.08}
              >

                <div className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

                    <Icon className="h-8 w-8 text-blue-600" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    {item.desc}

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