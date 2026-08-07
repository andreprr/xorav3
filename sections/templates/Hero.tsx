"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import templates from "./assets/templates.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

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
              <Button variant="outline" size="lg">
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
        <div className="relative flex-1">
          <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={templates}
                alt="Website Templates"
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Shine Effect */}
              <div
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-full
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}