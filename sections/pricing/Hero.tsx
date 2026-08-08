"use client";

import { useRef } from "react";
import { Staatliches } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Header Pricing
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // ── ANIMASI ENTRANCE (GSAP) ──
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animasi Judul Utama
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }
        );
      }

      // Animasi Paragraf Deskripsi
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          "-=0.5"
        );
      }

      // Animasi Banner Merah Bawah
      if (bannerRef.current) {
        tl.fromTo(
          bannerRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-[#E52323]
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        pt-12 sm:pt-16 lg:pt-20
      "
    >
      {/* ── 1. MAIN CONTENT CONTAINER (UPPER) ── */}
      <div className="w-full max-w-[1650px] mx-auto px-6 sm:px-12 lg:px-16 flex-grow flex flex-col justify-center">
        
        {/* GIANT TYPOGRAPHY TITLE */}
        <h1
          ref={titleRef}
          className={`
            ${staatliches.className}
            uppercase
            tracking-tight
            leading-[0.82]
            text-[clamp(4.2rem,14vw,12.5rem)]
            text-[#E52323]
            max-w-7xl
          `}
        >
          <span className="block">XORA</span>
          <span className="block whitespace-nowrap">PACKAGE PRICING</span>
        </h1>

        {/* DESCRIPTION PARAGRAPH */}
        <motion.p
          ref={descRef}
          className="
            mt-6 sm:mt-8 lg:mt-10
            font-sans
            font-semibold
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            text-[#E52323]
            max-w-xl
          "
        >
          Pilih paket website yang sesuai dengan kebutuhan bisnis Anda.
          Transparan, tanpa biaya tersembunyi, dan siap dikembangkan
          seiring pertumbuhan perusahaan.
        </motion.p>

      </div>

      {/* ── 2. BOTTOM CURVED RED BANNER (PERSIS REFERENSI) ── */}
      <div
        ref={bannerRef}
        className="
          w-full
          h-28 sm:h-36 lg:h-44
          bg-[#E52323]
          rounded-tl-[2.5rem] sm:rounded-tl-[4rem] lg:rounded-tl-[5rem]
          mt-12 sm:mt-16
        "
      />
    </section>
  );
}