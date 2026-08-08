"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import WhyXoraTimeline from "./WhyXoraTimeline";
import {
  whyContent,
  topTemplates,
  bottomTemplates,
} from "./whyData";

const topLoop = [...topTemplates, ...topTemplates];
const bottomLoop = [...bottomTemplates, ...bottomTemplates];

// Custom Easing Tuple
const cubicEase = [0.16, 1, 0.3, 1] as const;

// 1. Variant Animasi Title (Masuk dari Bawah ke Atas + Blur Fade)
const titleUpVariant: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: cubicEase,
    },
  },
};

// 2. Variant Animasi Deskripsi (Staggered Rise + Soft Blur)
const descriptionUpVariant: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay: 0.15,
      ease: cubicEase,
    },
  },
};

export default function WhyXora() {
  return (
    <section
      id="why-xora"
      className="
        relative
        w-full
        bg-white
        text-slate-900
        overflow-hidden
        select-none
      "
    >
      {/* ================= 1. HEADER BANNER MERAH (WITH ANIMATION) ================= */}
      <div className="w-full bg-[#E52323] text-white py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20 border-b border-red-700">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* KOLOM KIRI: TITLE "WHY .-03 XORA" (ANIMASI DARI BAWAH KE ATAS) */}
          <div className="lg:col-span-7 overflow-hidden">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleUpVariant}
              className="font-sans font-black uppercase tracking-[-0.05em] leading-[0.82] text-[clamp(3.8rem,9vw,8rem)] text-white"
            >
              <span className="block">
                WHY <span className="font-extrabold text-white">.-03</span>
              </span>
              <span className="block text-white">XORA</span>
            </motion.h2>
          </div>

          {/* KOLOM KANAN: DESKRIPSI HEADER (ANIMASI MERGE / STAGGERED RISE) */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end overflow-hidden">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={descriptionUpVariant}
              className="font-sans text-sm sm:text-base lg:text-xl font-bold leading-relaxed text-white/95 max-w-xl"
            >
              {whyContent.description ||
                "XORA menghadirkan template premium dengan desain modern, performa tinggi, dan pengalaman digital yang dirancang untuk membantu bisnis tampil lebih profesional, dipercaya, dan berkembang lebih cepat."}
            </motion.p>
          </div>

        </div>
      </div>

      {/* ================= 2. GALLERY TEMPLATE MARQUEE (TOP & BOTTOM ROW) ================= */}
      <div className="w-full bg-slate-50/80 py-12 sm:py-16 lg:py-20 overflow-hidden">
        
        {/* Row 1: Scroll Left */}
        <div className="w-full overflow-hidden">
          <div
            id="why-row-top"
            className="
              why-scroll-left
              flex
              w-max
              gap-6
              sm:gap-8
              lg:gap-10
            "
          >
            {topLoop.map((image, index) => (
              <div
                key={`top-${index}`}
                className="
                  relative
                  h-[200px] sm:h-[260px] lg:h-[310px]
                  w-[320px] sm:w-[420px] lg:w-[500px]
                  shrink-0
                  overflow-hidden
                  rounded-[2rem] lg:rounded-[2.5rem]
                  bg-white
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  border border-slate-200/70
                "
              >
                <Image
                  src={image}
                  alt="XORA Template Showcase Top"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll Right */}
        <div className="mt-6 sm:mt-8 lg:mt-10 w-full overflow-hidden">
          <div
            id="why-row-bottom"
            className="
              why-scroll-right
              flex
              w-max
              gap-6
              sm:gap-8
              lg:gap-10
            "
          >
            {bottomLoop.map((image, index) => (
              <div
                key={`bottom-${index}`}
                className="
                  relative
                  h-[200px] sm:h-[260px] lg:h-[310px]
                  w-[320px] sm:w-[420px] lg:w-[500px]
                  shrink-0
                  overflow-hidden
                  rounded-[2rem] lg:rounded-[2.5rem]
                  bg-white
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  border border-slate-200/70
                "
              >
                <Image
                  src={image}
                  alt="XORA Template Showcase Bottom"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TIMELINE SECTION */}
      <WhyXoraTimeline />

    </section>
  );
}