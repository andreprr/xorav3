"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Radley } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ── 1. FONT SETUP ──
const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const radley = Radley({
  weight: ["400"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // ── 2. GSAP SCROLLTRIGGER REVEAL ANIMATION ──
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animasi Navbar Fade Down
      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      // Animasi Card Slide & Scale In
      if (cardRef.current) {
        tl.fromTo(
          cardRef.current,
          { opacity: 0, x: -60, scale: 0.95, filter: "blur(8px)" },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#120D0A] text-white select-none flex flex-col justify-between"
    >
      {/* ── 3. BACKGROUND IMAGE + OVERLAY ── */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/assets/coffee-shop/hero/hero-background.webp"
          alt="Xora Coffee Interior"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* ── 4. NAVBAR ATAS (MENU, GALLERY, ABOUT, CONTACT) ── */}
      <div
        ref={navRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 flex justify-end items-center"
      >
        <nav
          className={`flex items-center gap-8 sm:gap-12 ${radley.className} text-base sm:text-xl text-white/90 tracking-wide`}
        >
          <Link href="#menu" className="hover:text-[#D4A373] transition-colors">
            Menu
          </Link>
          <Link href="#gallery" className="hover:text-[#D4A373] transition-colors">
            Gallery
          </Link>
          <Link href="#about" className="hover:text-[#D4A373] transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-[#D4A373] transition-colors">
            contact
          </Link>
        </nav>
      </div>

      {/* ── 5. MAIN CONTENT / FLOATING BANNER CARD ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 my-auto py-12 flex items-center">
        
        {/* DARK COFFEE CARD CONTAINER */}
        <div
          ref={cardRef}
          className="
            relative
            w-full
            max-w-[780px]
            bg-[#2A1810]/95
            backdrop-blur-md
            p-8 sm:p-12 lg:p-16
            shadow-2xl
            border border-[#3D251A]/50
            flex
            flex-col
            justify-between
          "
        >
          {/* ACCENT LINE TOP RIGHT (Garis Putih Vertikal Kanan Atas) */}
          <div className="absolute -top-10 right-8 sm:right-16 w-[3px] h-24 bg-white/90 shadow-md" />

          {/* TOP SECTION: SUBTITLE & COFFEE ICON */}
          <div className="flex items-start justify-between gap-6 mb-8 sm:mb-12">
            {/* Subtitle Left */}
            <div className={`${radley.className} text-xl sm:text-2xl text-white/90 leading-tight pt-2`}>
              <p>Paucek</p>
              <p>and Lage</p>
            </div>

            {/* Coffee Cup Illustration Center-Right */}
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-20 h-16 sm:w-28 sm:h-20"
            >
              {/* Gambar / SVG Cangkir Kopi Berasap */}
              <svg
                viewBox="0 0 100 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#FFFBEB] drop-shadow-md"
              >
                {/* Steam Lines */}
                <path
                  d="M35 15C35 10 40 5 40 0M50 18C50 12 55 6 55 0M65 15C65 10 70 5 70 0"
                  stroke="#FFFBEB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Cup Body */}
                <path
                  d="M20 25H80L73 60C72 65 65 70 50 70C35 70 28 65 27 60L20 25Z"
                  fill="#FFFBEB"
                />
                {/* Saucer Plate */}
                <ellipse cx="50" cy="73" rx="40" ry="5" fill="#CBB392" />
                {/* Cup Handle */}
                <path
                  d="M80 32C88 32 92 38 90 46C88 52 82 55 76 54"
                  stroke="#FFFBEB"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* BOTTOM SECTION: GIANT TITLE + ACCENT LINE LEFT */}
          <div className="relative pt-4 sm:pt-6">
            {/* ACCENT LINE LEFT (Garis Putih Vertikal Kiri Bawah) */}
            <div className="absolute -bottom-4 -left-8 sm:-left-12 w-[3px] h-32 sm:h-40 bg-white/90 shadow-md" />

            {/* MAIN TITLE "XORA COFFEE" */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`
                ${cormorant.className}
                text-5xl sm:text-7xl lg:text-8xl
                font-normal
                uppercase
                tracking-wider
                text-[#FFFBEB]
                leading-none
                whitespace-nowrap
              `}
            >
              XORA COFFEE
            </motion.h1>
          </div>

        </div>

      </div>

      {/* ── 6. BOTTOM SPACER / FOOTER ACCENT ── */}
      <div className="relative z-10 w-full px-8 pb-6 text-center sm:text-left">
        <p className={`${radley.className} text-xs sm:text-sm text-white/50 tracking-widest uppercase`}>
          © 2026 XORA COFFEE • ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
}