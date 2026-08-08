"use client";

import { useRef } from "react";
import { Antonio } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Config Font Google ANTONIO untuk Judul & Item Tech Stack
const antonio = Antonio({
  weight: ["700"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Data Tech Stack sesuai dengan referensi gambar
const leftTech = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "LARAVEL",
  "PHP",
];

const rightTech = [
  "MYSQL",
  "WORDPRESS",
  "PROSTGRESQL",
  "NODE.JS",
  "GIT",
  "VERCEL",
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Header Entrance
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // 2. Center Double Line Divider Scale Up
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.8, ease: "power3.inOut" },
          "-=0.5"
        );
      }

      // 3. Left Column Tech Items Staggered Reveal
      if (leftColRef.current) {
        const leftItems = leftColRef.current.querySelectorAll(".tech-item");
        tl.fromTo(
          leftItems,
          { opacity: 0, x: -30, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      // 4. Right Column Tech Items Staggered Reveal
      if (rightColRef.current) {
        const rightItems = rightColRef.current.querySelectorAll(".tech-item");
        tl.fromTo(
          rightItems,
          { opacity: 0, x: 30, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="
        relative
        w-full
        min-h-screen
        bg-[#0F0E0E]
        text-[#ECEBE6]
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        py-12 sm:py-16 lg:py-24
        px-6 sm:px-12 lg:px-20
      "
    >
      <div className="w-full max-w-[1650px] mx-auto my-auto flex flex-col justify-center">
        
        {/* ── 1. HEADER SECTION (MODERN TECH STACK + SUBTITLE + DIVIDER) ── */}
        <div ref={headerRef} className="w-full pb-6 sm:pb-8 border-b border-white/20 mb-10 sm:mb-14">
          {/* GIANT TITLE */}
          <h2
            className={`
              ${antonio.className}
              uppercase
              tracking-tight
              leading-none
              text-[clamp(4.2rem,13vw,11.5rem)]
              text-[#ECEBE6]
            `}
          >
            MODERN TECH STACK
          </h2>

          {/* SUBTITLE */}
          <p className="mt-3 sm:mt-4 font-sans font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider text-slate-300">
            KAMI MENGGUNAKAN TEKNOLOGI MODERN YANG CEPAT, AMAN, SCALABLE, DAN MUDAH DIKEMBANGKAN.
          </p>
        </div>

        {/* ── 2. MAIN GRID (LEFT LIST — DOUBLE LINE — RIGHT LIST) ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* DOUBLE VERTICAL CENTER DIVIDER LINE */}
          <div
            ref={dividerRef}
            className="
              hidden md:flex
              absolute
              left-1/2
              top-0
              bottom-0
              -translate-x-1/2
              gap-1.5
              items-center
              justify-center
              origin-top
            "
          >
            <div className="w-[1px] h-full bg-white/30" />
            <div className="w-[1px] h-full bg-white/30" />
          </div>

          {/* KOLOM KIRI (LEFT-ALIGNED) */}
          <div ref={leftColRef} className="flex flex-col items-start space-y-3 sm:space-y-5">
            {leftTech.map((item) => (
              <h3
                key={item}
                className={`
                  ${antonio.className}
                  tech-item
                  uppercase
                  tracking-tight
                  leading-none
                  text-[clamp(2.8rem,7vw,6.2rem)]
                  text-[#ECEBE6]
                  hover:text-[#E52323]
                  transition-colors
                  duration-300
                  cursor-pointer
                `}
              >
                {item}
              </h3>
            ))}
          </div>

          {/* KOLOM KANAN (RIGHT-ALIGNED) */}
          <div ref={rightColRef} className="flex flex-col items-end space-y-3 sm:space-y-5">
            {rightTech.map((item) => (
              <h3
                key={item}
                className={`
                  ${antonio.className}
                  tech-item
                  uppercase
                  tracking-tight
                  leading-none
                  text-[clamp(2.8rem,7vw,6.2rem)]
                  text-[#ECEBE6]
                  hover:text-[#E52323]
                  transition-colors
                  duration-300
                  cursor-pointer
                  text-right
                `}
              >
                {item}
              </h3>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}