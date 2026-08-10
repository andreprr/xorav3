"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building2, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const bigTitleRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const statsWidgetRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  // ── GSAP LONG STORY PINNED SCROLLTRIGGER ──
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Master Timeline dengan Pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500", // Panjang durasi scroll sebelum dilepas (unpin)
          pin: true,
          scrub: 1, // Gerakan animasi mengikuti pergerakan scroll pengguna secara mulus
          anticipatePin: 1,
        },
      });

      // 1. Zoom in halus pada background
      tl.to(bgImageRef.current, {
        scale: 1.1,
        duration: 3,
        ease: "none",
      }, 0);

      // 2. Transisi Judul Raksasa Overlay (Fade & Scale)
      tl.fromTo(
        bigTitleRef.current,
        { opacity: 0.2, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        0
      );

      // 3. Reveal Konten Deskripsi & CTA Buttons
      tl.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 80, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power2.out" },
        0.8
      );

      // 4. Reveal Floating Statistics Widget (Kiri Bawah)
      tl.fromTo(
        statsWidgetRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power2.out" },
        1.5
      );

      // 5. Reveal Info Card & Map Preview (Kanan Bawah)
      tl.fromTo(
        infoCardRef.current,
        { opacity: 0, y: 100, x: 20 },
        { opacity: 1, y: 0, x: 0, duration: 1.8, ease: "power2.out" },
        1.8
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-slate-950 text-white select-none flex flex-col justify-between"
    >
      {/* ── 1. BACKGROUND IMAGE + OVERLAY ── */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/assets/contractor/hero/hero-background.webp"
          alt="Construction Hero"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
      </div>

      {/* ── 2. TOP SEGMENTED NAVBAR (Sesuai Referensi 250 Broadway) ── */}
      <header className="relative z-30 w-full bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="w-full flex items-center justify-between text-xs sm:text-sm font-sans tracking-wider uppercase">
          
          {/* Logo / Brand Title Left */}
          <div className="px-6 py-4 bg-amber-600 text-slate-950 font-black tracking-widest shrink-0">
            PREMIUM CONTRACTOR
          </div>

          {/* Nav Segment Links */}
          <nav className="hidden lg:flex items-center divide-x divide-white/10 flex-grow">
            <Link href="#projects" className="px-6 py-4 text-white/90 hover:text-amber-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="px-6 py-4 text-white/90 hover:text-amber-400 transition-colors">
              Experience
            </Link>
            <Link href="#engineers" className="px-6 py-4 text-white/90 hover:text-amber-400 transition-colors">
              Engineers
            </Link>
            <Link href="#satisfaction" className="px-6 py-4 text-white/90 hover:text-amber-400 transition-colors">
              Satisfaction
            </Link>
          </nav>

          {/* Right Action Button */}
          <Link
            href="#contact"
            className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>

        </div>
      </header>

      {/* ── 3. ARCHITECTURAL OVERLAY TYPOGRAPHY (Center Screen) ── */}
      <div
        ref={bigTitleRef}
        className="absolute inset-x-0 top-1/4 z-10 w-full max-w-7xl mx-auto px-6 pointer-events-none flex justify-around text-white/15 font-black uppercase text-5xl sm:text-8xl lg:text-9xl tracking-tighter"
      >
        <span>Building</span>
        <span>•</span>
        <span>Future</span>
      </div>

      {/* ── 4. MAIN CONTENT AREA (Left & Bottom Alignment) ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 my-auto pt-10 flex flex-col lg:flex-row justify-between items-end gap-8">
        
        {/* Left Column: Title & Description */}
        <div ref={mainContentRef} className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            Premium Construction Company
          </span>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
            Building<br />
            <span className="text-amber-500">The Future</span>
          </h1>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
            Delivering high-quality residential, commercial, and industrial construction
            with modern engineering, experienced professionals, and a commitment to excellence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="group px-8 py-4 bg-slate-900/80 hover:bg-white hover:text-slate-950 text-white font-bold text-sm uppercase tracking-wider border border-white/20 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>

      {/* ── 5. FLOATING WIDGETS (Bottom Bar Layout Sesuai Referensi) ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        
        {/* Left Widget: Statistics Box */}
        <div
          ref={statsWidgetRef}
          className="lg:col-span-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">150+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">20+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">50+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Engineers</p>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">98%</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Client Satisfaction</p>
          </div>
        </div>

        {/* Right Widget: Available Projects / Map Widget Preview */}
        <div
          ref={infoCardRef}
          className="lg:col-span-4 bg-white text-slate-950 p-5 shadow-2xl flex items-center justify-between gap-4 border-l-4 border-amber-500"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Modern Engineering</span>
            </div>
            <h4 className="font-bold text-sm sm:text-base leading-tight">
              Commercial & Industrial Projects
            </h4>
            <p className="text-xs text-slate-600 flex items-center gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Headquarters • Jakarta, ID</span>
            </p>
          </div>

          <Link
            href="#projects"
            className="w-10 h-10 bg-slate-950 hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center shrink-0 transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}