"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Staatliches } from "next/font/google";
import { ArrowUpRight, ArrowRight, Activity } from "lucide-react";
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
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// 2. Animasi Judul Utama
const titleWordVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: customEase,
    },
  },
};

// 3. Animasi Elemen UI
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

// 4. Animasi 3D Logo Entrance
const logoEntranceVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: customEase,
      delay: 0.15,
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
        w-full
        min-h-[100dvh]
        lg:h-screen
        lg:min-h-[750px]
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
      {/* ── 1. BACKGROUND IMAGE & FUTURISTIC HUD OVERLAY ── */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
        <Image
          src="/assets/home/hero/hero.webp"
          alt="Hero Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

        {/* Dynamic Dark Gradient & Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/95" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
        
        {/* Glow Ambient Lights */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      {/* ── 2. MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center flex-grow my-auto">
        
        {/* HUD TOP BAR STATUS (Futuristic Badge) */}
        <motion.div
          variants={elementUpVariant}
          className="flex items-center justify-between w-full border-b border-white/10 pb-3 mb-4 sm:mb-6"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-widest text-slate-300 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>[SYS_STATUS: OPTIMAL]</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase">
            <Activity className="w-3.5 h-3.5 text-red-500" />
            <span>XORA CORE V2.6</span>
          </div>
        </motion.div>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          
          {/* KOLOM KIRI: TITLE + SLASHED BARS + BUTTONS + DESKRIPSI */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6">
            
            {/* A. TITLE RAKSASA 2 BARIS (FLUID RESPONSIVE CLAMP) */}
            <div className="w-full overflow-hidden">
              <h1 className={`${staatliches.className} uppercase tracking-tight leading-[0.82] text-[clamp(2.6rem,11.5vw,12.5rem)] drop-shadow-lg -ml-0.5 sm:-ml-1`}>
                {/* Baris Pertama: DIGITALMAKER */}
                <motion.span variants={titleWordVariant} className="block whitespace-nowrap text-white">
                  DIGITALMAKER
                </motion.span>

                {/* Baris Kedua: EXPERIENCE */}
                <motion.span
                  variants={titleWordVariant}
                  className="block whitespace-nowrap bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
                >
                  EXPERIENCE
                </motion.span>
              </h1>
            </div>

            {/* B. SLASHED GRAPHIC BARS (///////) */}
            <motion.div
              variants={elementUpVariant}
              className="flex items-center gap-1 sm:gap-2 text-white py-1"
            >
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="h-5 sm:h-7 w-1.5 sm:w-2.5 bg-red-600 -skew-x-[25deg] inline-block shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                />
              ))}
              <span className="h-2 sm:h-2.5 w-6 sm:w-10 bg-white inline-block ml-1 self-end mb-0.5" />
            </motion.div>

            {/* C. HIGH-TECH ACTION BUTTONS */}
            <motion.div
              variants={elementUpVariant}
              className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 pt-1 pb-1 w-full sm:w-auto"
            >
              {/* Button 1: Explore Work (Primary Red Box) */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/portfolio"
                  className="
                    group
                    relative
                    inline-flex
                    w-full sm:w-auto
                    h-12 sm:h-14
                    px-6 sm:px-9
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-none
                    bg-red-600
                    text-white
                    font-sans
                    font-extrabold
                    text-xs sm:text-sm
                    uppercase
                    tracking-wider
                    shadow-[0_0_20px_rgba(220,38,38,0.4)]
                    transition-all
                    duration-300
                    hover:bg-red-500
                    border border-red-400/40
                  "
                >
                  <span className="relative z-10">EXPLORE WORK</span>
                  <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>

              {/* Button 2: Start Project (Secondary Cyber Glass) */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    inline-flex
                    w-full sm:w-auto
                    h-12 sm:h-14
                    px-6 sm:px-9
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-none
                    bg-slate-900/80
                    backdrop-blur-md
                    text-slate-100
                    font-sans
                    font-bold
                    text-xs sm:text-sm
                    uppercase
                    tracking-wider
                    border border-white/20
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                    hover:border-white
                  "
                >
                  <span className="relative z-10">START PROJECT</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* D. DESKRIPSI TEKS */}
            <motion.p
              variants={elementUpVariant}
              className="font-sans text-xs sm:text-sm lg:text-[0.95rem] font-normal leading-relaxed text-slate-300/90 max-w-xl pt-2"
            >
              XORA menghadirkan solusi digital modern untuk membantu bisnis berkembang melalui website premium, sistem digital, serta integrasi AI yang dirancang untuk memperkuat identitas merek Anda.
            </motion.p>

          </div>

          {/* KOLOM KANAN: FLOATING XORA 3D LOGO */}
          <motion.div
            variants={logoEntranceVariant}
            className="
              lg:col-span-5 
              relative 
              h-[16rem] sm:h-[24rem] lg:h-[36rem] 
              w-full 
              flex 
              items-center 
              justify-center 
              lg:justify-end
              mt-2 lg:mt-0
            "
          >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Floating Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full max-w-[20rem] sm:max-w-[28rem] lg:max-w-[36rem]"
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
          bg-slate-950/80
          backdrop-blur-md
          z-20
        "
      >
        <div className="flex w-max whitespace-nowrap py-2.5 sm:py-3.5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
            className="flex items-center"
          >
            {[...itemsRunningText, ...itemsRunningText].map((item, index) => (
              <div key={index} className="flex items-center mx-3 sm:mx-6">
                <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-slate-300 uppercase">
                  {item}
                </span>
                <span className="ml-3 sm:ml-6 text-red-500 text-xs">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── 4. SIDE COPYRIGHT LABEL (DESKTOP ONLY) ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: customEase }}
        className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 items-center pointer-events-none"
      >
        <div className="flex flex-col items-center space-y-6">
          <div
            className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            © 2026 XORA STUDIO. ALL RIGHTS RESERVED
          </div>
          <div className="h-10 w-[1px] bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}