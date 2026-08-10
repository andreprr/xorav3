"use client";

import { useRef, useState } from "react";
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

const categories = ["MAKANAN", "COFFEE", "NON-COFFEE", "MILKSHAKE"];

const menuList = [
  {
    name: "Caffe Latte",
    image: "/assets/coffee-shop/menu/latte.webp",
    price: "Rp35.000",
    rating: "4.9",
    badge: "BEST SELLER",
    description: "Smooth espresso blended with creamy steamed milk.",
  },
  {
    name: "Espresso",
    image: "/assets/coffee-shop/menu/espresso.webp",
    price: "Rp25.000",
    rating: "4.8",
    badge: "NEW",
    description: "Smooth espresso blended with creamy steamed milk.",
  },
  {
    name: "Caffe Latte",
    image: "/assets/coffee-shop/menu/cappuccino.webp",
    price: "Rp34.000",
    rating: "4.9",
    badge: "BEST SELLER",
    description: "Smooth espresso blended with creamy steamed milk.",
  },
  {
    name: "Espresso",
    image: "/assets/coffee-shop/menu/matcha-latte.webp",
    price: "Rp37.000",
    rating: "4.8",
    badge: "NEW",
    description: "Smooth espresso blended with creamy steamed milk.",
  },
];

export default function PopularMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("COFFEE");

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

      // Header Navigation & Title Fade Down
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: -30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // Cards Staggered Slide Up
      if (cardsRef.current) {
        tl.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative w-full min-h-screen bg-[#1F1714] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 select-none overflow-hidden flex flex-col justify-between"
    >
      {/* ── 3. BACKGROUND IMAGE OVERLAY ── */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/assets/coffee-shop/hero/hero-background.webp"
          alt="Coffee Shop Background"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center opacity-30 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1714]/90 via-[#1F1714]/60 to-[#1F1714]/95" />
      </div>

      {/* ── 4. HEADER: CATEGORIES NAVIGATION & BIG "MENU" TITLE ── */}
      <div ref={headerRef} className="relative z-10 w-full max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-6">
          
          {/* CATEGORIES FILTER */}
          <nav className={`flex flex-wrap items-center gap-6 sm:gap-10 ${radley.className}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  text-sm sm:text-base lg:text-lg uppercase tracking-widest transition-all cursor-pointer
                  ${
                    activeCategory === cat
                      ? "text-white font-bold border-b-2 border-white pb-1"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* GIANT TITLE "MENU" */}
          <h2
            className={`
              ${cormorant.className}
              text-6xl sm:text-7xl lg:text-8xl
              font-normal
              uppercase
              tracking-wider
              text-[#FFFBEB]
              leading-none
            `}
          >
            MENU
          </h2>

        </div>
      </div>

      {/* ── 5. MENU CARDS GRID ── */}
      <div
        ref={cardsRef}
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-auto"
      >
        {menuList.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              w-full
              bg-[#FBF0E8]
              text-slate-900
              rounded-none
              overflow-hidden
              shadow-xl
              flex
              flex-col
              justify-between
            "
          >
            {/* GREEN FLOATING BADGE */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[#10B981] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md block whitespace-nowrap">
                {item.badge}
              </span>
            </div>

            {/* CARD IMAGE CONTAINER */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-stone-200">
              <Image
                src={item.image}
                alt={item.name}
                fill
                quality={90}
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* CARD CONTENT INFO */}
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
              
              {/* TOP INFO: NAME & RATING */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`${cormorant.className} text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight`}>
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 font-sans text-xs font-bold text-slate-800 shrink-0 pt-1">
                    <span>★</span>
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className={`${radley.className} mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2`}>
                  {item.description}
                </p>
              </div>

              {/* BOTTOM INFO: PRICE & +ADD LINK */}
              <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-900/10">
                <span className={`${cormorant.className} text-xl sm:text-2xl font-bold text-slate-900`}>
                  {item.price}
                </span>

                <button
                  className={`${radley.className} text-sm sm:text-base italic text-slate-800 hover:text-emerald-700 transition-colors font-medium cursor-pointer`}
                >
                  +add
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* ── 6. BOTTOM SPACER ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-10 text-center sm:text-left">
        <p className={`${radley.className} text-xs text-white/40 tracking-widest uppercase`}>
          * Prices are inclusive of applicable taxes and service charge.
        </p>
      </div>
    </section>
  );
}