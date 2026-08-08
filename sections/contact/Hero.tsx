"use client";

import { useRef } from "react";
import Link from "next/link";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Google ANTON untuk Judul "CONTACT"
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const xoraOverlayRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const bottomMetaRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Year 2026 Entrance
      if (yearRef.current) {
        tl.fromTo(
          yearRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }

      // 2. Giant "CONTACT" Title Entrance
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, scale: 0.92, filter: "blur(12px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
          "-=0.4"
        );
      }

      // 3. "Xora" Amsterdam Script Overlay Entrance
      if (xoraOverlayRef.current) {
        tl.fromTo(
          xoraOverlayRef.current,
          { opacity: 0, scale: 0.7, rotate: -5 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.6"
        );
      }

      // 4. Bottom Metadata & Whatsapp Link Reveal
      if (bottomMetaRef.current) {
        tl.fromTo(
          bottomMetaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact-hero"
      className="
        relative
        w-full
        min-h-screen
        bg-[#E52323]
        text-[#FFFBEB]
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        px-6 sm:px-12 lg:px-16
        py-8 sm:py-12
      "
    >
      {/* ── 1. TOP METADATA YEAR "2026" ── */}
      <div ref={yearRef} className="w-full text-center z-10 pt-2 sm:pt-4">
        <span className={`
          ${anton.className}
          text-2xl sm:text-4xl lg:text-5xl
          uppercase
          tracking-wider
          text-[#FFFBEB]
        `}>
          2026
        </span>
      </div>

      {/* ── 2. MAIN CENTER TYPOGRAPHY SECTION ("CONTACT" + OVERLAY "Xora") ── */}
      <div className="relative my-auto w-full flex items-center justify-center py-8">
        
        {/* SIDEBAR VERTICAL TEXT LEFT */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 font-mono text-[11px] uppercase tracking-widest text-[#FFFBEB]/40 -rotate-90 origin-left">
          <span>DIGITAL</span>
          <span>BORCELLE</span>
        </div>

        {/* SIDEBAR VERTICAL TEXT RIGHT */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 font-mono text-[11px] uppercase tracking-widest text-[#FFFBEB]/40 rotate-90 origin-right">
          <span>DIGITAL</span>
          <span>BORCELLE</span>
        </div>

        {/* CENTER CONTENT CONTAINER */}
        <div className="relative text-center w-full max-w-[1650px] flex items-center justify-center">
          
          {/* GIANT "CONTACT" TITLE USING ANTON FONT */}
          <div ref={titleRef} className="w-full">
            <h1
              className={`
                ${anton.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(5rem,18.5vw,16.5rem)]
                text-[#FFFBEB]
                whitespace-nowrap
                select-none
              `}
            >
              CONTACT
            </h1>
          </div>

          {/* OVERLAY "Xora" CURSIVE HANDWRITING SCRIPT (AMSTERDAM FOUR STYLE) */}
          <div
            ref={xoraOverlayRef}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-[48%]
              -translate-y-[55%]
              z-20
              pointer-events-none
            "
          >
            <span
              className="
                font-serif
                italic
                text-black
                text-[clamp(4.5rem,15vw,13rem)]
                font-normal
                tracking-tight
                leading-none
                drop-shadow-sm
                whitespace-nowrap
                block
              "
              style={{
                fontFamily: "'Amsterdam Four', 'Caveat', 'Dancing Script', cursive, serif",
              }}
            >
              Xora
            </span>
          </div>

        </div>
      </div>

      {/* ── 3. BOTTOM METADATA & WHATSAPP BUTTON LINK ── */}
      <div
        ref={bottomMetaRef}
        className="w-full max-w-[1650px] mx-auto flex items-end justify-between gap-6 pb-2 sm:pb-4 z-10"
      >
        {/* LEFT BOTTOM CAPTION */}
        <div className="font-mono text-xs sm:text-sm lg:text-base uppercase tracking-wider text-[#FFFBEB]/90 font-medium max-w-xs sm:max-w-md">
          LETS BUILD SOMETHING AMAZING
        </div>

        {/* RIGHT BOTTOM WHATSAPP LINK BUTTON */}
        <div>
          <Link
            href="https://wa.me/6282130300614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`
                ${anton.className}
                inline-block
                text-2xl sm:text-4xl lg:text-5xl
                uppercase
                tracking-wider
                text-[#FFFBEB]
                hover:text-black
                transition-colors
                duration-300
                cursor-pointer
              `}
            >
              WHATSAPP
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}