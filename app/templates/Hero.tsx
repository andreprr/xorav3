"use client";

import { motion, Variants } from "framer-motion";
import { Staatliches } from "next/font/google";

// Import Font Staatliches untuk Judul Utama
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// Custom Cubic Bezier Easing
const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Container Stagger (Induk)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// 2. Animasi "TEMPLATES" (Staggered Scale + Fade In)
const titleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: customEase },
  },
};

// 3. Animasi Handwriting "Website" (Scale + Fade + Rotasi Halus)
const accentVariant: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, delay: 0.35, ease: customEase },
  },
};

// 4. Animasi Elemen Umum (Slide Up + Fade In)
const upVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: customEase },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        bg-[#EAEAEA]
        text-slate-950
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        px-6 sm:px-12 lg:px-16
        py-12 sm:py-16 lg:py-20
      "
    >
      {/* ── 1. TOP HEADER LABEL (POJOK KIRI ATAS) ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: customEase }}
        className="w-full"
      >
        <span className="font-sans font-black text-sm sm:text-base text-slate-950 uppercase tracking-tight">
          Website Templates
        </span>
      </motion.div>

      {/* ── 2. MAIN TYPOGRAPHY "TEMPLATES" DENGAN AKSEN "Website" MERAH ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative my-auto w-full flex items-center justify-center py-10 sm:py-16"
      >
        <div className="relative text-center w-full max-w-[1600px]">
          
          {/* TEKS UTAMA "TEMPLATES" RAKSASA */}
          <motion.h1
            variants={titleVariant}
            className={`
              ${staatliches.className}
              uppercase
              tracking-tight
              leading-none
              text-[clamp(4.5rem,15vw,13.5rem)]
              text-[#111111]
              w-full
              whitespace-nowrap
            `}
          >
            TEMPLATES
          </motion.h1>

          {/* AKSEN HANDWRITING "Website" MERAH MENUMPANG DI TENGAH */}
          <motion.div
            variants={accentVariant}
            className="
              absolute
              top-1/2
              left-[51%]
              -translate-x-1/2
              -translate-y-[65%]
              z-10
              pointer-events-none
            "
          >
            <span
              className="
                font-serif
                italic
                text-[#E52323]
                text-[clamp(2.2rem,7vw,6.5rem)]
                font-normal
                tracking-tight
                leading-none
                drop-shadow-sm
              "
              style={{ fontFamily: "'Caveat', 'Dancing Script', cursive, serif" }}
            >
              Website
            </span>
          </motion.div>

        </div>
      </motion.div>

      {/* ── 3. BOTTOM DESCRIPTION (RATA TENGAH) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.5, ease: customEase }}
        className="w-full flex justify-center"
      >
        <p className="font-sans font-semibold text-xs sm:text-sm lg:text-base leading-relaxed text-slate-800 text-center max-w-2xl">
          Koleksi template modern untuk Company Profile, Landing Page, Portfolio, hingga
          Website Bisnis yang siap disesuaikan dengan identitas brand Anda.
        </p>
      </motion.div>
    </section>
  );
}