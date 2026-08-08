"use client";

import { useRef } from "react";
import { Globe, Boxes, MonitorCog } from "lucide-react";
import { Staatliches } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches dari Google Fonts untuk Judul
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    icon: Globe,
    title: "WEBSITE DEVELOPMENT",
    description:
      "Website profesional untuk membangun kredibilitas dan meningkatkan penjualan.",
    products: [
      "COMPANY PROFILE",
      "LANDING PAGE",
      "WEBSITE CATALOG",
      "CUSTOM WEBSITE",
    ],
  },
  {
    icon: Boxes,
    title: "BUSINESS SYSTEM",
    description:
      "Digitalisasi operasional bisnis agar lebih cepat, efisien dan terukur.",
    products: [
      "STOCK MANAGEMENT",
      "INVENTORY SYSTEM",
      "POINT OF SALE (POS)",
      "DASHBOARD ADMIN",
      "SALES MANAGEMENT",
      "REPORTING SYSTEM",
    ],
  },
  {
    icon: MonitorCog,
    title: "CUSTOM DEVELOPMENT",
    description:
      "Membangun sistem berbasis web sesuai kebutuhan bisnis dan workflow perusahaan.",
    products: [
      "CUSTOM DASHBOARD",
      "INTERNAL SYSTEM",
      "API INTEGRATION",
      "ERP SEDERHANA",
    ],
  },
];

export default function ProductList() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ── ANIMASI SCROLLTRIGGER (GSAP) ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animasi Kartu Masuk Bergantian Saat Scroll Ke Bawah
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="product-list"
      className="
        relative
        w-full
        bg-white
        text-slate-900
        font-sans
        py-16 sm:py-24 lg:py-28
        px-6 sm:px-10 lg:px-16
        select-none
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* ── 1. HEADER SECTION (TITLE RED STAATLICHES + DESKRIPSI) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16 lg:mb-20">
          
          {/* KOLOM KIRI: TITLE RAKSASA MERAH */}
          <div className="lg:col-span-7">
            <h2
              className={`${staatliches.className} uppercase tracking-tight leading-[0.82] text-[clamp(3.8rem,9vw,7.8rem)] text-[#E52323]`}
            >
              <span className="block">SOLUSI DIGITAL YANG</span>
              <span className="block">KAMI BANGUN</span>
            </h2>
          </div>

          {/* KOLOM KANAN: DESKRIPSI HEADER */}
          <div className="lg:col-span-5 pt-2 lg:pt-4">
            <p className="font-sans font-bold text-xs sm:text-sm lg:text-base leading-relaxed uppercase tracking-tight text-slate-900 max-w-xl">
              SELURUH LAYANAN XORA DIRANCANG UNTUK MEMBANTU UMKM DAN STARTUP
              MEMBANGUN FONDASI DIGITAL YANG MODERN, SCALABLE, DAN MUDAH
              DIKEMBANGKAN DI MASA DEPAN.
            </p>
          </div>

        </div>

        {/* ── 2. CATEGORY CARDS SHOWCASE (BORDER MERAH SIKU) ── */}
        <div className="space-y-8 sm:space-y-12">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="
                  border
                  border-[#E52323]
                  p-6 sm:p-10 lg:p-12
                  bg-white
                  relative
                  transition-shadow
                  duration-300
                  hover:shadow-[0_10px_30px_rgba(229,35,35,0.08)]
                "
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  
                  {/* KOLOM KIRI: IKON MERAH + TITLE + DESKRIPSI */}
                  <div className="lg:col-span-5 flex flex-col items-start text-left">
                    
                    {/* Ikon Merah Sesuai Referensi */}
                    <div className="text-[#E52323] mb-4 sm:mb-6">
                      <Icon className="h-10 w-10 sm:h-12 sm:w-12 stroke-[1.8]" />
                    </div>

                    {/* Judul Kategori Merah */}
                    <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#E52323] leading-tight">
                      {category.title}
                    </h3>

                    {/* Deskripsi Singkat Merah */}
                    <p className="mt-3 sm:mt-4 font-sans font-normal text-sm sm:text-base leading-relaxed text-[#E52323] max-w-md">
                      {category.description}
                    </p>

                  </div>

                  {/* KOLOM KANAN: SUB-PRODUCT LIST DENGAN UNDERLINE MERAH */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 pt-2 lg:pt-0">
                    {category.products.map((productItem) => (
                      <div
                        key={productItem}
                        className="
                          w-full
                          pb-2 sm:pb-3
                          border-b
                          border-[#E52323]
                          flex
                          items-center
                          justify-end
                          group
                          cursor-pointer
                        "
                      >
                        <h4
                          className="
                            font-sans
                            font-black
                            text-xl sm:text-3xl lg:text-4xl
                            uppercase
                            tracking-tight
                            text-[#E52323]
                            text-right
                            transition-transform
                            duration-200
                            group-hover:-translate-x-2
                          "
                        >
                          {productItem}
                        </h4>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}