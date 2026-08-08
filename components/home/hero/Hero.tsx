"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Staatliches } from "next/font/google";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import XoraLogo from "@/components/3d/XoraLogo";

// Import Font Staatliches dari Google Fonts
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// --- Custom Cubic Bezier Ease ---
const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Container Stagger Parent
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// 2. Animasi Kata per Kata pada Title
const titleWordVariant: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

// 3. Animasi Elemen Umum
const elementUpVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: customEase,
    },
  },
};

// 4. Animasi Masuk 3D Logo
const logoEntranceVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: customEase,
      delay: 0.2,
    },
  },
};

const itemsRunningText = [
  "DIGITAL MAKER EXPERIENCE",
  "PREMIUM WEB DEVELOPMENT",
  "MODERN UI/UX DESIGN",
  "AI AUTOMATION",
  "CUSTOM BUSINESS SYSTEM",
  "NEXT.JS • TYPESCRIPT • THREE.JS",
  "BUILT FOR MODERN BRANDS",
  "CRAFTED WITH PRECISION",
];

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="
        relative
        h-screen
        min-h-[720px]
        w-full
        overflow-hidden
        bg-slate-950
        text-white
        pt-20 sm:pt-24 lg:pt-28
        pb-16 sm:pb-20
        flex
        flex-col
        justify-between
        items-center
        selection:bg-red-500 selection:text-white
      "
    >
      {/* ── 1. BACKGROUND IMAGE + SUBTLE SHADOW OVERLAY ── */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
        <Image
          src="/assets/home/hero/hero.webp"
          alt="Hero Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Soft Dark Shadow Overlay Pas Sesuai Referensi */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/60" />
      </div>

      {/* ── 2. MAIN CONTENT AREA (MENTOK KIRI DENGAN SPASI RENGGANG) ── */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between flex-grow my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full my-auto">
          
          {/* KOLOM KIRI: TITLE RAKSASA + SPASI LEGA (POIN 1, 2, 3) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-7">
            
            {/* A. TITLE RAKSASA 2 BARIS (STAATLICHES FONT EXTRA BESAR) */}
            <div className="w-full overflow-hidden">
              <h1 className={`${staatliches.className} uppercase tracking-tight leading-[0.82] text-[clamp(4.8rem,13.5vw,13.5rem)] drop-shadow-md -ml-1 sm:-ml-2`}>
                {/* Baris Pertama: DIGITALMAKER (Putih Solid) */}
                <motion.span variants={titleWordVariant} className="block whitespace-nowrap text-white">
                  DIGITALMAKER
                </motion.span>

                {/* Baris Kedua: EXPERIENCE (Gradient Perak-Putih Pudar) */}
                <motion.span
                  variants={titleWordVariant}
                  className="block whitespace-nowrap bg-gradient-to-b from-white via-slate-200 to-slate-400/80 bg-clip-text text-transparent"
                >
                  EXPERIENCE
                </motion.span>
              </h1>
            </div>

            {/* B. SLASHED GRAPHIC BARS (///////) */}
            <motion.div
              variants={elementUpVariant}
              className="flex items-center gap-1.5 sm:gap-2 text-white pt-1 pb-1"
            >
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="h-6 sm:h-8 w-2 sm:w-2.5 bg-white -skew-x-[25deg] inline-block shadow-sm"
                />
              ))}
              <span className="h-2.5 sm:h-3 w-8 sm:w-12 bg-white inline-block ml-1 self-end mb-0.5" />
            </motion.div>

            {/* C. BUTTONS EXPLORE WORK & START PROJECT (BERJARAK LEGA) */}
            <motion.div
              variants={elementUpVariant}
              className="flex flex-wrap items-center justify-start gap-4 pt-2 pb-2"
            >
              {/* Button 1: Explore Work (Red Box) */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Link
                  href="/portfolio"
                  className="
                    group
                    relative
                    inline-flex
                    h-13 sm:h-14
                    px-8 sm:px-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-none
                    bg-[#FF2E00]
                    text-black
                    font-sans
                    font-extrabold
                    text-sm
                    uppercase
                    tracking-wider
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-red-600
                  "
                >
                  <span className="relative z-10">EXPLORE WORK</span>
                  <ArrowUpRight className="relative z-10 ml-2.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>

              {/* Button 2: Start Project (White Box) */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
              >
                <Link
                  href="/contact"
                  className="
                   group
                    relative
                    inline-flex
                    h-13 sm:h-14
                    px-8 sm:px-10
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-none
                    bg-[#FF2E00]
                    text-black
                    font-sans
                    font-extrabold
                    text-sm
                    uppercase
                    tracking-wider
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-red-600
                  "
                >
                  <span className="relative z-10">START PROJECT</span>
                  <ArrowRight className="relative z-10 ml-2.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* D. DESKRIPSI TEKS MENTOK KIRI DENGAN JARAK LEGA DI ATAS MARQUEE */}
            <motion.p
              variants={elementUpVariant}
              className="font-sans text-xs sm:text-sm lg:text-[0.95rem] font-normal leading-relaxed text-slate-200/90 max-w-xl pt-4"
            >
              XORA menghadirkan solusi digital modern untuk membantu bisnis berkembang melalui website premium, sistem digital, serta integrasi AI yang dirancang untuk memperkuat identitas merek Anda.
            </motion.p>

          </div>

          {/* KOLOM KANAN: FLOATING XORA LOGO */}
          <motion.div
            variants={logoEntranceVariant}
            className="
              lg:col-span-5 
              relative 
              h-[22rem] sm:h-[32rem] lg:h-[38rem] 
              w-full 
              flex 
              items-center 
              justify-center 
              lg:justify-end
              mt-4 lg:mt-0
            "
          >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Floating Animation */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full max-w-[26rem] sm:max-w-[32rem] lg:max-w-[38rem]"
            >
              <XoraLogo />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── 3. RUNNING TEXT MARQUEE ── */}
      <motion.div
        variants={elementUpVariant}
        className="
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          border-t
          border-white/10
          bg-black/50
          backdrop-blur-md
          z-20
        "
      >
        <div className="flex w-max whitespace-nowrap py-3 sm:py-3.5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex items-center"
          >
            {[...itemsRunningText, ...itemsRunningText].map((item, index) => (
              <div key={index} className="flex items-center mx-4 sm:mx-8">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                  {item}
                </span>
                <span className="ml-4 sm:ml-8 text-red-500 text-xs">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── 4. SIDE COPYRIGHT LABEL ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: customEase }}
        className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 items-center pointer-events-none"
      >
        <div className="flex flex-col items-center space-y-6">
          <div
            className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            © 2026 XORA STUDIO. ALL RIGHTS RESERVED
          </div>
          <div className="h-10 w-[1px] bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}