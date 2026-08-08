"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "./projectData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 2. Row Items Staggered Entrance
      rowsRef.current.forEach((row) => {
        if (!row) return;

        gsap.fromTo(
          row,
          { opacity: 0, y: 40, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="project-grid"
      className="
        relative
        w-full
        bg-white
        text-slate-900
        font-sans
        select-none
        overflow-hidden
        py-16 sm:py-24 lg:py-28
        px-6 sm:px-10 lg:px-16
      "
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* ── 1. HEADER SECTION (TITLE + DESKRIPSI + DIVIDER) ── */}
        <div ref={headerRef} className="w-full mb-8 sm:mb-12">
          <div className="max-w-xl">
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight">
              Project yang kami bangun
            </h2>
            <p className="mt-3 font-sans font-medium text-sm sm:text-base text-slate-700 leading-relaxed">
              Website modern dengan desain premium, performa cepat, dan
              pengalaman pengguna yang profesional.
            </p>
          </div>

          {/* Garis Pembatas Tipis */}
          <div className="w-full h-[1.5px] bg-slate-900 mt-6 sm:mt-8" />
        </div>

        {/* ── 2. ALTERNATING ZIG-ZAG LIST ROWS (TANPA GAMBAR) ── */}
        <div className="flex flex-col w-full">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title || index}
                ref={(el) => {
                  rowsRef.current[index] = el;
                }}
                className="w-full border-b border-slate-900"
              >
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    w-full
                    py-5 sm:py-7 lg:py-8
                    px-2 sm:px-4
                    flex
                    items-center
                    justify-between
                    transition-colors
                    duration-300
                    hover:bg-slate-50/80
                  "
                >
                  {/* ALTERNATING PATTERN (LEFT vs RIGHT) */}
                  {isEven ? (
                    <>
                      {/* KIRI: TITLE PROJECT */}
                      <motion.h3
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.2 }}
                        className="
                          font-sans
                          font-black
                          uppercase
                          tracking-tight
                          text-2xl sm:text-4xl lg:text-5xl
                          text-slate-950
                          group-hover:text-[#E52323]
                          transition-colors
                          duration-300
                        "
                      >
                        {project.title}
                      </motion.h3>

                      {/* KANAN: VIEW PROJECT BUTTON */}
                      <span
                        className={`
                          font-sans
                          font-extrabold
                          text-base sm:text-xl lg:text-2xl
                          tracking-tight
                          transition-colors
                          duration-300
                          ${
                            index === 0
                              ? "text-[#E52323]"
                              : "text-slate-950 group-hover:text-[#E52323]"
                          }
                        `}
                      >
                        View Project
                      </span>
                    </>
                  ) : (
                    <>
                      {/* KIRI: VIEW PROJECT BUTTON */}
                      <span className="font-sans font-extrabold text-base sm:text-xl lg:text-2xl tracking-tight text-slate-950 group-hover:text-[#E52323] transition-colors duration-300">
                        View Project
                      </span>

                      {/* KANAN: TITLE PROJECT */}
                      <motion.h3
                        whileHover={{ x: -6 }}
                        transition={{ duration: 0.2 }}
                        className="
                          font-sans
                          font-black
                          uppercase
                          tracking-tight
                          text-2xl sm:text-4xl lg:text-5xl
                          text-slate-950
                          group-hover:text-[#E52323]
                          transition-colors
                          duration-300
                          text-right
                        "
                      >
                        {project.title}
                      </motion.h3>
                    </>
                  )}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}