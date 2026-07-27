"use client";

import Link from "next/link";
import { ArrowRight, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

type Template = {
  name: string;
  category: string;
  description: string;
  oldPrice: number;
  price: number;
};

export default function Hero({
  template,
}: {
  template: Template;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">

      {/* Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}

        <FadeIn>

          <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">

            {template.category}

          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-7xl">

            {template.name}

          </h1>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            {template.description}

          </p>

          {/* Price */}

          <div className="mt-10 flex items-center gap-4">

            <span className="text-2xl text-slate-400 line-through">

              Rp {template.oldPrice.toLocaleString("id-ID")}

            </span>

            <span className="text-5xl font-black text-blue-600">

              Rp {template.price.toLocaleString("id-ID")}

            </span>

          </div>

          {/* Feature */}

          <div className="mt-10 grid gap-3">

            {[
              "Source Code Included",
              "Responsive Design",
              "SEO Ready",
              "Next.js + Tailwind CSS",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">

                <CheckCircle2 className="h-5 w-5 text-blue-600" />

                <span className="text-slate-700">

                  {item}

                </span>

              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">

            <Button size="lg">

              Buy Template

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

            <Link href="/contact">

              <Button variant="outline" size="lg">

                Custom Website

              </Button>

            </Link>

            <Button variant="ghost" size="lg">

              <Eye className="mr-2 h-4 w-4" />

              Live Preview

            </Button>

          </div>

        </FadeIn>

        {/* RIGHT */}

        <FadeIn delay={0.2}>

          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="mb-5 flex gap-2">

              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">

              <span className="text-xl font-bold text-slate-400">

                Website Preview

              </span>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}