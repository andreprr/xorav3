"use client";

import { useState } from "react";
import Link from "next/link";
import { Staatliches } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ChevronsLeft } from "lucide-react";
import usePricingGsap from "../home/pricing/usePricingGsap";

// Import Font Staatliches dari Google Fonts untuk Judul
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// Custom Easing
const cubicEase = [0.16, 1, 0.3, 1] as const;

// Interface Paket
interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  hasInitialFee?: boolean;
  initialPrice?: string;
  features: string[];
  ctaUrl: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    subtitle: "STARTING FROM",
    price: "1.000.000 IDR",
    features: [
      "COMPANY PROFILE WEBSITE",
      "RESPONSIVE DESIGN",
      "BASIC SEO",
      "FREE DOMAIN",
    ],
    ctaUrl: "/contact?plan=starter",
  },
  {
    id: "business",
    name: "BUSINESS",
    subtitle: "PEMBUATAN AWAL & BULANAN",
    price: "300.000 IDR / bln",
    hasInitialFee: true,
    initialPrice: "500.000 IDR (Awal)",
    features: [
      "LANDING PAGE / COMPANY WEBSITE",
      "CMS DASHBOARD",
      "SEO OPTIMIZATION",
      "3 MONTHS SUPPORT",
    ],
    ctaUrl: "/contact?plan=business",
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    subtitle: "FLEXIBLE PLAN",
    price: "CUSTOM PRICING",
    features: [
      "BUSINESS SYSTEM",
      "ADMIN DASHBOARD",
      "API INTEGRATION",
      "MAINTENANCE & SUPPORT",
    ],
    ctaUrl: "/contact?plan=enterprise",
  },
];

// Variant Animasi Masuk Section (Slide Up + Blur Fade)
const sectionEntranceVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: cubicEase },
  },
};

// Variant Animasi Konten Kiri saat Berganti Paket
const leftContentVariant: Variants = {
  initial: { opacity: 0, x: -30, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: cubicEase },
  },
  exit: {
    opacity: 0,
    x: 20,
    filter: "blur(8px)",
    transition: { duration: 0.25, ease: cubicEase },
  },
};

export default function PricingView() {
  // Hubungkan Hook GSAP Asli
  usePricingGsap();

  // State Pilihan Paket (Default: STARTER)
  const [selectedPlanId, setSelectedPlanId] = useState<string>("starter");

  const activePlan =
    pricingPlans.find((p) => p.id === selectedPlanId) || pricingPlans[0];

  return (
    <section
      id="pricing"
      className="
        relative
        w-full
        min-h-screen
        bg-[#E52323]
        text-white
        font-sans
        overflow-hidden
        select-none
        flex
        flex-col
        justify-between
        py-8 sm:py-12 lg:py-16
      "
    >
      <div className="w-full max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-14 flex-grow flex flex-col justify-center">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionEntranceVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto"
        >
          
          {/* ========================================================= */}
          {/* KOLOM KIRI: TITLE "PRICING" + DETAIL PAKET YANG DIPILIH   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start space-y-6 sm:space-y-8">
            
            {/* A. HEADER "PRICING" + SLASHED BARS (///////) */}
            <div className="w-full border-b border-white/20 pb-6">
              <h1
                className={`${staatliches.className} uppercase tracking-tight leading-[0.82] text-[clamp(4rem,10vw,9.5rem)] text-white drop-shadow-sm`}
              >
                PRICING
              </h1>

              {/* Slanted Graphic Bars (///////) */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-white pt-2">
                {[...Array(9)].map((_, i) => (
                  <span
                    key={i}
                    className="h-5 sm:h-7 w-2 sm:w-2.5 bg-white -skew-x-[25deg] inline-block shadow-sm"
                  />
                ))}
                <span className="h-2 sm:h-3 w-6 sm:w-8 bg-white inline-block ml-1 self-end mb-0.5" />
              </div>
            </div>

            {/* B. DYNAMIC KONTEN PAKET KIRI (BUNGKUSAN BORDER PUTIH MENTOK) */}
            <div className="w-full min-h-[320px] sm:min-h-[380px] border-2 border-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative bg-red-600/20 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan.id}
                  variants={leftContentVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col justify-between h-full space-y-6"
                >
                  <div>
                    {/* Subtitle / Label Pembuat */}
                    <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase">
                      {activePlan.subtitle}
                    </p>

                    {/* Harga Paket */}
                    <div className="mt-1 flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white">
                        {activePlan.price}
                      </h2>
                      {activePlan.hasInitialFee && (
                        <span className="text-xs sm:text-sm font-semibold text-white/80">
                          + {activePlan.initialPrice}
                        </span>
                      )}
                    </div>

                    {/* Fitur List Bullet Point */}
                    <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 font-sans font-bold text-sm sm:text-base lg:text-lg text-white">
                      {activePlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-white shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tombol CTA Start Project Style (Gaya Hero Button) */}
                  <div className="pt-4">
                    <Link href={activePlan.ctaUrl}>
                      <motion.button
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          h-13 sm:h-14
                          px-8 sm:px-10
                          bg-white
                          text-slate-950
                          font-sans
                          font-black
                          text-sm sm:text-base
                          uppercase
                          tracking-wider
                          rounded-none
                          shadow-lg
                          transition-all
                          duration-300
                          hover:bg-slate-100
                        "
                      >
                        <span>START {activePlan.name} PROJECT</span>
                        <ArrowRight className="ml-3 h-5 w-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN: LIST PILIHAN PAKET (OUTLINE vs SOLID WHITE)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0">
            {pricingPlans.map((plan) => {
              const isSelected = plan.id === selectedPlanId;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className="
                    group
                    cursor-pointer
                    flex
                    items-center
                    justify-between
                    py-2 sm:py-4
                    border-b
                    border-white/20
                    transition-all
                    duration-300
                  "
                >
                  {/* PANAH IKON CHEVRONS KIRI (GAYA REFERENSI) */}
                  <div
                    className={`
                      flex items-center justify-center transition-all duration-300
                      ${
                        isSelected
                          ? "opacity-100 translate-x-0 text-white"
                          : "opacity-40 -translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0"
                      }
                    `}
                  >
                    <ChevronsLeft className="h-8 sm:h-12 lg:h-16 w-8 sm:w-12 lg:w-16" />
                  </div>

                  {/* NAMA PAKET: SOLID JIKA TERPILIH, OUTLINE JIKA TIDAK (POIN 3) */}
                  <h3
                    className={`
                      ${staatliches.className}
                      uppercase
                      tracking-tight
                      text-[clamp(3.5rem,8vw,7.5rem)]
                      leading-none
                      transition-all
                      duration-300
                      text-right
                      ${
                        isSelected
                          ? "text-white drop-shadow-md"
                          : "text-transparent [-webkit-text-stroke:2px_white] opacity-80 group-hover:opacity-100 group-hover:[-webkit-text-stroke:2.5px_white]"
                      }
                    `}
                  >
                    {plan.name}
                  </h3>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>

      {/* FOOTER SIDE LABEL MINIMALIS */}
      <div className="w-full max-w-[1650px] mx-auto px-6 sm:px-10 lg:px-14 pt-6 flex items-center justify-between font-mono text-[10px] sm:text-xs text-white/70 uppercase tracking-widest border-t border-white/10 mt-8">
        <span>XORA STUDIO 2026</span>
        <span>PRICING & PLANS SHOWCASE</span>
      </div>
    </section>
  );
}