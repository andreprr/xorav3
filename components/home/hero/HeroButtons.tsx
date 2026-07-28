"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-4 z-30">
      
      {/* ── BUTTON 1: EXPLORE WORK (LIGHT CRYSTAL + KOTAK + SWEEP ANIMATION) ── */}
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
            h-[56px]
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
          {/* Light Sweep Animation saat hover */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          
          <span className="relative z-10 font-body text-[14px] font-black uppercase tracking-wider text-slate-950 group-hover:text-cyan-950 transition-colors">
            Explore Work
          </span>
          
          <ArrowUpRight className="relative z-10 ml-3 h-5 w-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-600" />
        </Link>
      </motion.div>

      {/* ── BUTTON 2: START PROJECT (MINIMALIST DARK SQUARE) ── */}
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
            h-[56px]
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
          
          <ArrowRight className="relative z-10 ml-3 h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </motion.div>

    </div>
  );
}