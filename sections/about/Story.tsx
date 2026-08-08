"use client";

import { useRef } from "react";
import { Staatliches } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Header Kiri
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTitleRef = useRef<HTMLDivElement>(null);
  const rightHeaderRef = useRef<HTMLHeadingElement>(null);
  const storyBodyRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER STORYTELLING ANIMATION ──
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

      // 1. Judul Kiri "WHY WE BUILT XORA" Reveal
      if (leftTitleRef.current) {
        tl.fromTo(
          leftTitleRef.current,
          { opacity: 0, x: -50, filter: "blur(12px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
        );
      }

      // 2. Headline Kanan "BECAUSE GREAT BUSINESSES..."
      if (rightHeaderRef.current) {
        tl.fromTo(
          rightHeaderRef.current,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 3. Paragraf Narasi Storytelling Reveal Line by Line
      if (storyBodyRef.current) {
        const textElements = storyBodyRef.current.querySelectorAll(".story-step");
        tl.fromTo(
          textElements,
          { opacity: 0, y: 25, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="story"
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
        
        {/* ── MAIN GRID LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch flex-grow my-auto">
          
          {/* ========================================================= */}
          {/* KOLOM KIRI: TITLE RAKSASA "WHY WE BUILT XORA"             */}
          {/* ========================================================= */}
          <div
            ref={leftTitleRef}
            className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-white/20 pr-0 lg:pr-12 pb-8 lg:pb-0"
          >
            <h1
              className={`
                ${staatliches.className}
                uppercase
                tracking-tight
                leading-[0.82]
                text-[clamp(4.2rem,12vw,10.5rem)]
                text-[#ECEBE6]
              `}
            >
              <span className="block">WHY</span>
              <span className="block">WE</span>
              <span className="block">BUILT</span>
              <span className="block">XORA</span>
            </h1>

            {/* METADATA FOOTER LABEL (POJOK KIRI BAWAH) */}
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white/70 uppercase pt-8 lg:pt-0">
              XORA 2026
            </div>
          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN: STORYTELLING CONTENT                         */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 lg:pl-6 pt-2 lg:pt-0">
            
            {/* HEADLINE KANAN ATAS */}
            <div className="w-full pb-6 border-b border-white/20">
              <h2
                ref={rightHeaderRef}
                className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-right leading-tight text-[#ECEBE6]"
              >
                BECAUSE GREAT BUSINESSES<br />
                DESERVE GREAT DIGITAL<br />
                EXPERIENCES.
              </h2>
            </div>

            {/* ISI STORYTELLING NARASI */}
            <div
              ref={storyBodyRef}
              className="space-y-6 sm:space-y-8 font-sans text-xs sm:text-sm lg:text-base leading-relaxed text-[#ECEBE6]/90 border-b border-white/20 pb-8"
            >
              <p className="story-step uppercase font-medium tracking-wider">
                KAMI PERCAYA BAHWA TEKNOLOGI SEHARUSNYA BUKAN SEKADAR PELENGKAP SEBUAH BISNIS.<br />
                TEKNOLOGI HARUS MEMBANTU BISNIS LEBIH PROFESIONAL, BEKERJA LEBIH EFEKTIF, DAN MEMILIKI RUANG UNTUK BERKEMBANG.<br />
                KARENA ITU, XORA MENGGABUNGKAN:
              </p>

              {/* STRATEGY */}
              <div className="story-step space-y-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg uppercase text-[#ECEBE6] tracking-wider">
                  STRATEGY :
                </h3>
                <p className="uppercase font-normal tracking-wider text-white/80">
                  MEMAHAMI TUJUAN DAN KEBUTUHAN BISNIS SEBELUM MEMBANGUN.
                </p>
              </div>

              {/* DESIGN */}
              <div className="story-step space-y-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg uppercase text-[#ECEBE6] tracking-wider">
                  DESIGN :
                </h3>
                <p className="uppercase font-normal tracking-wider text-white/80">
                  MENCIPTAKAN PENGALAMAN DIGITAL YANG MEMBUAT BRAND LEBIH DIPERCAYA.
                </p>
              </div>

              {/* TECHNOLOGY */}
              <div className="story-step space-y-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg uppercase text-[#ECEBE6] tracking-wider">
                  TECHNOLOGY :
                </h3>
                <p className="uppercase font-normal tracking-wider text-white/80">
                  MEMBANGUN SISTEM YANG MEMBANTU BISNIS BEKERJA LEBIH EFISIEN.
                </p>
              </div>

              {/* AUTOMATION */}
              <div className="story-step space-y-1">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg uppercase text-[#ECEBE6] tracking-wider">
                  AUTOMATION :
                </h3>
                <p className="uppercase font-normal tracking-wider text-white/80">
                  MENGURANGI PEKERJAAN BERULANG DAN MEMBUKA RUANG UNTUK PERTUMBUHAN.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}