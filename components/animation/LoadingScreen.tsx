"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_BARS = 16; // Jumlah total garis miring

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer interval untuk menaikkan progress persentase
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Beri jeda sedikit di 100% sebelum menutupi loading screen
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        // Kecepatan progress acak agar animasi terasa alami & realistis
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Hitung berapa banyak garis miring yang aktif berdasarkan persentase
  const activeBarsCount = Math.floor((progress / 100) * TOTAL_BARS);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            flex-col
            items-center
            justify-center
            bg-gradient-to-tr
            from-slate-300
            via-slate-100
            to-slate-200
            text-slate-900
            select-none
          "
        >
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4">
            
            {/* ── 1. LOGO XORA RAKSASA (PROPORSI PERSIS REFERENSI) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="
                relative 
                w-[85vw] 
                max-w-[950px] 
                h-[120px] sm:h-[180px] md:h-[240px] lg:h-[280px] 
                flex 
                items-center 
                justify-center
              "
            >
              <Image
                src="/xora-logo.png"
                alt="XORA Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* ── 2. GARIS MIRING LOADING ANIMATION ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-1.5 sm:gap-2.5 pt-1 sm:pt-2"
            >
              {[...Array(TOTAL_BARS)].map((_, index) => {
                const isActive = index < activeBarsCount;

                return (
                  <div
                    key={index}
                    className={`
                      h-5 sm:h-6 md:h-7
                      w-2 sm:w-2.5 md:w-3
                      -skew-x-[25deg]
                      transition-all
                      duration-150
                      ${
                        isActive
                          ? "bg-slate-950 scale-100 opacity-100 shadow-sm"
                          : "bg-slate-400/35 scale-90 opacity-40"
                      }
                    `}
                  />
                );
              })}
            </motion.div>

            {/* ── 3. ANGKA PERSENTASE (0% - 100%) ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-mono font-bold text-xs sm:text-sm md:text-base tracking-widest text-slate-950"
            >
              {progress}%
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}