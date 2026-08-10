"use client";

import { useRef } from "react";
import { Cormorant_Garamond, Radley } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";

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

const customItems = [
  "Your Logo",
  "Brand Colors",
  "Typography",
  "Menu & Products",
  "Categories",
  "Additional Pages",
  "Payment Integration",
  "Reservation System",
  "Loyalty Program",
  "POS Integration",
  "Membership",
  "WhatsApp Integration",
];

export default function Customization() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftHeaderRef = useRef<HTMLDivElement>(null);
  const itemsGridRef = useRef<HTMLDivElement>(null);
  const rightLogoRef = useRef<HTMLDivElement>(null);

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

      // Left Header Reveal
      if (leftHeaderRef.current) {
        tl.fromTo(
          leftHeaderRef.current,
          { opacity: 0, y: -30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // Feature Pills Staggered Entrance
      if (itemsGridRef.current) {
        tl.fromTo(
          itemsGridRef.current.children,
          { opacity: 0, x: -25, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Right Brand Logo Entrance
      if (rightLogoRef.current) {
        tl.fromTo(
          rightLogoRef.current,
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
      id="customization"
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-r
        from-[#413023]
        via-[#624F40]
        to-[#8C7A6A]
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
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* ── 3. LEFT COLUMN: TITLES & CUSTOMIZABLE PILLS GRID ── */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* HEADER SECTION */}
          <div ref={leftHeaderRef} className="mb-8">
            <span className={`${radley.className} text-sm sm:text-base text-white/70 font-semibold tracking-wider uppercase block mb-2`}>
              100% Costumizable
            </span>

            <h2
              className={`
                ${cormorant.className}
                text-5xl sm:text-6xl lg:text-7xl
                font-bold
                text-[#FFFBEB]
                leading-[1.08]
                tracking-wide
              `}
            >
              Your Brand<br />
              Your Identity
            </h2>
          </div>

          {/* PILLS GRID (2 COLUMNS) */}
          <div
            ref={itemsGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-xl"
          >
            {customItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 3 }}
                transition={{ duration: 0.2 }}
                className="
                  bg-[#FFFBEB]
                  text-slate-900
                  px-4 py-3
                  rounded-full
                  shadow-md
                  flex
                  items-center
                  gap-3
                "
              >
                <div className="text-[#8C5E3C] shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>

                <span className={`${radley.className} text-xs sm:text-sm font-bold text-slate-900 truncate`}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── 4. RIGHT COLUMN: XORA COFFEE BRAND DISPLAY ── */}
        <div
          ref={rightLogoRef}
          className="lg:col-span-6 flex flex-col items-center justify-center text-center mt-10 lg:mt-0"
        >
          {/* COFFEE CUP ILLUSTRATION */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-32 h-24 sm:w-44 sm:h-32 mb-6"
          >
            <svg
              viewBox="0 0 100 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#FFFBEB] drop-shadow-xl"
            >
              {/* Steam Lines */}
              <path
                d="M35 15C35 10 40 5 40 0M50 18C50 12 55 6 55 0M65 15C65 10 70 5 70 0"
                stroke="#FFFBEB"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Cup Body */}
              <path
                d="M20 25H80L73 60C72 65 65 70 50 70C35 70 28 65 27 60L20 25Z"
                fill="#FFFBEB"
              />
              {/* Saucer Plate */}
              <ellipse cx="50" cy="73" rx="40" ry="5" fill="#D2B596" />
              {/* Cup Handle */}
              <path
                d="M80 32C88 32 92 38 90 46C88 52 82 55 76 54"
                stroke="#FFFBEB"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* GIANT BRAND TEXT "XORA COFFEE" */}
          <h1
            className={`
              ${cormorant.className}
              text-5xl sm:text-7xl lg:text-8xl
              font-normal
              uppercase
              tracking-wider
              text-[#FFFBEB]
              drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              whitespace-nowrap
            `}
          >
            XORA COFFEE
          </h1>
        </div>

      </div>
    </section>
  );
}