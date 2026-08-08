"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ChevronUp } from "lucide-react";
import { products, ProductItem } from "./productData";

// Batas maksimal angka yang tampil di sidebar merah (kanan)
const MAX_SIDEBAR_ITEMS = 6;

// Custom Easing Tuple (as const agar valid untuk TypeScript Framer Motion)
const cubicEase = [0.16, 1, 0.3, 1] as const;

// 1. Animasi Masuk dari Kiri ke Kanan untuk Title "XORA SERVICES"
const slideFromLeftVariant: Variants = {
  hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: cubicEase },
  },
};

// 2. Animasi Merge (Blur + Fade + Slide Up) untuk Deskripsi
const mergeAnimation: Variants = {
  initial: { opacity: 0, y: 14, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: cubicEase },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: cubicEase },
  },
};

export default function ProductPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const activeProduct: ProductItem = products[activeIndex] || products[0];

  // Slice data produk untuk sidebar kanan (maksimal 6 angka)
  const visibleProducts = products.slice(
    startIndex,
    startIndex + MAX_SIDEBAR_ITEMS
  );

  const hasMoreBelow = startIndex + MAX_SIDEBAR_ITEMS < products.length;
  const hasMoreAbove = startIndex > 0;

  const handleNextPage = () => {
    if (hasMoreBelow) {
      const nextStart = startIndex + 1;
      setStartIndex(nextStart);
      if (activeIndex < nextStart) {
        setActiveIndex(nextStart);
      }
    } else {
      setStartIndex(0);
      setActiveIndex(0);
    }
  };

  const handlePrevPage = () => {
    if (hasMoreAbove) {
      const prevStart = startIndex - 1;
      setStartIndex(prevStart);
      if (activeIndex > prevStart + MAX_SIDEBAR_ITEMS - 1) {
        setActiveIndex(prevStart + MAX_SIDEBAR_ITEMS - 1);
      }
    }
  };

  return (
    <section
      id="products"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-slate-900
        font-sans
        flex
        flex-col
        justify-between
        select-none
      "
    >
      <div className="w-full flex-grow flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-stretch flex-grow">
          
          {/* ========================================================= */}
          {/* MAIN CONTENT AREA (KOLOM KIRI + TENGAH = 11 KOLOM)       */}
          {/* ========================================================= */}
          <div className="lg:col-span-11 flex flex-col justify-between p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
            
            {/* ── 1. TOP HEADER SECTION (ANIMASI KIRI-KE-KANAN & MERGE) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 sm:pb-10 border-b border-slate-200">
              
              {/* TOP KIRI: TITLE "XORA -02 SERVICES" (ANIMASI MASUK DARI KIRI KE KANAN) */}
              <div className="lg:col-span-6 overflow-hidden">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideFromLeftVariant}
                >
                  <h1 className="font-sans font-black uppercase tracking-[-0.05em] leading-[0.82] text-[clamp(2.8rem,6.8vw,6.2rem)] text-slate-800">
                    <span className="block">
                      XORA <span className="text-[#00C853] font-extrabold">-02</span>
                    </span>
                    <span className="block text-slate-800">SERVICES</span>
                  </h1>
                </motion.div>
              </div>

              {/* TOP KANAN: SLASHED GRAPHIC & DESKRIPSI (ANIMASI MERGE) */}
              <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2">
                {/* Slanted Graphic Bars (///////) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideFromLeftVariant}
                  className="flex items-center gap-1.5 text-slate-900"
                >
                  {[...Array(7)].map((_, i) => (
                    <span
                      key={i}
                      className="h-7 sm:h-8 w-2 sm:w-2.5 bg-slate-900 -skew-x-[25deg] inline-block"
                    />
                  ))}
                  <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 bg-slate-900 inline-block ml-1 self-end mb-0.5" />
                </motion.div>

                {/* Deskripsi Header (Animasi Merge saat Masuk Viewport) */}
                <motion.p
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={mergeAnimation}
                  className="font-sans text-sm sm:text-base lg:text-[1.05rem] font-semibold text-slate-700 leading-relaxed w-full max-w-2xl"
                >
                  XORA menghadirkan solusi digital modern untuk membantu UMKM, startup, dan bisnis berkembang lebih cepat melalui website premium, template siap pakai, sistem bisnis custom, serta automation yang dirancang sesuai kebutuhan.
                </motion.p>
              </div>

            </div>

            {/* ── 2. DUAL COLUMN PRODUCT SHOWCASE (BERGANTI SESUAI ANGKA DIKLIK) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 sm:pt-10 flex-grow">
              
              {/* KOLOM KIRI: SHOWCASE GAMBAR MOCKUP PRODUK */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[420px] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`img-${activeProduct.id}`}
                      variants={mergeAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center"
                    >
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.title}
                        fill
                        priority
                        className="object-contain p-2 sm:p-4"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* KOLOM TENGAH: DETAIL PRODUK (TITLE & DESKRIPSI UTAMA) */}
              <div className="lg:col-span-6 flex flex-col justify-center items-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`detail-${activeProduct.id}`}
                    variants={mergeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    {/* Title Produk Raksasa */}
                    <h2 className="font-sans font-black uppercase text-3xl sm:text-5xl lg:text-6xl tracking-tighter text-slate-900 leading-none">
                      {activeProduct.title}
                    </h2>

                    {/* Badges / Meta Categories */}
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5">
                      <span className="rounded-sm bg-slate-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200">
                        {activeProduct.category}
                      </span>
                      <span className="rounded-sm bg-slate-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200">
                        {activeProduct.delivery}
                      </span>
                    </div>

                    {/* Deskripsi Lengkap Produk */}
                    <p className="mt-6 font-sans text-sm sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-600 max-w-2xl">
                      {activeProduct.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* PANEL MERAH SIDEBAR KANAN (PANEL ANGKA 01 - 06 + PANAH)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-1 bg-[#E52323] text-white flex lg:flex-col items-center justify-between p-4 sm:p-6 lg:py-12 border-t lg:border-t-0 border-red-700">
            
            {/* Panah Atas jika ada halaman sebelumnya */}
            {hasMoreAbove && (
              <button
                onClick={handlePrevPage}
                className="hidden lg:flex items-center justify-center p-1.5 hover:bg-red-700 rounded transition-colors mb-2"
                title="Previous list"
              >
                <ChevronUp className="h-6 w-6 text-white" />
              </button>
            )}

            {/* List Angka Vertikal (-01, -02, -03, dst) */}
            <div className="flex lg:flex-col items-center justify-center gap-3 sm:gap-6 w-full my-auto">
              {visibleProducts.map((item, localIdx) => {
                const actualIndex = startIndex + localIdx;
                const isActive = actualIndex === activeIndex;
                const formattedNumber = `-${String(actualIndex + 1).padStart(2, "0")}`;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(actualIndex)}
                    className="group relative w-full flex items-center justify-center py-1 transition-all"
                  >
                    <span
                      className={`
                        font-sans font-bold text-xl sm:text-2xl lg:text-3xl tracking-wider transition-all duration-300
                        ${
                          isActive
                            ? "text-white scale-125 font-black drop-shadow-lg"
                            : "text-white/60 hover:text-white hover:scale-110"
                        }
                      `}
                    >
                      {formattedNumber}
                    </span>

                    {/* Indicator Garis Aktif */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSideBarIndicator"
                        className="absolute bottom-0 lg:bottom-auto lg:right-0 h-0.5 lg:h-full w-full lg:w-1.5 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tombol Panah Bawah */}
            <div className="flex items-center justify-center mt-2 lg:mt-6">
              <button
                onClick={handleNextPage}
                className="p-2.5 rounded-full hover:bg-red-700 transition-all active:scale-90"
                title={hasMoreBelow ? "Next products" : "Loop back to start"}
              >
                <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-bounce" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}