"use client";

import { useRef } from "react";
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

const statusColumns = [
  {
    status: "PREPARING",
    tables: [
      {
        tableName: "Table 1 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
      {
        tableName: "Table 2 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
    ],
  },
  {
    status: "READY",
    tables: [
      {
        tableName: "Table 1 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
      {
        tableName: "Table 2 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
    ],
  },
  {
    status: "COMPLETE",
    tables: [
      {
        tableName: "Table 1 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
      {
        tableName: "Table 2 :",
        items: [
          { name: "Matcha Latte", qty: "x 2" },
          { name: "Espressso", qty: "x 4" },
        ],
      },
    ],
  },
];

export default function OrderPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

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

      // Header Fade Down
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // Status Columns Staggered Slide Up
      if (columnsRef.current) {
        tl.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Today's Summary Card Reveal
      if (summaryRef.current) {
        tl.fromTo(
          summaryRef.current,
          { opacity: 0, x: 40, filter: "blur(8px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="live-order"
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-r
        from-[#3B281B]
        via-[#624D3E]
        to-[#8E7D6B]
        text-[#FFFBEB]
        py-12 sm:py-16 lg:py-20
        px-6 sm:px-12 lg:px-16
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
      "
    >
      <div className="w-full max-w-[1600px] mx-auto my-auto flex flex-col justify-between h-full min-h-[85vh]">
        
        {/* ── 3. HEADER & ORNAMENTS ── */}
        <div ref={headerRef} className="w-full mb-8 sm:mb-12">
          
          {/* TOP ORNAMENTS (Bintang / Bunga Symbol) */}
          <div className="flex items-center justify-between w-full text-white/80 text-xl sm:text-2xl mb-2">
            <span className="tracking-widest">✦ ✦ ✦</span>
            <span className="tracking-widest">✦ ✦</span>
          </div>

          {/* MAIN TITLE */}
          <h2
            className={`
              ${cormorant.className}
              text-5xl sm:text-7xl lg:text-8xl
              font-normal
              uppercase
              tracking-wider
              text-[#FFFBEB]
              leading-tight
            `}
          >
            LIVE ORDER SYSTEM
          </h2>
        </div>

        {/* ── 4. MAIN CONTENT GRID (3 COLUMNS STATUS + SUMMARY PANEL) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full my-auto">
          
          {/* LEFT 3 STATUS COLUMNS + DESCRIPTION */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            
            {/* 3 COLUMNS BOARD */}
            <div
              ref={columnsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full"
            >
              {statusColumns.map((col, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="
                    bg-[#523E30]/90
                    backdrop-blur-sm
                    p-5 sm:p-6
                    rounded-none
                    border
                    border-[#6B5443]/40
                    shadow-xl
                    flex
                    flex-col
                    min-h-[280px]
                    sm:min-h-[340px]
                  "
                >
                  {/* COLUMN HEADER */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    {/* Coffee Cup Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-6 h-6 text-[#E6D5C3]"
                    >
                      <path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                      <path d="M6 2v2M10 2v2M14 2v2" strokeLinecap="round" />
                    </svg>

                    <span
                      className={`
                        ${radley.className}
                        text-xs sm:text-sm
                        uppercase
                        tracking-widest
                        text-[#FFFBEB]
                        font-medium
                      `}
                    >
                      {col.status}
                    </span>
                  </div>

                  {/* TABLES ORDER LIST */}
                  <div className="space-y-5 text-[#E6D5C3]">
                    {col.tables.map((table, tIdx) => (
                      <div key={tIdx} className="space-y-1">
                        <h4 className={`${radley.className} text-xs sm:text-sm font-semibold text-[#FFFBEB]`}>
                          {table.tableName}
                        </h4>

                        <div className="space-y-0.5 pl-0.5">
                          {table.items.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="flex items-center justify-between text-[11px] sm:text-xs font-mono opacity-85"
                            >
                              <span>{item.name}</span>
                              <span className="text-white/60">{item.qty}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>

            {/* DESCRIPTION TEXT BELOW COLUMNS */}
            <p
              className={`
                ${radley.className}
                mt-8 sm:mt-12
                text-lg sm:text-2xl lg:text-3xl
                text-[#E6D5C3]
                leading-relaxed
                max-w-3xl
                opacity-90
              `}
            >
              This template includes an interactive ordering flow,
              allowing customers to place orders while staff can
              easily manage incoming requests.
            </p>

          </div>

          {/* RIGHT COLUMN: TODAY'S SUMMARY PANEL */}
          <div ref={summaryRef} className="lg:col-span-4 w-full">
            <div
              className="
                bg-[#503A2B]
                p-8 sm:p-10 lg:p-12
                rounded-none
                border
                border-[#684F3D]/50
                shadow-2xl
                flex
                flex-col
                justify-between
                min-h-[380px]
                sm:min-h-[460px]
              "
            >
              {/* SUMMARY TITLE */}
              <h3
                className={`
                  ${cormorant.className}
                  text-3xl sm:text-4xl lg:text-5xl
                  uppercase
                  tracking-wide
                  text-[#FFFBEB]
                  leading-none
                  mb-8
                  border-b
                  border-white/10
                  pb-4
                `}
              >
                TODAY<br />
                SUMMARY
              </h3>

              {/* STATS LIST */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Stat 1: Total Orders */}
                <div>
                  <p className={`${radley.className} text-base sm:text-lg text-[#E6D5C3]`}>
                    Total Orders
                  </p>
                  <h4 className={`${cormorant.className} text-3xl sm:text-4xl font-normal text-[#FFFBEB] mt-1`}>
                    25
                  </h4>
                </div>

                {/* Stat 2: Completed */}
                <div>
                  <p className={`${radley.className} text-base sm:text-lg text-[#E6D5C3]`}>
                    Completed
                  </p>
                  <h4 className={`${cormorant.className} text-3xl sm:text-4xl font-normal text-[#FFFBEB] mt-1`}>
                    18
                  </h4>
                </div>

                {/* Stat 3: Revenue */}
                <div>
                  <p className={`${radley.className} text-base sm:text-lg text-[#E6D5C3]`}>
                    Revenue
                  </p>
                  <h4 className={`${cormorant.className} text-3xl sm:text-4xl font-normal text-[#FFFBEB] mt-1`}>
                    Rp2.350.00
                  </h4>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}