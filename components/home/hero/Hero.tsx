"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroRunningText from "./HeroRunningText";
import HeroSideLabels from "./HeroSideLabels";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="
        relative
        min-h-[max(120svh,72rem)]
        w-full
        overflow-hidden
        bg-gradient-to-b from-slate-50 via-cyan-50/40 to-white
        text-slate-900
        pb-[10.5rem]
        pt-24
        flex
        flex-col
        justify-between
        items-center
        selection:bg-cyan-200 selection:text-slate-900
      "
    >
      {/* --- Ambient Light Crystal Glow Background --- */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100/60 via-slate-50/50 to-white" />
      
      {/* Crystal Light Reflection Flares */}
      <div className="pointer-events-none absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-cyan-200/30 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/40 blur-[130px] rounded-full" />

      {/* --- Content Area --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
                <HeroContent />
      </div>

      <HeroRunningText />
      <HeroSideLabels />
    </motion.section>
  );
}