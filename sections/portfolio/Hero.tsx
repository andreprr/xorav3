"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import asset gambar xora services
import xoraServicesImg from "@/sections/portfolio/assets/xora services.webp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // ── 1. BACKGROUND ENTRANCE (one-time, tidak terikat scroll) ──
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            willChange: "transform",
          }
        );
      }

      // ── 2. ENTRANCE TIMELINE (TITLE CLIP-REVEAL + GRADIENT SWEEP) ──
      const tl = gsap.timeline();

      if (titleRef.current) {
        // Mask / clip-path reveal judul raksasa dari bawah
        tl.fromTo(
          titleRef.current,
          { clipPath: "inset(100% 0% 0% 0%)", y: 80 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1.1,
            ease: "power4.out",
            willChange: "clip-path",
          },
          0
        );

        // Gold gradient sweep: background-position terus bergerak perlahan
        gsap.fromTo(
          titleRef.current,
          { backgroundPosition: "0% 50%" },
          {
            backgroundPosition: "100% 50%",
            duration: 7,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.6,
            willChange: "background-position",
          }
        );
      }

      // ── 3. STATS STAGGERED ENTRANCE (20+ / 100%) ──
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 36, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            stagger: 0.18,
            ease: "power4.out",
          },
          "-=0.55"
        );
      }

      // ── 4. DESCRIPTION ENTRANCE ──
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 26, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.45"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
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
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
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
            ref={titleRef}
            style={{ backgroundSize: "200% 100%" }}
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
        <div
          ref={statsRef}
          className="mt-8 sm:mt-12 lg:mt-14 flex items-center gap-10 sm:gap-16"
        >
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
        <div ref={descRef} className="mt-8 sm:mt-10 max-w-xl">
          <p className="font-sans font-medium text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Kami membantu bisnis membangun website dan sistem digital yang
            modern, cepat, scalable, dan berorientasi pada pertumbuhan bisnis.
          </p>
        </div>

      </div>
    </section>
  );
}
