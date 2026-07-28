"use client";

import { motion } from "framer-motion";

export default function HeroSideLabels() {
  return (
    <>
      {/* Right vertical copyright */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="hidden md:flex absolute right-6 top-1/2 z-30 -translate-y-1/2 items-center"
      >
        <div className="flex flex-col items-center space-y-6">
          <div 
            className="text-[11px] font-medium tracking-widest text-cyan-200/50 uppercase drop-shadow-[0_0_8px_rgba(165,243,252,0.2)]" 
            style={{ writingMode: 'vertical-rl' }}
          >
            © 2026 XORA STUDIO. ALL RIGHTS RESERVED
          </div>
          {/* Cyan Glow Divider Line */}
          <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-400/60 to-transparent shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
        </div>
      </motion.div>
    </>
  );
}