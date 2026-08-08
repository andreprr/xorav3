"use client";

import { useRef } from "react";
import { Check, Minus } from "lucide-react";
import { Staatliches } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Font Staatliches untuk Title "COMPARE FEATURE"
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    feature: "Responsive Design",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "SEO Basic",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "WhatsApp Integration",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "Dashboard Admin",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "CMS",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "API Integration",
    starter: false,
    business: false,
    enterprise: true,
  },
  {
    feature: "Priority Support",
    starter: false,
    business: true,
    enterprise: true,
  },
];

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER ANIMATION (ON-POINT ENTRANCE) ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Animasi Title Entrance (once)
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 35, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Animasi Card Tabel Entrance + subtle scaleX grow (kiri ke kanan, once)
      if (tableRef.current) {
        gsap.fromTo(
          tableRef.current,
          { opacity: 0, y: 45, scaleX: 0, transformOrigin: "left center" },
          {
            opacity: 1,
            y: 0,
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tableRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 3. Animasi Baris Tabel: checkmark reveal staggered (once)
      const rows = gsap.utils.toArray<HTMLElement>(".comparison-row");

      if (rows.length && tableRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          rows,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 },
          "+=0.1"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="comparison"
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
      "
    >
      {/* ── 1. LEFT MAIN CONTENT AREA ── */}
      <div className="flex-grow flex flex-col justify-between py-12 sm:py-16 px-6 sm:px-12 lg:px-16 z-10 overflow-x-auto">
        
        <div className="w-full max-w-5xl mx-auto my-auto flex flex-col items-center">
          
          {/* GIANT TITLE "COMPARE FEATURE" */}
          <div className="w-full text-center mb-8 sm:mb-12">
            <h2
              ref={titleRef}
              className={`
                ${staatliches.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(3.8rem,11vw,10.5rem)]
                text-[#E52323]
                whitespace-nowrap
              `}
            >
              COMPARE FEATURE
            </h2>
          </div>

          {/* ── 2. FLOATING TABLE CARD (PERSIS REFERENSI) ── */}
          <div
            ref={tableRef}
            className="
              w-full
              overflow-hidden
              rounded-[2rem] sm:rounded-[2.5rem]
              bg-[#F1F5F9]/80
              p-5 sm:p-8 lg:p-10
              shadow-[0_15px_40px_rgba(0,0,0,0.02)]
              hover:shadow-[0_25px_60px_rgba(229,35,35,0.08)]
              transition-shadow
              duration-500
              border
              border-slate-200/60
              will-change-transform
            "
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="pb-5 sm:pb-6 text-left font-sans font-extrabold text-xs sm:text-sm lg:text-base text-slate-900 w-1/2">
                      Features
                    </th>
                    <th className="pb-5 sm:pb-6 text-center font-sans font-extrabold text-xs sm:text-sm lg:text-base text-slate-900">
                      Starter
                    </th>
                    <th className="pb-5 sm:pb-6 text-center font-sans font-extrabold text-xs sm:text-sm lg:text-base text-slate-900">
                      Business
                    </th>
                    <th className="pb-5 sm:pb-6 text-center font-sans font-extrabold text-xs sm:text-sm lg:text-base text-slate-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {features.map((item) => (
                    <tr
                      key={item.feature}
                      className="
                        comparison-row
                        border-b
                        border-slate-300/70
                        last:border-b-0
                        transition-colors
                        hover:bg-white/50
                      "
                    >
                      {/* Nama Fitur */}
                      <td className="py-4 sm:py-5 font-sans font-bold text-xs sm:text-sm lg:text-base text-slate-800">
                        {item.feature}
                      </td>

                      {/* Centang Merah / Strip Abu-abu */}
                      {[item.starter, item.business, item.enterprise].map(
                        (val, idx) => (
                          <td key={idx} className="py-4 sm:py-5 text-center">
                            {val ? (
                              <Check className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-[#E52323] stroke-[3]" />
                            ) : (
                              <Minus className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-slate-300 stroke-[2.5]" />
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

      {/* ── 3. RIGHT VERTICAL RED SIDEBAR (PERSIS REFERENSI) ── */}
      <div className="w-12 sm:w-20 lg:w-28 bg-[#E52323] shrink-0 min-h-screen" />
    </section>
  );
}
