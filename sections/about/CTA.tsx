"use client";

import { useRef } from "react";
import Link from "next/link";
import { Antonio } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Config Font Google ANTONIO untuk Judul Raksasa CTA
const antonio = Antonio({
  weight: ["700"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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

      // 1. Title Reveal (Scale & Blur Fade)
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
        );
      }

      // 2. Paragraph Reveal
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 25, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
          "-=0.5"
        );
      }

      // 3. CTA Button Reveal
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { opacity: 0, x: -30, filter: "blur(6px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="cta"
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
      <div className="w-full max-w-[1650px] mx-auto my-auto flex flex-col justify-between h-full min-h-[80vh]">
        
        {/* ── 1. UPPER SECTION: GIANT TITLE & DESCRIPTION ── */}
        <div className="w-full max-w-7xl">
          
          {/* GIANT TITLE */}
          <h2
            ref={titleRef}
            className={`
              ${antonio.className}
              uppercase
              tracking-tight
              leading-[0.85]
              text-[clamp(4.2rem,13vw,12.5rem)]
              text-[#ECEBE6]
            `}
          >
            <span className="block">LET'S BUILD</span>
            <span className="block whitespace-nowrap">SOMETHING AMAZING</span>
          </h2>

          {/* PARAGRAPH DESKRIPSI */}
          <p
            ref={descRef}
            className="
              mt-6 sm:mt-8
              font-sans
              font-normal
              text-xs sm:text-sm lg:text-base
              leading-relaxed
              text-slate-300
              max-w-xl
            "
          >
            Kami siap membantu bisnis Anda memiliki website yang modern, profesional, dan
            mampu meningkatkan kepercayaan pelanggan.
          </p>

        </div>

        {/* ── 2. BOTTOM SECTION: START YOUR PROJECT LINK BUTTON ── */}
        <div ref={buttonRef} className="pt-16 sm:pt-24 lg:pt-32">
          <Link href="/contact" className="inline-block group">
            <motion.div
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex
                items-center
                gap-3 sm:gap-4
                font-sans
                font-black
                text-2xl sm:text-4xl lg:text-5xl
                uppercase
                tracking-tight
                text-[#ECEBE6]
                group-hover:text-[#E52323]
                transition-colors
                duration-300
              "
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 stroke-[3] transition-transform duration-300 group-hover:translate-x-2" />
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}