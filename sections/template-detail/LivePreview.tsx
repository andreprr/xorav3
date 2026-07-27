"use client";

import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";

export default function LivePreview() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">

              Live Preview

            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

              Explore Every Section

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Lihat seluruh tampilan template sebelum membeli.
              Semua halaman dibuat responsive, modern,
              cepat, dan siap digunakan untuk bisnis Anda.

            </p>

          </div>

        </FadeIn>

        {/* Desktop */}

        <FadeIn delay={0.2}>

          <div className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

            {/* Browser */}

            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-6 py-4">

              <span className="h-3 w-3 rounded-full bg-red-400" />

              <span className="h-3 w-3 rounded-full bg-yellow-400" />

              <span className="h-3 w-3 rounded-full bg-green-400" />

            </div>

            <div className="relative aspect-[16/9]">

              <Image
                src="/templates/nova/desktop.webp"
                alt="Desktop Preview"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </FadeIn>

        {/* Tablet & Mobile */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <FadeIn delay={0.3}>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">

              <div className="border-b border-slate-200 bg-slate-100 px-6 py-4 font-semibold">

                Tablet Preview

              </div>

              <div className="relative aspect-[4/3]">

                <Image
                  src="/templates/nova/tablet.webp"
                  alt="Tablet Preview"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </FadeIn>

          <FadeIn delay={0.4}>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">

              <div className="border-b border-slate-200 bg-slate-100 px-6 py-4 font-semibold">

                Mobile Preview

              </div>

              <div className="relative aspect-[9/16]">

                <Image
                  src="/templates/nova/mobile.webp"
                  alt="Mobile Preview"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}