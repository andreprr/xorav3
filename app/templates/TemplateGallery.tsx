"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Staatliches } from "next/font/google";

// Custom Easing
const customEase = [0.16, 1, 0.3, 1] as const;

// 1. Animasi Merge untuk Header "GALLERY"
const mergeTitleVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: customEase },
  },
};

// 2. Container Grid Stagger
const gridVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// 3. Animasi Kartu (Fade In + Slide Up saat masuk viewport)
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: customEase },
  },
};

// 1. Import Asset Gambar
import brewlyImg from "@/app/templates/assets/BrewlyCoffee.webp";
import contractorImg from "@/app/templates/assets/Contractor.webp";
import startupImg from "@/app/templates/assets/Startup.webp";

// --- IMPORT GAMBAR V0.APP SESUAI NAMA FILE ANDA ---
import modernUxImg from "@/app/templates/assets/modernUX.webp";
import computeAiImg from "@/app/templates/assets/computeAI.webp";
import saasLandingImg from "@/app/templates/assets/SaasLanding.webp";
import agenticImg from "@/app/templates/assets/Agentic.webp";
import taskoImg from "@/app/templates/assets/tasko.webp";
import salesOpImg from "@/app/templates/assets/salesops.webp";
import optimusImg from "@/app/templates/assets/optimus.webp";

// Import Font Staatliches untuk Header "GALLERY"
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
});

// 2. Data Templates
const templates = [
  // --- TEMPLATE INTERNAL (LOKAL) ---
  {
    title: "Brewly Coffee",
    category: "COFFEE SHOP",
    slug: "brewly",
    image: brewlyImg,
    isExternal: false,
  },
  {
    title: "Contractor",
    category: "COMPANY PROFILE",
    slug: "contractor",
    image: contractorImg,
    isExternal: false,
  },
  {
    title: "Startup Launch",
    category: "LANDING PAGE",
    slug: "startup-launch",
    image: startupImg,
    isExternal: false,
  },
  // {
  //   title: "Creative Portfolio",
  //   category: "PORTFOLIO",
  //   slug: "creative-portfolio",
  //   image: null,
  //   isExternal: false,
  // },
  // {
  //   title: "Restaurant Premium",
  //   category: "BUSINESS",
  //   slug: "restaurant-premium",
  //   image: null,
  //   isExternal: false,
  // },
  // {
  //   title: "Property Developer",
  //   category: "BUSINESS",
  //   slug: "property-developer",
  //   image: null,
  //   isExternal: false,
  // },
  {
    title: "Digital Agency",
    category: "COMPANY PROFILE",
    slug: "digital-agency",
    image: contractorImg,
    isExternal: false,
  },
  // --- TEMPLATE EKSTERNAL (v0.app / Vercel) ---
  {
    title: "Modern UX Analytics",
    category: "DASHBOARD",
    slug: "ux-analytics-dashboard",
    image: modernUxImg, // <-- Menggunakan modernUX.webp
    isExternal: true,
    demoUrl: "https://v0-dashboard-ui-alpha.vercel.app",
  },
  {
    title: "COMPUTE AI Platform",
    category: "LANDING PAGE",
    slug: "compute-ai-platform",
    image: computeAiImg, // <-- Menggunakan computeAI.webp
    isExternal: true,
    demoUrl: "https://v0-compute-11.vercel.app",
  },
  {
    title: "Optimus AI Platform",
    category: "LANDING PAGE",
    slug: "optimus-ai",
    image: optimusImg, // <-- (Anda belum menyebutkan nama file untuk Optimus, sementara saya biarkan null. Jika ada, import dan taruh di sini)
    isExternal: true,
    demoUrl: "https://v0-optimus-delta.vercel.app",
  },
  {
    title: "SaaS Landing Page",
    category: "LANDING PAGE",
    slug: "saas-landing-page",
    image: saasLandingImg, // <-- Menggunakan SaasLanding.webp
    isExternal: true,
    demoUrl: "https://veek-saas-landing-page.vercel.app",
  },
  {
    title: "AGENTIC AI Agents",
    category: "LANDING PAGE",
    slug: "agentic-ai",
    image: agenticImg, // <-- Menggunakan Agentic.webp
    isExternal: true,
    demoUrl: "https://v0-modern-agentic.vercel.app",
  },
  {
    title: "Tasko Management",
    category: "DASHBOARD",
    slug: "tasko-dashboard",
    image: taskoImg, // <-- Menggunakan tasko.webp
    isExternal: true,
    demoUrl: "https://v0-dashboard-ui-redesign-nine.vercel.app",
  },
  {
    title: "SalesOps Dashboard",
    category: "DASHBOARD",
    slug: "salesops-dashboard",
    image: salesOpImg, // <-- Menggunakan salesop.webp
    isExternal: true,
    demoUrl: "https://v0-sales-operations-dashboard.vercel.app",
  },
];

export default function TemplateGallery() {
  return (
    <section
      id="template-gallery"
      className="
        relative
        w-full
        min-h-screen
        bg-[#EAEAEA]
        text-slate-950
        font-sans
        select-none
        overflow-hidden
        py-16 sm:py-24 lg:py-28
        px-6 sm:px-12 lg:px-16
      "
    >
      <div className="mx-auto max-w-[1600px]">
        
        {/* ── 1. HEADER SECTION (TITLE RAKSASA & SUBTITLE RATA TENGAH) ── */}
        <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            variants={mergeTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`
              ${staatliches.className}
              uppercase
              tracking-tight
              leading-none
              text-[clamp(4.5rem,15vw,13.5rem)]
              text-[#111111]
            `}
          >
            GALLERY
          </motion.h2>
          <motion.p
            variants={mergeTitleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 sm:mt-4 font-sans font-semibold text-lg sm:text-2xl lg:text-3xl text-slate-800"
          >
            Premium Website Templates
          </motion.p>
        </div>

        {/* ── 2. TEMPLATES GALLERY GRID (3 KOLOM MEMBULAT) ── */}
        <motion.div
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {templates.map((template) => (
            <motion.div
              key={template.title}
              variants={cardVariant}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-[2rem]
                bg-white
                p-4 sm:p-5
                shadow-[0_15px_40px_rgba(0,0,0,0.04)]
                border
                border-slate-200/60
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* CONTAINER GAMBAR THUMBNAIL */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                {template.image ? (
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* Placeholder untuk gambar yang null */
                  <div className="w-full h-full bg-slate-200/70 flex items-center justify-center text-slate-400 font-semibold text-sm">
                    No Preview Available
                  </div>
                )}

                {/* OVERLAY HOVER BUTTON (PREVIEW BADGE) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link 
                    href={template.isExternal && template.demoUrl ? template.demoUrl : `/templates/${template.slug}`}
                    target={template.isExternal ? "_blank" : undefined}
                    rel={template.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-slate-950 font-bold text-xs shadow-xl transition-transform duration-300 group-hover:scale-105">
                      <Eye size={15} /> Preview
                    </div>
                  </Link>
                </div>
              </div>

              {/* CARD FOOTER CONTENT */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category Chip */}
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    {template.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-1 font-sans font-black text-xl sm:text-2xl text-slate-900 group-hover:text-[#E52323] transition-colors">
                    {template.title}
                  </h3>
                </div>

                {/* Gunakan Template CTA */}
                <div className="mt-6 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm text-slate-900 hover:text-[#E52323] transition-colors"
                  >
                    <span>Gunakan Template</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}