'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animasi masuk naik dari bawah (Slide Up + Fade In) saat scroll
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={sectionRef}
      id="cta"
      /* Warna background warm grey / krem sesuai referensi */
      className="bg-[#ECEBE6] text-slate-950 font-sans pt-12 pb-6 flex flex-col justify-between min-h-screen select-none overflow-hidden"
    >
      {/* --- UPPER SECTION: NAVIGATION & FOLLOW --- */}
      <div className="px-6 md:px-12 w-full">
        {/* Header Labels */}
        <div className="flex justify-between items-center text-xs font-bold tracking-widest text-slate-500 pb-3 border-b border-slate-950/20 uppercase">
          <span>(FOLLOW)</span>
          <span>(NAVIGATION)</span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 justify-between pt-6 text-xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">
          {/* Social Links */}
          <div className="flex flex-col space-y-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity w-fit">
              INSTAGRAM
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity w-fit">
              LINKEDIN
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity w-fit">
              FACEBOOK
            </a>
            <a href="mailto:hello@xora.com" className="hover:opacity-60 transition-opacity w-fit">
              EMAIL
            </a>
          </div>

          {/* Site Navigation */}
          <div className="flex flex-col space-y-1 items-end">
            <Link href="/" className="hover:opacity-60 transition-opacity w-fit">
              HOME
            </Link>
            <Link href="#portfolio" className="hover:opacity-60 transition-opacity w-fit">
              WORKS
            </Link>
            <Link href="/services" className="hover:opacity-60 transition-opacity w-fit">
              BREAK
            </Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity w-fit">
              ABOUT
            </Link>
          </div>
        </div>

        {/* Back To Top Button Center */}
        <div className="flex justify-center my-8 md:my-12">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-slate-600 transition-colors group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* --- MIDDLE SECTION: GIANT RUNNING TEXT (MATCHED FONT) --- */}
      <Link href="/contact" className="group block my-auto">
        <div className="bg-[#21160E] text-[#ECEBE6] py-4 md:py-8 overflow-hidden relative flex items-center transition-colors duration-500 group-hover:bg-[#120b07]">
          {/* Infinite Moving Track */}
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]"
          >
            {/* Font disesuaikan menjadi Ultra Condensed Bold Sans-Serif */}
            <span className="text-[20vw] leading-[0.85] font-black tracking-tighter uppercase pr-8 font-sans scale-y-110 inline-block">
              LET’S TALK LET’S TALK LET’S TALK &nbsp;
            </span>
            <span className="text-[20vw] leading-[0.85] font-black tracking-tighter uppercase pr-8 font-sans scale-y-110 inline-block">
              LET’S TALK LET’S TALK LET’S TALK &nbsp;
            </span>
          </div>
        </div>
      </Link>

      {/* --- BOTTOM SECTION: METADATA & COPYRIGHT --- */}
      <div className="px-6 md:px-12 w-full pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-semibold tracking-wider text-slate-800 uppercase gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            BANDUNG, ID
          </span>
        </div>

        <div className="text-right">
          <span>©2026 XORA. ALL RIGHTS RESERVED</span>
        </div>
      </div>

      {/* Custom CSS Animation for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </footer>
  );
}