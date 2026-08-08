"use client";

import { motion, Variants } from "framer-motion";
import { Staatliches } from "next/font/google";

// Import Font Staatliches untuk Title "CATEGORIES"
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// Custom Easing
const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Animasi Title (Blur-Fade saat masuk viewport)
const titleVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: customEase },
  },
};

// 2. Container Grid Stagger
const gridVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// 3. Animasi Item Kategori (Fade In Bertahap)
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: customEase },
  },
};

const categories = [
  {
    number: "01.",
    title: "COMPANY PROFILE",
    description:
      "Website profesional untuk perusahaan, UMKM, startup, dan corporate.",
  },
  {
    number: "02.",
    title: "LANDING PAGE",
    description:
      "Template promosi produk, event, jasa, dan campaign marketing.",
  },
  {
    number: "03.",
    title: "PORTFOLIO",
    description:
      "Template personal branding, agency, freelancer, dan creative studio.",
  },
  {
    number: "04.",
    title: "BUSINESS",
    description:
      "Template restoran, retail, property, travel, hingga bisnis lokal.",
  },
];

export default function TemplateCategories() {
  return (
    <section
      id="template-categories"
      className="
        relative
        w-full
        bg-[#EAEAEA]
        text-slate-950
        font-sans
        select-none
        overflow-hidden
        py-16 sm:py-20 lg:py-24
        px-6 sm:px-12 lg:px-16
      "
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* ── 1. HEADER TITLE "CATEGORIES" RAKSASA ── */}
        <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`
              ${staatliches.className}
              uppercase
              tracking-tight
              leading-none
              text-[clamp(4.5rem,14vw,12.5rem)]
              text-[#111111]
            `}
          >
            CATEGORIES
          </motion.h2>
        </div>

        {/* ── 2. GRID 2 COLUMNS DENGAN DIVIDER (PERSIS REFERENSI) ── */}
        <motion.div
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16"
        >
          {categories.map((item, index) => {
            // Memberikan border-t (garis atas) untuk 2 item di baris bawah (index >= 2)
            const isBottomRow = index >= 2;

            return (
              <motion.div
                key={item.title}
                variants={itemVariant}
                className={`
                  flex flex-col justify-start pt-6
                  ${isBottomRow ? "border-t border-slate-350 sm:pt-10" : ""}
                `}
              >
                {/* HEADLINE: NUMBER + TITLE */}
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#111111] shrink-0">
                    {item.number}
                  </span>

                  <h3 className="font-sans font-bold text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#111111]">
                    {item.title}
                  </h3>
                </div>

                {/* DESKRIPSI SINGKAT */}
                <p className="mt-2 sm:mt-3 font-sans font-normal text-sm sm:text-base lg:text-lg leading-relaxed text-slate-800 max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}