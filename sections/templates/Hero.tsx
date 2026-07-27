"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between gap-20 px-6 py-24">

        {/* Left */}
        <div className="max-w-2xl">

          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Website Templates
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Pilih Template
            <br />
            Website
            <br />
            Siap Pakai
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Koleksi template modern untuk Company Profile, Landing Page,
            Portfolio, hingga Website Bisnis yang siap disesuaikan dengan
            identitas brand Anda.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a href="#template-gallery">
              <Button size="lg">
                Lihat Template
              </Button>
            </a>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Konsultasi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

          <div className="mt-16 flex gap-12">

            <div>
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Premium Templates
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-slate-500">
                Responsive
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Fast</h3>
              <p className="mt-2 text-sm text-slate-500">
                Development
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1">

          <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-slate-100 shadow-xl" />

        </div>

      </div>
    </section>
  );
}