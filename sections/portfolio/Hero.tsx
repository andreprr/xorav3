"use client";

import Image from "next/image";
// Import asset gambar xora services
import xoraServicesImg from "@/sections/portfolio/assets/xora services.webp";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        bg-slate-950
        text-white
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-center
        px-6 sm:px-12 lg:px-20
        py-16 sm:py-24
      "
    >
      {/* ── BACKGROUND IMAGE SHOWCASE DENGAN OVERLAY ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={xoraServicesImg}
          alt="XORA Services Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay untuk Menjaga Contras & Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center">
        
        {/* ── 1. GIANT TYPOGRAPHY "Portfolio" WITH GOLD GRADIENT ── */}
        <div className="w-full">
          <h1
            className="
              font-sans
              font-black
              tracking-[-0.05em]
              leading-none
              text-[clamp(4.8rem,16vw,14.5rem)]
              bg-gradient-to-r
              from-white
              via-[#EAB308]
              to-[#D08E12]
              bg-clip-text
              text-transparent
              select-none
              drop-shadow-lg
            "
          >
            Portfolio
          </h1>
        </div>

        {/* ── 2. STATS SECTION (20+ Project & 100% Custom Built) ── */}
        <div className="mt-8 sm:mt-12 lg:mt-14 flex items-center gap-10 sm:gap-16">
          {/* Stat 1 */}
          <div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              20+
            </h2>
            <p className="mt-1 font-sans font-bold text-sm sm:text-base text-slate-300">
              Project
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              100%
            </h2>
            <p className="mt-1 font-sans font-bold text-sm sm:text-base text-slate-300">
              Custom Built
            </p>
          </div>
        </div>

        {/* ── 3. DESCRIPTION PARAGRAPH ── */}
        <div className="mt-8 sm:mt-10 max-w-xl">
          <p className="font-sans font-medium text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Kami membantu bisnis membangun website dan sistem digital yang
            modern, cepat, scalable, dan berorientasi pada pertumbuhan bisnis.
          </p>
        </div>

      </div>
    </section>
  );
}