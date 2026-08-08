"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Staatliches } from "next/font/google";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Title "TESTIMONIALS"
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Maju Bersama",
    quote:
      "XORA berhasil membuat website perusahaan kami terlihat jauh lebih profesional. Proses cepat dan hasilnya melebihi ekspektasi.",
  },
  {
    name: "Rina Putri",
    company: "Resto Nusantara",
    quote:
      "Desain modern, loading cepat, dan pelanggan lebih percaya dengan bisnis kami setelah website baru selesai.",
  },
  {
    name: "Andi Saputra",
    company: "Digital Startup",
    quote:
      "Komunikasi mudah, revisi cepat, dan hasil akhirnya benar-benar premium.",
  },
];

// Slide transition carousel (direction-aware) dengan premium easing
const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 90 : -90,
    opacity: 0,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -90 : 90,
    opacity: 0,
    filter: "blur(8px)",
  }),
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // State untuk Carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // ── AUTO-ADVANCE CAROUSEL (reset timer setiap slide berubah) ──
  useEffect(() => {
    const id = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(id);
  }, [currentIndex]);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Cards Container Entrance
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            willChange: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const active = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="
        relative
        w-full
        bg-white
        text-slate-900
        font-sans
        select-none
        overflow-hidden
        pb-20 sm:pb-28
      "
    >
      {/* ── 1. HEADER SECTION (GRADIENT BANNER + TITLE "TESTIMONIALS" + HANDWRITING) ── */}
      <div
        ref={headerRef}
        className="
          relative
          w-full
          h-[260px] sm:h-[340px] lg:h-[400px]
          bg-gradient-to-r
          from-[#C5F8A2]
          via-[#92E0FE]
          to-[#818CF8]
          flex
          flex-col
          justify-between
          p-6 sm:p-10 lg:p-14
        "
      >
        {/* GIANT TITLE "TESTIMONIALS" */}
        <h2
          className={`
            ${staatliches.className}
            uppercase
            tracking-tight
            leading-none
            text-[clamp(4.2rem,15vw,13.5rem)]
            text-white
            drop-shadow-sm
            whitespace-nowrap
            mt-auto
          `}
        >
          TESTIMONIALS
        </h2>

        {/* HANDWRITING SCRIPT "Trusted by Client" MENUMPANG DI POJOK KIRI BAWAH HEADER */}
        <div className="absolute left-6 sm:left-12 lg:left-16 -bottom-6 sm:-bottom-8 z-10">
          <span
            className="
              font-serif
              italic
              text-slate-950
              text-3xl sm:text-5xl lg:text-6xl
              font-normal
              tracking-tight
              leading-none
              block
            "
            style={{ fontFamily: "'Caveat', 'Dancing Script', cursive, serif" }}
          >
            Trusted by Client
          </span>
        </div>
      </div>

      {/* ── 2. CAROUSEL SLIDER SHOWCASE (CARD PUTIH MEMBULAT + NAVIGASI PANAH MERAH) ── */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 mt-16 sm:mt-20">
        
        <div
          ref={containerRef}
          className="
            relative
            w-full
            bg-[#F4F6F9]
            rounded-[2.5rem]
            p-6 sm:p-10 lg:p-12
            flex
            items-center
            justify-between
            gap-4 sm:gap-6
          "
        >
          {/* TOMBOL PANAH KIRI (MERAH) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="
              shrink-0
              p-2.5 sm:p-3.5
              rounded-full
              text-[#E52323]
              hover:bg-[#E52323]/10
              transition-colors
              z-10
            "
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="h-6 w-6 sm:h-8 sm:w-8 stroke-[3]" />
          </motion.button>

          {/* SLIDE CAROUSEL (SINGLE TESTIMONIAL + TRANSISI SLIDE) */}
          <div className="flex-1 w-full min-w-0">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={active.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="flex flex-col justify-between rounded-[2rem] bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 min-h-[280px] sm:min-h-[300px]">
                  <div>
                    {/* BINTANG 5 KUNING DENGAN STAR GLOW */}
                    <div className="relative flex gap-1 text-amber-400 mb-5">
                      <motion.div
                        aria-hidden
                        className="absolute -inset-2 rounded-full bg-amber-300/60 blur-lg"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.8, 0.35] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          className="stroke-none relative z-10"
                        />
                      ))}
                    </div>

                    {/* QUOTE TEXT */}
                    <p className="font-sans font-medium text-sm sm:text-base leading-relaxed text-slate-700">
                      "{active.quote}"
                    </p>
                  </div>

                  {/* USER PROFILE */}
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <h4 className="font-sans font-black text-base sm:text-lg text-slate-950">
                      {active.name}
                    </h4>
                    <p className="font-sans font-medium text-xs sm:text-sm text-slate-500 mt-0.5">
                      {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TOMBOL PANAH KANAN (MERAH) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="
              shrink-0
              p-2.5 sm:p-3.5
              rounded-full
              text-[#E52323]
              hover:bg-[#E52323]/10
              transition-colors
              z-10
            "
            aria-label="Next Testimonial"
          >
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 stroke-[3]" />
          </motion.button>

        </div>

        {/* ── 3. DOTS INDICATOR ── */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-[#E52323]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
