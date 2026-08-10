"use client";

import { useRef } from "react";
import { Cormorant_Garamond, Radley } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShoppingCart,
  CreditCard,
  Smartphone,
  MapPin,
  MessageCircle,
  Zap,
  Search,
  Palette,
} from "lucide-react";

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

const features = [
  {
    icon: ShoppingCart,
    title: "Online Ordering",
    desc: "Customers can order directly from the website.",
  },
  {
    icon: CreditCard,
    title: "Payment Ready",
    desc: "Supports QRIS, Bank Transfer and Cards.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Optimized for desktop, tablet and mobile.",
  },
  {
    icon: MapPin,
    title: "Google Maps",
    desc: "Show your store location with one click.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Direct chat with customers instantly.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    desc: "Optimized performance for better experience.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    desc: "Built with search engine optimization.",
  },
  {
    icon: Palette,
    title: "Easy Customization",
    desc: "Logo, colors, menu and content can be changed.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftHeaderRef = useRef<HTMLDivElement>(null);
  const rightGridRef = useRef<HTMLDivElement>(null);

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

      // Left Title Entrance
      if (leftHeaderRef.current) {
        tl.fromTo(
          leftHeaderRef.current,
          { opacity: 0, x: -40, filter: "blur(8px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
        );
      }

      // Right Cards Staggered Reveal
      if (rightGridRef.current) {
        tl.fromTo(
          rightGridRef.current.children,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
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
      id="features"
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-r
        from-[#453326]
        via-[#614E40]
        to-[#817060]
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
        
        {/* ── 3. LEFT COLUMN: BIG TITLE & TAGLINE ── */}
        <div ref={leftHeaderRef} className="lg:col-span-5 flex flex-col justify-center">
          
          {/* TAGLINE */}
          <span className={`${radley.className} text-sm sm:text-base text-white/70 font-semibold tracking-wider uppercase mb-3`}>
            Everything Included
          </span>

          {/* MAIN GIANT TITLE */}
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
            Everything You<br />
            Need<br />
            To Launch Your<br />
            Coffee Shop
          </h2>

        </div>

        {/* ── 4. RIGHT COLUMN: 2x4 FEATURE CARDS GRID ── */}
        <div
          ref={rightGridRef}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-[#FFFBEB]
                  text-slate-900
                  p-5 sm:p-6
                  rounded-2xl sm:rounded-3xl
                  shadow-xl
                  flex
                  flex-col
                  justify-between
                  min-h-[170px]
                  sm:min-h-[190px]
                "
              >
                {/* ICON CONTAINER */}
                <div className="w-10 h-10 rounded-xl bg-[#F6EBE1] flex items-center justify-center text-[#96613A]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                {/* TITLE & DESCRIPTION */}
                <div className="mt-4">
                  <h3 className={`${radley.className} text-base sm:text-lg font-bold text-slate-900 leading-snug`}>
                    {feature.title}
                  </h3>

                  <p className={`${radley.className} mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3`}>
                    {feature.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}