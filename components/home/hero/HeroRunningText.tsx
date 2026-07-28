"use client";

import { motion } from "framer-motion";

export default function HeroRunningText() {
  const items = [
    "DIGITAL MAKER EXPERIENCE",
    "PREMIUM WEB DEVELOPMENT",
    "MODERN UI/UX DESIGN",
    "AI AUTOMATION",
    "CUSTOM BUSINESS SYSTEM",
    "NEXT.JS • TYPESCRIPT • THREE.JS",
    "BUILT FOR MODERN BRANDS",
    "CRAFTED WITH PRECISION",
  ];

  return (
    <div
      id="hero-running"
      className="
        absolute
        bottom-0
        left-0
        w-full
        overflow-hidden
        border-t
        border-cyan-200/60
        bg-white/70
        backdrop-blur-xl
        z-20
      "
    >
      <div className="flex w-max whitespace-nowrap py-5 sm:py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center mx-6 sm:mx-10">
              <span
                className="
                  text-[clamp(1rem,1.8vw,1.5rem)]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-800
                "
              >
                {item}
              </span>

              <span className="ml-10 text-cyan-500 font-extrabold">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}