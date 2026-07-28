"use client";

import { motion } from "framer-motion";
import XoraLogo from "@/components/3d/XoraLogo";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const cubicEase = [0.16, 1, 0.3, 1] as const;

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 pt-4 pb-12 flex flex-col justify-between min-h-[85vh] select-none">
      
      {/* ── 1. TITLE RAKSASA (SVG Text Swiss Style) ── */}
      <div className="w-full overflow-hidden leading-none pt-2">
        <motion.div
          id="hero-title"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: cubicEase }}
          className="w-full"
        >
          <svg
            viewBox="0 0 1000 115"
            className="w-full h-auto font-display uppercase"
          >
            <text
              x="0"
              y="92"
              fill="currentColor"
              className="text-slate-950 font-black tracking-[-0.06em]"
              style={{ fontSize: "112px" }}
            >
              XORA STUDIO
            </text>
          </svg>
        </motion.div>
      </div>

      {/* ── 2. BOTTOM SECTION (DESKRIPSI & 3D LOGO DENGAN UKURAN LEBIH BESAR) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-10 md:mt-14">
        
        {/* KIRI: Deskripsi Dual-Tone + Tag Monospace + Tombol */}
        <div className="lg:col-span-6 flex flex-col items-start gap-5 mb-2">
          
          {/* Badge Tag Monospace */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: cubicEase }}
            className="bg-slate-950 text-white text-[11px] font-mono tracking-widest px-3 py-1 uppercase rounded-sm shadow-sm"
          >
            DIGITAL AGENCY & AI ✦ 2026
          </motion.div>

          {/* Deskripsi Dual-Tone */}
          <motion.p 
            id="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: cubicEase }}
            className="font-body text-[clamp(1.1rem,1.7vw,1.55rem)] font-bold leading-[1.25] tracking-[-0.035em] max-w-[36rem]"
          >
            <span className="text-slate-950 block mb-1.5">
              XORA menghadirkan solusi digital modern untuk membantu bisnis, UMKM, dan startup berkembang.
            </span>
            
            <span className="text-slate-400 font-medium block">
              Melalui website premium, sistem digital, serta integrasi AI yang dirancang untuk memperkuat identitas merek Anda.
            </span>
          </motion.p>

          {/* ── TOMBOL AKSI (REVISI BENTUK KOTAK & ANIMASI) ── */}
          <motion.div 
            id="hero-buttons" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: cubicEase }}
            className="flex flex-wrap items-center gap-4 mt-2 z-30"
          >
            {/* Button 1: Explore Work (Kotak Terang / Light Crystal + Shimmer Sweep) */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/portfolio"
                className="
                  group
                  relative
                  inline-flex
                  h-[54px]
                  px-8
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-none
                  border-2
                  border-slate-950
                  bg-white
                  text-slate-950
                  shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]
                  transition-all
                  duration-300
                  hover:shadow-[6px_6px_20px_rgba(6,182,212,0.35)]
                  hover:border-cyan-500
                "
              >
                {/* Light Sweep Animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                <span className="relative z-10 font-body text-[14px] font-black uppercase tracking-wider text-slate-950 group-hover:text-cyan-950 transition-colors">
                  Explore Work
                </span>
                
                <ArrowUpRight className="relative z-10 ml-2.5 h-5 w-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-600" />
              </Link>
            </motion.div>

            {/* Button 2: Start Project (Kotak Dark Minimalist) */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  h-[54px]
                  px-8
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-none
                  bg-slate-950
                  text-white
                  shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]
                  transition-all
                  duration-300
                  hover:bg-slate-900
                  hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]
                "
              >
                <span className="relative z-10 font-body text-[14px] font-bold uppercase tracking-wider text-white">
                  Start Project
                </span>
                
                <ArrowRight className="relative z-10 ml-2.5 h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* KANAN: Floating 3D Logo (DIPERBESAR SANGAT DOMINAN) */}
        <motion.div
          id="hero-logo"
          initial={{ opacity: 0, scale: 0.75, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: cubicEase }}
          className="
            lg:col-span-6 
            relative 
            h-[clamp(18rem,28vw,28rem)] 
            w-full 
            flex 
            items-center 
            justify-center 
            lg:justify-end
          "
        >
          {/* Cyan Ground Glow diperluas mengikuti logo baru */}
          <div className="absolute bottom-0 right-4 w-[80%] h-[30%] bg-cyan-400/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative w-full h-full max-w-[28rem]">
            <XoraLogo />
          </div>
        </motion.div>

      </div>

    </div>
  );
}