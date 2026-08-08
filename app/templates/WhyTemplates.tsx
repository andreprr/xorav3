"use client";

import {
  Zap,
  ShieldCheck,
  Smartphone,
  RefreshCcw,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Staatliches } from "next/font/google";

// Custom Easing
const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Animasi Title "WHY XORA" (Slide Up + Soft Blur)
const titleVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
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

// 3. Animasi Kartu Fitur (Scale Up + Slide Up)
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 45, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: customEase },
  },
};

// Import Font Staatliches untuk Header "WHY XORA"
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

const features = [
  {
    icon: Zap,
    title: "Pengerjaan Lebih Cepat",
    description:
      "Gunakan template yang sudah dirancang secara profesional sehingga proses development menjadi jauh lebih cepat.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description:
      "Semua template dioptimalkan untuk desktop, tablet, dan smartphone dengan tampilan yang konsisten.",
  },
  {
    icon: ShieldCheck,
    title: "SEO Friendly",
    description:
      "Struktur website dibuat mengikuti standar SEO sehingga lebih mudah ditemukan di mesin pencari.",
  },
  {
    icon: RefreshCcw,
    title: "Mudah Dikembangkan",
    description:
      "Template dapat dikustomisasi dan dikembangkan sesuai kebutuhan bisnis Anda di masa mendatang.",
  },
];

export default function WhyTemplates() {
  return (
    <section
      id="why-templates"
      className="
        relative
        w-full
        bg-[#EAEAEA]
        text-slate-950
        font-sans
        select-none
        overflow-hidden
        py-16 sm:py-24 lg:py-28
        px-6 sm:px-12 lg:px-16
      "
    >
      <div className="mx-auto max-w-[1500px]">
        
        {/* ── 1. HEADER TITLE "WHY XORA" RAKSASA ── */}
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
              text-[clamp(4.5rem,15vw,13.5rem)]
              text-[#111111]
            `}
          >
            WHY XORA
          </motion.h2>
        </div>

        {/* ── 2. FEATURE CARDS GRID 2x2 (MATCHING REFERENCE) ── */}
        <motion.div
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariant}
                className="
                  flex
                  flex-col
                  items-start
                  p-8 sm:p-10 lg:p-12
                  rounded-[2rem]
                  bg-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.02)]
                  border
                  border-slate-200/50
                  transition-all
                  duration-300
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
              >
                {/* IKON HITAM DALAM KOTAK MEMBULAT HALUS */}
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-black text-white shrink-0">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
                </div>

                {/* JUDUL FITUR */}
                <h3 className="mt-6 sm:mt-8 font-sans font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  {feature.title}
                </h3>

                {/* DESKRIPSI FITUR */}
                <p className="mt-3 sm:mt-4 font-sans font-normal text-sm sm:text-base leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}