"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Staatliches } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Import Asset Gambar Portofolio
import companyProfileImg from "./assets/company-profile.webp";
import landingPageImg from "./assets/landing-page.webp";
import dashboardSystemImg from "./assets/dashboard-system.webp";

// Import Font Staatliches dari Google Fonts
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: any;
  slug: string;
}

const portfolios: PortfolioItem[] = [
  {
    id: 1,
    title: "WEBSITE COMPANY PROFILE",
    category: "Corporate Website",
    description:
      "DESAIN PROFESIONAL DAN MODERN UNTUK MENINGKATKAN KEPERCAYAAN CLIENT SECARA SIGNIFIKAN",
    image: companyProfileImg,
    slug: "/portfolio/company-profile",
  },
  {
    id: 2,
    title: "LANDING PAGE PRODUK",
    category: "Marketing Website",
    description:
      "HALAMAN PENAWARAN TINGGI KONVERSI DENGAN EFEK INTERAKTIF YANG HALUS DAN MEMIKAT",
    image: landingPageImg,
    slug: "/portfolio/landing-page",
  },
  {
    id: 3,
    title: "DASHBOARD SISTEM BISNIS",
    category: "Business System",
    description:
      "USER INTERFACE INTUITIF UNTUK MANAJEMEN DATA & ANALITIK REAL-TIME YANG KOMPLEKS",
    image: dashboardSystemImg,
    slug: "/portfolio/dashboard-system",
  },
];

const TOTAL_SLOTS = 6;

// Animasi Merge untuk Title "RECENT PROJECT"
const mergeTitleVariant: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animasi Masuk Kanan ke Kiri untuk Konten Kiri
const contentSlideVariant: Variants = {
  initial: { opacity: 0, x: 45, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: -25,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject =
    activeIndex !== null ? portfolios[activeIndex] : null;

  return (
    <section
      id="portfolio"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-slate-900
        font-sans
        select-none
        flex
        flex-col
        justify-between
      "
    >
      {/* ── 1. GARIS MERAH ATAS LEBIH LEBAR (POIN 3) ── */}
      <div className="w-full h-8 sm:h-10 lg:h-12 bg-[#E52323]" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 flex-grow flex flex-col justify-between">
        
        {/* ── HEADER SECTION DENGAN FONT STAATLICHES PANJANG & BESAR (POIN 1) ── */}
        <div className="w-full mb-6 sm:mb-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={mergeTitleVariant}
            className={`${staatliches.className} uppercase tracking-tight text-6xl sm:text-8xl lg:text-[7.5rem] text-slate-950 leading-none`}
          >
            RECENT PROJECT
          </motion.h2>

          {/* Garis Pembatas Tipis */}
          <div className="w-full h-[1px] bg-slate-200 mt-3 sm:mt-5" />
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start flex-grow my-auto">
          
          {/* ========================================================= */}
          {/* KOLOM KIRI: SHOWCASE GAMBAR, DESKRIPSI & VIEW BUTTON      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 min-h-[350px] sm:min-h-[480px] flex flex-col justify-between w-full">
            <AnimatePresence mode="wait">
              {activeProject ? (
                <motion.div
                  key={activeProject.id}
                  variants={contentSlideVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full flex flex-col items-start gap-5 sm:gap-6"
                >
                  {/* DESKRIPSI: HURUF BESAR SEMUA TAPI TIDAK BOLD (POIN 2) */}
                  <h3
                    className="
                      font-sans
                      font-normal
                      uppercase
                      tracking-tight
                      text-lg sm:text-2xl lg:text-3xl
                      text-slate-900
                      leading-snug
                      max-w-2xl
                    "
                  >
                    {activeProject.description}
                  </h3>

                  {/* Tombol VIEW */}
                  <Link href={activeProject.slug}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        bg-[#E52323]
                        text-white
                        font-sans
                        font-black
                        text-sm sm:text-base
                        uppercase
                        tracking-wider
                        px-8 sm:px-10
                        py-2.5 sm:py-3
                        shadow-md
                        hover:bg-red-700
                        transition-colors
                      "
                    >
                      VIEW
                    </motion.button>
                  </Link>

                  {/* Gambar Mockup Portofolio */}
                  <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[380px] rounded-sm overflow-hidden border border-slate-200 shadow-lg bg-slate-50 mt-2">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                </motion.div>
              ) : (
                /* Tampilan KOSONG Sebelum Ada Nomor yang Diklik */
                <motion.div
                  key="empty-placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full min-h-[320px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-sm p-8 text-center"
                >
                  <p className="font-sans font-medium text-slate-400 text-sm sm:text-base tracking-widest uppercase">
                    Pilih salah satu project di sebelah kanan
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN: LIST NOMOR (TANPA KOTAK, DITURUNKAN SEJAJAR) */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 w-full pt-2 sm:pt-6 lg:pt-10 flex flex-col justify-between">
            <div className="flex flex-col w-full">
              {[...Array(TOTAL_SLOTS)].map((_, index) => {
                const item = portfolios[index];
                const isSelected = activeIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-full
                      flex
                      items-center
                      py-3.5 sm:py-4.5
                      px-2 sm:px-4
                      border-b
                      border-slate-300/80
                      transition-all
                      duration-200
                      text-left
                      group
                      ${
                        isSelected
                          ? "bg-slate-50/80"
                          : "hover:bg-slate-50/50"
                      }
                    `}
                  >
                    {/* Nomor Merah */}
                    <span className="font-sans font-black text-xl sm:text-2xl text-[#E52323] w-10 sm:w-14 shrink-0">
                      {index + 1}.
                    </span>

                    {/* Judul atau Dash Merah (-) */}
                    {item ? (
                      <span
                        className={`
                          font-sans
                          font-black
                          uppercase
                          tracking-tight
                          text-base sm:text-xl lg:text-2xl
                          transition-colors
                          ${
                            isSelected
                              ? "text-[#E52323]"
                              : "text-slate-900 group-hover:text-[#E52323]"
                          }
                        `}
                      >
                        {item.title}
                      </span>
                    ) : (
                      <span className="font-sans font-black text-xl sm:text-2xl text-[#E52323]">
                        -
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panah Bawah Navigasi */}
            <div className="flex items-center justify-start sm:justify-center pt-6 sm:pt-8 pl-4">
              <button
                onClick={() => {
                  const nextIdx =
                    activeIndex === null
                      ? 0
                      : (activeIndex + 1) % portfolios.length;
                  setActiveIndex(nextIdx);
                }}
                className="p-2 sm:p-3 rounded-full hover:bg-slate-100 transition-all active:scale-90 group"
                title="Next project"
              >
                <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 text-[#E52323] animate-bounce" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}