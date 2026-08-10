"use client";

import { useRef } from "react";
import Image from "next/image";
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

const steps = [
  {
    title: "Browse Menu",
    step: "Step 1",
    description: "Explore premium coffee and fresh pastries.",
  },
  {
    title: "Add to Cart",
    step: "Step 2",
    description: "Select your favorite items with one click.",
  },
  {
    title: "Secure Payment",
    step: "Step 3",
    description: "Checkout easily using multiple payment methods.",
  },
  {
    title: "Enjoy Coffee",
    step: "Step 4",
    description: "Relax while your order is freshly prepared.",
  },
];

export default function OrderFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

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

      // Left Content Staggered Slide In
      if (leftContentRef.current) {
        tl.fromTo(
          leftContentRef.current.children,
          { opacity: 0, x: -40, filter: "blur(6px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }

      // Right Floating Image Entrance
      if (rightImageRef.current) {
        tl.fromTo(
          rightImageRef.current,
          { opacity: 0, scale: 0.9, x: 40, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
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
      id="ordering-experience"
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-r
        from-[#4A382C]
        via-[#635042]
        to-[#7A6757]
        text-[#FFFBEB]
        py-16 sm:py-20 lg:py-28
        px-6 sm:px-12 lg:px-20
        select-none
        overflow-hidden
        flex
        flex-col
        justify-center
      "
    >
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ── 3. LEFT COLUMN: TITLES & STEPS LIST ── */}
        <div ref={leftContentRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          {/* TAGLINE */}
          <span className={`${radley.className} text-sm sm:text-base text-white/70 font-semibold tracking-wider uppercase`}>
            Ordering experience
          </span>

          {/* MAIN TITLE */}
          <h2
            className={`
              ${cormorant.className}
              text-5xl sm:text-6xl lg:text-7xl
              font-bold
              text-[#FFFBEB]
              leading-[1.05]
              tracking-wide
              pb-4
            `}
          >
            Order In Just A<br />Few Steps
          </h2>

          {/* STEPS LIST */}
          <div className="space-y-6 pt-2">
            {steps.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/20 pb-5 last:border-b-0"
              >
                {/* STEP TITLE & STEP NUMBER */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`${radley.className} text-xl sm:text-2xl font-bold text-[#FFFBEB]`}>
                    {item.title}
                  </h3>
                  <span className={`${radley.className} text-sm sm:text-base text-white/60 font-medium`}>
                    {item.step}
                  </span>
                </div>

                {/* STEP DESCRIPTION */}
                <p className={`${radley.className} mt-1.5 text-xs sm:text-sm text-[#E6D5C3]/80 leading-relaxed max-w-md`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── 4. RIGHT COLUMN: FLOATING COMPOSITION & COFFEE BEANS ── */}
        <div
          ref={rightImageRef}
          className="relative lg:col-span-6 flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* CONTAINER COMPOSITION */}
          <div className="relative w-full max-w-[580px] aspect-[4/3] sm:aspect-[1/1] flex items-center justify-center">
            
            {/* BACKGROUND KREM CARD (Layer Belakang) */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] bg-[#FBF0E8] rounded-[2.5rem] shadow-xl z-0" />

            {/* MAIN IMAGE CARD (Barista pouring coffee - Layer Depan) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                z-10
                w-[88%]
                h-[85%]
                rounded-[2.5rem]
                overflow-hidden
                shadow-2xl
                border-2
                border-white/10
                -translate-x-4
                translate-y-4
              "
            >
              <Image
                src="/assets/coffee-shop/about/barista.webp"
                alt="Coffee Pouring Experience"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* FLOATING COFFEE BEANS ORNAMENTS (Biji Kopi Melayang) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-6 sm:right-10 z-20 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none drop-shadow-2xl"
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Coffee Bean 1 */}
                <g transform="translate(40, 10) rotate(25) scale(0.35)">
                  <ellipse cx="40" cy="25" rx="35" ry="22" fill="#3D291D" />
                  <path d="M10 25 Q40 38 70 25" stroke="#23160E" strokeWidth="4" fill="none" />
                </g>
                {/* Coffee Bean 2 (Big Main Bean) */}
                <g transform="translate(5, 5) rotate(-15) scale(0.55)">
                  <ellipse cx="50" cy="30" rx="42" ry="26" fill="#4A3222" />
                  <path d="M15 30 Q50 45 85 30" stroke="#281A11" strokeWidth="5" fill="none" />
                </g>
                {/* Coffee Bean 3 (Small Accent) */}
                <g transform="translate(75, 45) rotate(45) scale(0.25)">
                  <ellipse cx="30" cy="20" rx="28" ry="18" fill="#312015" />
                  <path d="M8 20 Q30 30 52 20" stroke="#1D120B" strokeWidth="3" fill="none" />
                </g>
              </svg>
            </motion.div>

            {/* COFFEE POWDER SPLASH ACCENT (Bubuk kopi di bawah) */}
            <div className="absolute -bottom-8 left-10 w-64 h-24 bg-black/20 rounded-full blur-2xl pointer-events-none z-0" />

          </div>
        </div>

      </div>
    </section>
  );
}