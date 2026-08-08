"use client";

import { useState } from "react";
import { Staatliches } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Import Font Staatliches dari Google Fonts untuk Judul
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

const faqs = [
  {
    question: "BERAPA LAMA PEMBUATAN WEBSITE ?",
    answer:
      "Rata-rata 7–21 hari kerja tergantung kompleksitas project dan revisi yang dibutuhkan.",
  },
  {
    question: "APAKAH WEBSITE BISA DIUBAH SESUAI KEBUTUHAN BISNIS ?",
    answer:
      "Ya. Semua website dan sistem yang kami bangun dapat disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    question: "APAKAH SUDAH TERMASUK DOMAIN DAN HOSTING ?",
    answer:
      "Paket tertentu sudah termasuk domain dan hosting. Detailnya dapat didiskusikan saat konsultasi.",
  },
  {
    question: "APAKAH SETELAH PROJECT SELESAI MASIH MENDAPAT SUPPORT ?",
    answer:
      "Ya. Kami menyediakan support dan maintenance sesuai paket yang dipilih.",
  },
  {
    question: "BISAKAH MEMBUAT SISTEM KHUSUS SELAIN WEBSITE ?",
    answer:
      "Bisa. Kami juga mengembangkan sistem bisnis berbasis web seperti stock management, POS, dashboard, hingga sistem operasional perusahaan.",
  },
];

// Custom Easing
const cubicEase = [0.16, 1, 0.3, 1] as const;

// Variant Animasi untuk Teks Jawaban di Kanan
const answerFadeVariant: Variants = {
  initial: { opacity: 0, y: 15, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: cubicEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: { duration: 0.2, ease: cubicEase },
  },
};

export default function FAQ() {
  // Default terdefinisi di indeks 0 (pertanyaan pertama aktif)
  const [active, setActive] = useState<number>(0);

  const activeFaq = faqs[active];

  return (
    <section
      id="faq"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-slate-900
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
      "
    >
      {/* ── 1. BANNER MERAH DI POJOK KANAN ATAS (PERSIS REFERENSI) ── */}
      <div className="w-full flex justify-end">
        <div className="w-1/2 h-10 sm:h-14 lg:h-16 bg-[#E52323]" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 flex-grow flex flex-col justify-between">
        
        {/* ── 2. HEADER SECTION (TITLE KIRI & OUTLINE FAQ KANAN) ── */}
        <div className="w-full pb-6 border-b border-[#E52323] mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            
            {/* TITLE KIRI */}
            <h2
              className={`${staatliches.className} uppercase tracking-tight text-4xl sm:text-6xl lg:text-7xl text-slate-950 leading-[0.9] max-w-xl`}
            >
              PERTANYAAN YANG SERING DITANYAKAN
            </h2>

            {/* OUTLINE TEXT "FAQ" KANAN */}
            <span
              className={`
                ${staatliches.className}
                uppercase
                text-6xl sm:text-8xl lg:text-9xl
                leading-none
                text-transparent
                [-webkit-text-stroke:2px_#334155]
                opacity-60
                self-end
              `}
            >
              FAQ
            </span>

          </div>
        </div>

        {/* ── 3. MAIN CONTENT GRID (KIRI: LIST PERTANYAAN, KANAN: JAWABAN) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start flex-grow my-auto">
          
          {/* ========================================================= */}
          {/* KOLOM KIRI: BOX PERTANYAAN (KLIK UNTUK MEMBERI WARNA MERAH)*/}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col space-y-3.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isSelected = active === index;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`
                    w-full
                    text-left
                    p-4 sm:p-5 lg:p-6
                    transition-all
                    duration-200
                    font-sans
                    font-extrabold
                    text-sm sm:text-base lg:text-lg
                    uppercase
                    tracking-tight
                    rounded-none
                    ${
                      isSelected
                        ? "bg-[#E52323] text-white shadow-md border-transparent"
                        : "bg-white text-slate-900 border border-slate-900 hover:border-[#E52323] hover:text-[#E52323]"
                    }
                  `}
                >
                  {faq.question}
                </button>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN: AREA JAWABAN DENGAN GARIS PEMBATAS VERTIKAL  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 lg:border-l lg:border-[#E52323] lg:pl-12 pt-4 lg:pt-0 min-h-[260px] sm:min-h-[320px] flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={answerFadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <p className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-snug text-slate-900">
                  {activeFaq.answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* FOOTER SIDE LABEL MINIMALIS */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pb-6 text-slate-400 font-mono text-xs uppercase tracking-widest">
        XORA FAQ SECTION 2026
      </div>
    </section>
  );
}