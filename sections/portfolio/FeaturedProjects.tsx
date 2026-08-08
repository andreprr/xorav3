"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Staatliches } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import corporate from "./assets/corporate.webp";
import dashboard from "./assets/dashboard.webp";

// Import Font Staatliches untuk Title
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Corporate Website",
    category: "COMPANY PROFILE",
    year: "2026",
    image: corporate,
    description:
      "Website company profile modern dengan desain premium yang membantu meningkatkan kredibilitas perusahaan, branding digital, serta menghasilkan lebih banyak calon pelanggan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    stats: [
      { value: "95+", label: "Performance" },
      { value: "100%", label: "Responsive" },
      { value: "1.1s", label: "Load Time" },
    ],
  },
  {
    title: "Business Dashboard",
    category: "BUSINESS SYSTEM",
    year: "2026",
    image: dashboard,
    description:
      "Dashboard bisnis modern untuk monitoring penjualan, laporan keuangan, stok barang, serta aktivitas bisnis secara real-time.",
    tech: ["Next.js", "Laravel API", "MySQL", "Chart.js"],
    stats: [
      { value: "99%", label: "Accuracy" },
      { value: "24/7", label: "Realtime" },
      { value: "Fast", label: "Experience" },
    ],
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Animasi Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40, filter: "blur(8px)" },
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

      // 2. Animasi Setiap Item Project (Staggered Fade + Slide Up)
      projectCardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. Image Zoom Entrance (on-point, saat masuk viewport)
      imageRefs.current.forEach((img) => {
        if (!img) return;

        gsap.fromTo(
          img,
          { scale: 0.92 },
          {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            willChange: "transform",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 4. Stats Staggered Entrance (on-point saat masuk viewport)
      const stats = statRefs.current.filter(
        (stat): stat is HTMLDivElement => stat !== null
      );
      if (stats.length > 0) {
        gsap.fromTo(
          stats,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            willChange: "transform",
            scrollTrigger: {
              trigger: stats[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
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
        
        {/* ── 1. HEADER SECTION (TITLE + DESCRIPTION + SELECTED CASE STUDIES) ── */}
        <div ref={headerRef} className="w-full mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-baseline gap-6">
            
            {/* KIRI: TITLE & DESKRIPSI */}
            <div className="max-w-xl">
              <h2
                className={`
                  ${staatliches.className}
                  uppercase
                  tracking-tight
                  leading-[0.85]
                  text-5xl sm:text-7xl lg:text-8xl
                  text-slate-950
                `}
              >
                FEATURE<br />PROJECTS
              </h2>
              <p className="mt-4 font-sans font-medium text-sm sm:text-base text-slate-700 leading-relaxed">
                Kami membangun website dan sistem digital yang tidak hanya terlihat
                modern, tetapi juga cepat, SEO Friendly, dan mampu meningkatkan
                kepercayaan pelanggan.
              </p>
            </div>

            {/* KANAN: LABEL MICRO "SELECTED CASE STUDIES" */}
            <div className="lg:text-right">
              <span className="font-sans font-extrabold text-sm sm:text-base lg:text-xl uppercase tracking-wider text-slate-800">
                SELECTED CASE STUDIES
              </span>
            </div>

          </div>

          {/* Garis Pembatas Tipis */}
          <div className="w-full h-[1px] bg-slate-300 mt-6 sm:mt-8" />
        </div>

        {/* ── 2. PROJECT LIST SHOWCASE ── */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectCardsRef.current[index] = el;
              }}
              className="w-full border-b border-slate-200/80 pb-12 sm:pb-16 last:border-b-0"
            >
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="w-full will-change-transform"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* KOLOM KIRI: PREVIEW MOCKUP GAMBAR + LABEL CATEGORY */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 border border-slate-200 shadow-md group will-change-transform"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Category Label di Bawah Gambar */}
                  <span className="mt-4 font-sans font-bold text-xs sm:text-sm uppercase tracking-widest text-slate-600">
                    {project.category}
                  </span>
                </div>

                {/* KOLOM KANAN: PROJECT DETAILS */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-0">
                  <div>
                    {/* Title Project */}
                    <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight">
                      {project.title}
                    </h3>

                    {/* Deskripsi */}
                    <p className="mt-4 sm:mt-6 font-sans font-normal text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* STATS & TECH STACK GRID */}
                    <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 items-start">
                      
                      {/* STATS LIST (KIRI) */}
                      <div className="space-y-5">
                        {project.stats.map((stat, statIdx) => (
                          <div
                            key={stat.label}
                            ref={(el) => {
                              statRefs.current[index * project.stats.length + statIdx] = el;
                            }}
                          >
                            <h4 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 leading-none">
                              {stat.value}
                            </h4>
                            <p className="font-sans font-medium text-xs sm:text-sm text-slate-600 mt-1">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* TECH STACK CHIPS (KANAN) */}
                      <div className="flex flex-col items-start gap-2.5">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="
                              px-5
                              py-1.5
                              rounded-full
                              bg-slate-700
                              text-white
                              font-sans
                              font-semibold
                              text-xs sm:text-sm
                              tracking-tight
                              shadow-sm
                            "
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* CTA BUTTONS (BOTTOM) */}
                  <div className="mt-10 sm:mt-12 flex items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    {/* Live Preview Button */}
                    <motion.a
                      href="#preview"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-950 hover:text-[#E52323] transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>

                    {/* Start Similar Project Link */}
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-950 hover:text-[#E52323] transition-colors"
                      >
                        <span>Start Similar Project</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </div>

                </div>

              </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
