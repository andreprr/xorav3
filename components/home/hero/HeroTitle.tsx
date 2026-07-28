"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <div id="hero-title" className="max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="
          font-display
          text-[clamp(3.2rem,7.5vw,7.2rem)]
          font-extrabold
          tracking-[-0.05em]
          leading-[0.9]
          text-center
          uppercase
          select-none
        "
      >
        {/* Baris Pertama - Crystal Slate Gradient */}
        <span 
          className="
            block 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-b 
            from-slate-950 
            via-slate-800 
            to-slate-700
            drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]
          "
        >
          DIGITAL MAKER
        </span>

        {/* Baris Kedua - Ice Cyan Shine */}
        <span 
          className="
            block 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-cyan-700 
            via-slate-900 
            to-blue-700
            drop-shadow-[0_4px_20px_rgba(6,182,212,0.15)]
          "
        >
          EXPERIENCES
        </span>
      </motion.h1>
    </div>
  );
}