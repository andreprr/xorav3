"use client";

import { useRef } from "react";
import { Staatliches } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Header VISION & MISSION
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const missionList = [
  {
    number: "01",
    title: "Menciptakan pengalaman digital berkualitas",
    description:
      "Menghadirkan desain dan pengalaman digital yang mampu meningkatkan persepsi serta kepercayaan terhadap sebuah brand.",
  },
  {
    number: "02",
    title: "Mengembangkan solusi yang relevan",
    description:
      "Membangun website, sistem, dan produk digital berdasarkan kebutuhan nyata, bukan sekadar mengikuti tren teknologi.",
  },
  {
    number: "03",
    title: "Membantu bisnis bekerja lebih efektif",
    description:
      "Memanfaatkan teknologi dan automation untuk menyederhanakan proses dan meningkatkan efisiensi.",
  },
  {
    number: "04",
    title: "Membangun untuk jangka panjang",
    description:
      "Menciptakan fondasi digital yang scalable dan dapat berkembang bersama bisnis.",
  },
];

export default function VisiMisi() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER FAST ON-POINT STAGGERED ENTRANCE ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      // 1. Header Entrance (VISION - MISSION + Line)
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" },
          0
        );
      }

      // 2. Center divider line quick draw (scaleY 0 -> 1)
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.6, ease: "power3.inOut" },
          0.1
        );
      }

      // 3. Vision column split-reveal — slide in dari kiri
      if (visionRef.current) {
        tl.fromTo(
          visionRef.current,
          { opacity: 0, x: -60, filter: "blur(6px)" },
          { opacity: 1, x: 0, filter: "blur(0px)" },
          0.2
        );
      }

      // 4. Mission column split-reveal — slide in dari kanan
      if (missionRef.current) {
        tl.fromTo(
          missionRef.current,
          { opacity: 0, x: 60, filter: "blur(6px)" },
          { opacity: 1, x: 0, filter: "blur(0px)" },
          0.3
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="visi-misi"
      className="
        relative
        w-full
        min-h-screen
        bg-black
        text-[#ECEBE6]
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        py-12 sm:py-16 lg:py-20
        px-6 sm:px-12 lg:px-20
      "
    >
      <div className="w-full max-w-[1650px] mx-auto flex-grow flex flex-col justify-between">
        
        {/* ── 1. TOP HEADER SECTION (VISION — MISSION) ── */}
        <div ref={headerRef} className="w-full pb-8 sm:pb-10 border-b border-white/20">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            {/* VISION TITLE */}
            <h2
              className={`
                ${staatliches.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(4.5rem,15vw,13.5rem)]
                text-[#ECEBE6]
              `}
            >
              VISION
            </h2>

            {/* CONNECTING HORIZONTAL LINE */}
            <div className="flex-grow h-[2px] bg-white/30 hidden sm:block mx-4" />

            {/* MISSION TITLE */}
            <h2
              className={`
                ${staatliches.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(4.5rem,15vw,13.5rem)]
                text-[#ECEBE6]
              `}
            >
              MISSION
            </h2>
          </div>
        </div>

        {/* ── 2. MAIN CONTENT GRID (VISION KIRI vs MISSION KANAN) ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start flex-grow my-auto pt-8 sm:pt-12">
          
          {/* CENTER VERTICAL DIVIDER LINE (QUICK DRAW) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10 pointer-events-none">
            <div
              ref={dividerRef}
              className="w-[2px] h-full bg-white/30 origin-top will-change-transform"
            />
          </div>

          {/* KOLOM KIRI: VISION STATEMENT */}
          <div
            ref={visionRef}
            className="lg:col-span-6 flex flex-col justify-between min-h-[300px] lg:min-h-[420px] pr-0 lg:pr-8 will-change-transform"
          >
            <p className="font-sans font-medium text-xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-snug text-[#ECEBE6] max-w-2xl">
              Membangun masa depan digital bagi bisnis melalui pengalaman, teknologi,
              dan sistem yang tidak hanya mengikuti perubahan, tetapi siap berkembang
              bersamanya.
            </p>

            {/* Metadata Footer Label */}
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white/70 uppercase pt-8 lg:pt-0">
              XORA 2026
            </div>
          </div>

          {/* KOLOM KANAN: MISSION LIST */}
          <div
            ref={missionRef}
            className="lg:col-span-6 lg:pl-12 space-y-6 sm:space-y-8 will-change-transform"
          >
            {missionList.map((item) => (
              <div
                key={item.number}
                className="w-full pb-6 border-b border-white/20 last:border-b-0"
              >
                {/* Headline: Number — Title */}
                <h3 className="font-sans font-bold text-sm sm:text-base lg:text-lg text-[#ECEBE6] tracking-wide">
                  {item.number} — {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-sans font-normal text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
