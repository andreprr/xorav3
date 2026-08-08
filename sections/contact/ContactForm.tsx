"use client";

import { useRef } from "react";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Config Font Google ANTON untuk Sidebar Text
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom Cubic Bezier Easing
const customEase = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER: Vertical Red Sidebar Slide-In Entrance ──
  useGSAP(
    () => {
      if (!sidebarRef.current) return;

      gsap.fromTo(
        sidebarRef.current,
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-slate-900
        font-sans
        select-none
        overflow-hidden
        flex
      "
    >
      {/* ── 1. LEFT VERTICAL RED SIDEBAR WITH VERTICAL TEXT ── */}
      <div
        ref={sidebarRef}
        className="
          w-16 sm:w-24 lg:w-32
          bg-[#E52323]
          shrink-0
          min-h-screen
          flex
          items-center
          justify-center
          py-12
          will-change-transform
        "
      >
        <h2
          className={`
            ${anton.className}
            uppercase
            tracking-tight
            text-[clamp(2rem,5vw,4.5rem)]
            text-[#FFFBEB]
            whitespace-nowrap
            -rotate-90
            select-none
          `}
        >
          START YOUR PROJECT
        </h2>
      </div>

      {/* ── 2. MAIN CONTENT AREA (MIDDLE TEXT & RIGHT FORM) ── */}
      <div className="flex-grow flex items-center py-12 sm:py-16 px-6 sm:px-12 lg:px-16 overflow-x-auto">
        
        <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* MIDDLE COLUMN: TITLE & DESCRIPTION (Fade-Up Blur Reveal)  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: customEase }}
            className="lg:col-span-5 flex flex-col justify-start pt-4 lg:pt-12 will-change-transform"
          >
            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-slate-950 leading-[1.05]">
              TELL US ABOUT<br />
              YOUR PROJECT
            </h1>

            <p className="mt-6 font-sans font-normal text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-md">
              Isi formulir berikut dan tim kami akan menghubungi Anda secepat mungkin
              untuk mendiskusikan solusi terbaik sesuai kebutuhan bisnis Anda.
            </p>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CLEAN FLOATING FORM CARD (Rises y:60 -> 0)  */}
          {/* ========================================================= */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="
              lg:col-span-7
              w-full
              rounded-[2.2rem] sm:rounded-[2.8rem]
              bg-white
              p-6 sm:p-10 lg:p-12
              shadow-[0_15px_50px_rgba(0,0,0,0.04)]
              border
              border-slate-100
              space-y-5
              will-change-transform
            "
          >
            {/* Full Name */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@email.com"
                className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="+62..."
                className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Project Type
              </label>
              <select className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white">
                <option>Landing Page</option>
                <option>Company Profile</option>
                <option>E-Commerce</option>
                <option>Dashboard</option>
                <option>Custom Web App</option>
              </select>
            </div>

            {/* Estimated Budget */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Estimated Budget
              </label>
              <select className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white">
                <option>Rp 500rb - 2jt</option>
                <option>Rp 2jt - 5jt</option>
                <option>Rp 5jt - 10jt</option>
                <option>Rp 10jt+</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label className="mb-2 block font-sans font-bold text-xs sm:text-sm text-slate-900">
                Project Details
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-4 py-3 font-sans text-sm outline-none transition focus:border-slate-400 focus:bg-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="font-sans font-bold text-sm sm:text-base text-slate-900 hover:text-[#E52323] transition-colors cursor-pointer will-change-transform"
              >
                Send Project Inquiry
              </motion.button>
            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}
