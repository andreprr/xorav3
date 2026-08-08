"use client";

import { useRef } from "react";
import { Staatliches } from "next/font/google";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Header Pricing
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// Premium Easing
const cubicEase = [0.16, 1, 0.3, 1] as const;

// Container untuk stagger baris judul
const titleContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.15 },
  },
};

// Baris judul: masuk dengan scale/fade + elastic spring
const titleLineVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.45, duration: 1 },
  },
};

// Paragraf deskripsi: fade + slide up dengan premium easing
const descVariant: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: cubicEase, delay: 0.6 },
  },
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  // ── ANIMASI BANNER MERAH BAWAH: SLIDE-UP SEKALI SAAT MASUK VIEWPORT ──
  useGSAP(
    () => {
      if (!containerRef.current || !bannerRef.current) return;

      gsap.fromTo(
        bannerRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
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
        <motion.h1
          variants={titleContainerVariant}
          initial="hidden"
          animate="visible"
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
          <motion.span
            variants={titleLineVariant}
            className="block will-change-transform"
          >
            XORA
          </motion.span>
          <motion.span
            variants={titleLineVariant}
            className="block whitespace-nowrap will-change-transform"
          >
            PACKAGE PRICING
          </motion.span>
        </motion.h1>

        {/* DESCRIPTION PARAGRAPH */}
        <motion.p
          variants={descVariant}
          initial="hidden"
          animate="visible"
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
          will-change-transform
        "
      />
    </section>
  );
}
