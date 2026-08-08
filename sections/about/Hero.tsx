"use client";

import { useRef } from "react";
import { Staatliches } from "next/font/google";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Header XORA STUDIO
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const footerLabelRef = useRef<HTMLDivElement>(null);

  // ── GSAP CINEMATIC ENTRANCE (LONG BLUR-TO-CLEAR, WORD STAGGER) ──
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // 1. Title — each word staggers in with slow blur-to-clear reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".hero-word");
        tl.fromTo(
          words,
          { opacity: 0, y: 90, scale: 0.94, filter: "blur(16px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.8,
            stagger: 0.25,
          }
        );
      }

      // 2. Micro Label "ABOUT XORA" Fade In
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, x: 24 },
          { opacity: 1, x: 0, duration: 1.2 },
          "-=1.4"
        );
      }

      // 3. Paragraphs Entrance — staggered soft blur
      if (paragraphsRef.current) {
        const paragraphEls = paragraphsRef.current.querySelectorAll("p");
        tl.fromTo(
          paragraphEls,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.3,
            stagger: 0.25,
          },
          "-=1.2"
        );
      }

      // 4. Footer Label — fade in from bottom, delayed
      if (footerLabelRef.current) {
        tl.fromTo(
          footerLabelRef.current,
          { opacity: 0, y: 40 },
          { opacity: 0.8, y: 0, duration: 1.2 },
          "-=0.7"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
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
        px-6 sm:px-12 lg:px-20
        py-12 sm:py-16 lg:py-20
      "
    >
      {/* ── 1. TOP HEADER SECTION (XORA STUDIO & ABOUT XORA) ── */}
      <div className="w-full max-w-[1650px] mx-auto flex items-start justify-between gap-6 pt-4 sm:pt-8">
        
        {/* GIANT TITLE "XORA STUDIO" */}
        <h1
          ref={titleRef}
          className={`
            ${staatliches.className}
            uppercase
            tracking-tight
            leading-[0.82]
            text-[clamp(4.2rem,14vw,12.5rem)]
            text-[#ECEBE6]
          `}
        >
          <span className="hero-word inline-block will-change-transform">XORA</span>{" "}
          <span className="hero-word inline-block will-change-transform">STUDIO</span>
        </h1>

        {/* MICRO LABEL "ABOUT XORA" */}
        <span
          ref={badgeRef}
          className="
            font-sans
            font-bold
            text-xs sm:text-sm lg:text-base
            uppercase
            tracking-widest
            text-[#ECEBE6]/90
            pt-2 sm:pt-4
            shrink-0
            will-change-transform
          "
        >
          ABOUT XORA
        </span>

      </div>

      {/* ── 2. MAIN PARAGRAPH CONTENT ── */}
      <div className="w-full max-w-[1650px] mx-auto my-auto py-8 sm:py-12">
        <div
          ref={paragraphsRef}
          className="max-w-4xl space-y-6 sm:space-y-8 font-sans font-normal text-base sm:text-xl lg:text-2xl leading-relaxed text-[#ECEBE6]/90"
        >
          {/* Paragraf 1 */}
          <p className="will-change-transform">
            XORA adalah digital studio yang menghadirkan solusi digital modern untuk membantu bisnis
            membangun identitas, sistem, dan pengalaman digital yang lebih kuat.
          </p>

          {/* Paragraf 2 */}
          <p className="will-change-transform">
            XORA berfokus pada pengembangan website premium, digital templates, custom business
            systems, dan digital automation yang dirancang dengan perpaduan antara desain, teknologi,
            dan kebutuhan nyata sebuah bisnis.
          </p>

          {/* Paragraf 3 */}
          <p className="will-change-transform">
            Kami tidak hanya membangun produk digital. Kami membangun digital experience yang
            membantu bisnis tampil lebih profesional, bekerja lebih efisien, dan berkembang lebih cepat.
          </p>
        </div>
      </div>

      {/* ── 3. FOOTER METADATA LABEL (XORA 2026) ── */}
      <div className="w-full max-w-[1650px] mx-auto pb-2 sm:pb-4">
        <div
          ref={footerLabelRef}
          className="font-mono font-bold text-xs sm:text-sm uppercase tracking-widest text-[#ECEBE6] will-change-transform"
        >
          XORA 2026
        </div>
      </div>
    </section>
  );
}
