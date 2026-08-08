"use client";

import { useRef } from "react";
import Image from "next/image";
import { Antonio } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Import Assets Gambar dari sections/about/assets
import boyImg from "@/sections/about/assets/boy.webp";
import andreImg from "@/sections/about/assets/andre.webp";

// Config Font Google ANTONIO
const antonio = Antonio({
  weight: ["700"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Owner() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dickyCardRef = useRef<HTMLDivElement>(null);
  const andreCardRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER STORYTELLING ANIMATION (20% -> 100%) ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 1.2, // Smooth progressive scrub sesuai jarak scroll
        },
      });

      // Step 1 (~20% Scroll Progress): Title & Arrow Reveal
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }
        );
      }

      // Step 2 (~45% Scroll Progress): Dicky Suhardiman Card Reveal
      if (dickyCardRef.current) {
        tl.fromTo(
          dickyCardRef.current,
          { opacity: 0, y: 70, scale: 0.94, filter: "blur(8px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2 }
        );
      }

      // Step 3 (~70% Scroll Progress): Andre Pratama Card Reveal
      if (andreCardRef.current) {
        tl.fromTo(
          andreCardRef.current,
          { opacity: 0, y: 70, scale: 0.94, filter: "blur(8px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2 }
        );
      }

      // Step 4 (~100% Scroll Progress): Right Storytelling Text Reveal
      if (storyTextRef.current) {
        tl.fromTo(
          storyTextRef.current,
          { opacity: 0, x: 40, filter: "blur(10px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.5 }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="owner"
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
        
        {/* ── 1. HEADER TITLE WITH ANTONIO FONT & ARROW ── */}
        <div ref={titleRef} className="w-full mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-3 sm:gap-5">
            <h2
              className={`
                ${antonio.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(3.8rem,11vw,9.5rem)]
                text-[#ECEBE6]
              `}
            >
              PEOPLE BEHIND XORA
            </h2>
            <ArrowUpRight className="h-10 w-10 sm:h-16 sm:w-16 lg:h-24 lg:w-24 text-[#ECEBE6] stroke-[2.5] shrink-0" />
          </div>
        </div>

        {/* ── 2. MAIN GRID LAYOUT (2 FOTO SHOWCASE + 1 STORY TEXT) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ========================================================= */}
          {/* FOTO 1: DICKY SUHARDIMAN (boy.webp)                       */}
          {/* ========================================================= */}
          <div
            ref={dickyCardRef}
            className="lg:col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group shadow-2xl"
          >
            <Image
              src={boyImg}
              alt="Dicky Suhardiman - Founder & Principal Owner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* NAME BADGE OVERLAY */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                DICKY SUHARDIMAN
              </h3>
              <p className="font-sans font-medium text-xs sm:text-sm text-slate-300 mt-0.5">
                Founder & Principal Owner
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* FOTO 2: ANDRE PRATAMA (andre.webp)                       */}
          {/* ========================================================= */}
          <div
            ref={andreCardRef}
            className="lg:col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group shadow-2xl"
          >
            <Image
              src={andreImg}
              alt="Andre Pratama - Co-Owner & Strategic Partner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* NAME BADGE OVERLAY */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                ANDRE PRATAMA
              </h3>
              <p className="font-sans font-medium text-xs sm:text-sm text-slate-300 mt-0.5">
                Co-Owner & Strategic Partner
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN: STORYTELLING PARAGRAPH NARATION             */}
          {/* ========================================================= */}
          <div
            ref={storyTextRef}
            className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-6 pt-4 lg:pt-0"
          >
            <p className="font-sans font-normal text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose text-slate-200">
              XORA was founded by Dicky Suhardiman with a vision to build a digital studio
              that helps businesses move forward through design, technology, and innovation.
              Together with Andre Pratama, XORA continues to evolve through collaboration,
              product development, and a shared commitment to creating meaningful digital
              experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}