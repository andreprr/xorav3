"use client";

import { useRef } from "react";
import { Antonio, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Config Font Google ANTONIO untuk Judul & Title Values
const antonio = Antonio({
  weight: ["700"],
  subsets: ["latin"],
});

// Config Font Google MONTSERRAT untuk Deskripsi
const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const valuesList = [
  {
    title: "PURPOSE",
    desc: "Setiap solusi yang kami bangun harus memiliki alasan dan tujuan yang jelas. Kami tidak hanya mengejar tampilan yang menarik, tetapi memastikan setiap desain, fitur, dan teknologi memberikan nilai nyata bagi bisnis.",
  },
  {
    title: "QUALITY",
    desc: "Kami menjadikan kualitas sebagai standar sejak awal proses. Dari konsep, desain, teknologi, hingga detail terkecil, setiap bagian harus memberikan hasil yang profesional dan dapat diandalkan.",
  },
  {
    title: "FUTURE",
    desc: "Kami tidak hanya menyelesaikan kebutuhan hari ini. Setiap solusi dirancang dengan mempertimbangkan perkembangan bisnis, perubahan teknologi, dan kebutuhan yang mungkin muncul di masa depan.",
  },
  {
    title: "SIMPLICITY",
    desc: "Teknologi dapat menjadi kompleks, tetapi pengalaman pengguna tidak seharusnya demikian. Kami menyederhanakan proses dan sistem agar lebih mudah dipahami, digunakan, dan memberikan pengalaman yang nyaman.",
  },
  {
    title: "PARTNERSHIP",
    desc: "Kami melihat client bukan sekadar sebagai pelanggan, tetapi sebagai partner. Kami membangun hubungan jangka panjang dengan memahami tujuan bisnis dan menciptakan solusi yang dapat tumbuh bersama perkembangan mereka.",
  },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Header Entrance
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
        );
      }

      // 2. Value Items Staggered Entrance
      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        tl.fromTo(
          row,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power3.out" },
          `-=${index === 0 ? 0.4 : 0.45}`
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="values"
      className="
        relative
        w-full
        min-h-screen
        bg-[#0F0E0E]
        text-[#ECEBE6]
        font-sans
        select-none
        overflow-hidden
        flex
        flex-col
        justify-between
        py-12 sm:py-16 lg:py-24
        px-6 sm:px-12 lg:px-20
      "
    >
      <div className="w-full max-w-[1650px] mx-auto my-auto flex flex-col justify-center">
        
        {/* ── 1. HEADER SECTION (XORA VALUES + WHAT WE BELIEVE IN + DIVIDER) ── */}
        <div ref={headerRef} className="w-full pb-6 sm:pb-8 border-b border-white/20 mb-8 sm:mb-12">
          
          <div className="flex flex-col sm:flex-row items-baseline justify-start gap-4 sm:gap-8">
            {/* GIANT TITLE "XORA VALUES" */}
            <h2
              className={`
                ${antonio.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(4.2rem,13vw,11.5rem)]
                text-[#ECEBE6]
              `}
            >
              XORA VALUES
            </h2>

            {/* MICRO LABEL "WHAT WE BELIEVE IN" */}
            <span className="font-sans font-bold text-sm sm:text-base lg:text-xl uppercase tracking-widest text-slate-300">
              WHAT WE BELIEVE IN
            </span>
          </div>

          {/* SUB-HEADLINE PARAGRAPH */}
          <p className={`${montserrat.className} mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 font-normal`}>
            The way we build defines what we build.
          </p>

        </div>

        {/* ── 2. VALUES LIST (GRID 2 KOLOM PER BARIS) ── */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {valuesList.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start"
            >
              {/* KOLOM KIRI: VALUE TITLE (ANTONIO FONT) */}
              <div className="lg:col-span-4">
                <h3
                  className={`
                    ${antonio.className}
                    uppercase
                    tracking-tight
                    leading-none
                    text-3xl sm:text-5xl lg:text-6xl
                    text-[#ECEBE6]
                  `}
                >
                  {item.title}
                </h3>
              </div>

              {/* KOLOM KANAN: VALUE DESCRIPTION (MONTSERRAT FONT) */}
              <div className="lg:col-span-8">
                <p
                  className={`
                    ${montserrat.className}
                    font-normal
                    text-xs sm:text-sm lg:text-base
                    leading-relaxed
                    text-slate-300
                    max-w-3xl
                  `}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}