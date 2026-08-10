"use client";

import { useRef } from "react";
import Link from "next/link";
import { Cormorant_Garamond, Radley } from "next/font/google";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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

const benefits = [
  "Premium Modern Design",
  "Fully Responsive",
  "SEO Optimized",
  "Fast Loading",
  "Easy Customization",
  "Source Code Included",
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

      if (containerRef.current) {
        tl.fromTo(
          containerRef.current.children,
          { opacity: 0, y: 35, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
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
        bg-gradient-to-br
        from-[#312219]
        via-[#4E3628]
        to-[#6E4E3B]
        text-[#FFFBEB]
        py-20 sm:py-28 lg:py-36
        px-6 sm:px-12 lg:px-20
        select-none
        overflow-hidden
        flex
        flex-col
        justify-center
        items-center
      "
    >
      {/* ── BACKGROUND AMBIENT ACCENTS ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D2B596] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8C5E3C] rounded-full blur-[140px]" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center my-auto"
      >
        {/* TAGLINE BADGE */}
        <div>
          <span
            className={`
              ${radley.className}
              inline-block
              rounded-full
              border
              border-white/20
              bg-white/10
              px-6 py-2
              text-xs sm:text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#E6D5C3]
              backdrop-blur-md
              shadow-lg
            `}
          >
            XORA Website Templates
          </span>
        </div>

        {/* GIANT TITLE */}
        <h2
          className={`
            ${cormorant.className}
            mt-8
            text-5xl sm:text-7xl lg:text-8xl
            font-bold
            leading-[1.05]
            text-[#FFFBEB]
            tracking-wide
          `}
        >
          Ready To Build<br />
          Your Coffee Shop Website?
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`
            ${radley.className}
            mt-8
            max-w-2xl
            text-base sm:text-xl
            leading-relaxed
            text-[#E6D5C3]/90
          `}
        >
          This is only a preview of what your website could look like.
          Every XORA template can be customized to match your business,
          branding, and future growth.
        </p>

        {/* BENEFITS GRID */}
        <div className="w-full max-w-3xl mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="
                flex
                items-center
                gap-3.5
                rounded-2xl
                border
                border-white/15
                bg-white/10
                p-4
                backdrop-blur-md
                shadow-md
                text-left
              "
            >
              <CheckCircle2 className="h-5 w-5 text-[#D2B596] shrink-0 stroke-[2.2]" />
              <span className={`${radley.className} text-sm sm:text-base text-[#FFFBEB] font-semibold`}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full">
          {/* Button 1: Use This Template */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <Link
              href="/contact"
              className={`
                ${radley.className}
                group
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#8C5E3C]
                hover:bg-[#A3704B]
                px-8 py-4
                text-base sm:text-lg
                font-bold
                text-white
                shadow-xl
                transition-colors
                duration-300
              `}
            >
              <span>Use This Template</span>
              <ArrowRight className="ml-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>

          {/* Button 2: Back To XORA */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <Link
              href="/"
              className={`
                ${radley.className}
                group
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                hover:bg-white
                hover:text-slate-900
                px-8 py-4
                text-base sm:text-lg
                font-bold
                text-[#FFFBEB]
                backdrop-blur-md
                transition-all
                duration-300
              `}
            >
              <ArrowLeft className="mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
              <span>Back To XORA</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}