"use client";

import { useRef } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Codystar } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ── 1. FONT SETUP ──
const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// Font alternatif gaya "Canva Student Font Dot Tad" (Dotted Cursive / Handcrafted Look)
const dotFont = Codystar({
  weight: ["400"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // ── 2. GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Image Entrance Fade & Slide Left
      if (leftImageRef.current) {
        tl.fromTo(
          leftImageRef.current,
          { opacity: 0, x: -50, filter: "blur(8px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
        );
      }

      // 2. Title Overlap Entrance
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 3. Right Content & Description Reveal
      if (rightContentRef.current) {
        tl.fromTo(
          rightContentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-[#523E2E] overflow-hidden select-none flex flex-col justify-center"
    >
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* ── 3. LEFT COLUMN: FULL VERTICAL BARISTA IMAGE ── */}
        <div
          ref={leftImageRef}
          className="relative lg:col-span-5 h-[50vh] lg:h-full min-h-[400px] w-full overflow-hidden"
        >
          <Image
            src="/assets/coffee-shop/about/barista.webp"
            alt="Barista Pouring Coffee"
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
          {/* Subtle Right Shadow Fade for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40 lg:to-black/60" />
        </div>

        {/* ── 4. RIGHT COLUMN: COFFEE BROWN BACKGROUND + WATERMARK & TEXT ── */}
        <div className="relative lg:col-span-7 bg-[#594433] px-6 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
          
          {/* WATERMARK BACKGROUND (FLOATING COFFEE BEANS) */}
          <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none opacity-25">
            <svg
              viewBox="0 0 200 200"
              fill="currentColor"
              className="w-full h-full text-[#3D2C1E]"
            >
              {/* Coffee Beans Silhouette Pattern */}
              <path d="M140 120 C160 100, 180 130, 150 160 C120 190, 100 150, 140 120 Z" />
              <path d="M145 125 C150 135, 140 150, 130 155" stroke="#594433" strokeWidth="3" fill="none" />
              <path d="M100 150 C120 130, 140 160, 110 190 C80 220, 60 180, 100 150 Z" />
              <path d="M60 110 C80 90, 100 120, 70 150 C40 180, 20 140, 60 110 Z" />
            </svg>
          </div>

          {/* OVERLAPPING TITLE (Menyeberang dari kiri ke kanan) */}
          <div className="relative z-20 lg:-ml-32 max-w-2xl">
            <h2
              ref={titleRef}
              className={`
                ${cormorant.className}
                text-4xl sm:text-6xl lg:text-7xl
                font-normal
                text-[#FFFBEB]
                leading-[1.1]
                tracking-wide
                drop-shadow-lg
              `}
            >
              Crafted With Passion,
              <br />
              Served With Heart.
            </h2>
          </div>

          {/* DESCRIPTION CONTENT (CANVA STUDENT DOT TAD / DOTTED STYLE) */}
          <div
            ref={rightContentRef}
            className="relative z-10 mt-10 sm:mt-16 max-w-xl"
          >
            <p
              className={`
                ${dotFont.className}
                text-lg sm:text-2xl lg:text-3xl
                text-[#E6D5C3]
                leading-relaxed
                tracking-widest
                font-bold
                opacity-90
              `}
              style={{
                fontStyle: "italic",
                wordSpacing: "0.15em",
              }}
            >
              Every cup tells a story. We carefully select
              premium coffee beans, roast them to perfection,
              and serve every drink with genuine passion.
              Brewly is more than a coffee shop—it's a place
              to relax, connect, and enjoy exceptional coffee
              experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}