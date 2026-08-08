"use client";

import { useRef } from "react";
import { Anton } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Config Font Google ANTON
const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  const banner1Ref = useRef<HTMLDivElement>(null);
  const contactsRowRef = useRef<HTMLDivElement>(null);
  const banner2Ref = useRef<HTMLDivElement>(null);
  const workingHoursRowRef = useRef<HTMLDivElement>(null);

  // ── GSAP SCROLLTRIGGER ANIMATION ──
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Top Banner 1 Reveal
      if (banner1Ref.current) {
        tl.fromTo(
          banner1Ref.current,
          { opacity: 0, y: 35, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
        );
      }

      // 2. Contact Items Reveal
      if (contactsRowRef.current) {
        tl.fromTo(
          contactsRowRef.current,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );
      }

      // 3. Middle Banner 2 Reveal
      if (banner2Ref.current) {
        tl.fromTo(
          banner2Ref.current,
          { opacity: 0, y: 35, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
      }

      // 4. Working Hours Items Reveal
      if (workingHoursRowRef.current) {
        tl.fromTo(
          workingHoursRowRef.current,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact-info"
      className="
        relative
        w-full
        min-h-screen
        bg-white
        text-slate-900
        font-sans
        select-none
        overflow-hidden
        py-12 sm:py-16 lg:py-24
      "
    >
      <div className="w-full flex flex-col gap-12 sm:gap-16">
        
        {/* ========================================================= */}
        {/* SECTION 1: WE'RE READY TO HELP YOUR BUSINESS              */}
        {/* ========================================================= */}
        <div className="w-full">
          {/* BANNER MERAH ATAS */}
          <div
            ref={banner1Ref}
            className="w-full bg-[#E52323] py-8 sm:py-12 lg:py-14 px-6 text-center shadow-sm"
          >
            <h2
              className={`
                ${anton.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(2.8rem,7.5vw,7.5rem)]
                text-white
              `}
            >
              WE'RE READY TO HELP YOUR BUSINESS
            </h2>
          </div>

          {/* SUB-CAPTION */}
          <p className="text-center font-sans font-medium text-xs sm:text-sm lg:text-base text-slate-700 mt-4 sm:mt-6 px-6">
            Hubungi kami melalui salah satu media berikut. Kami akan merespon secepat mungkin.
          </p>

          {/* 3 KOLOM INFO KONTAK (PHONE, EMAIL, LOCATION) */}
          <div
            ref={contactsRowRef}
            className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 mt-10 sm:mt-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-start">
              
              {/* PHONE */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-slate-950">
                  PHONE
                </h3>
                <p className="mt-2 font-sans font-medium text-sm sm:text-base text-slate-700">
                  +6282130300614
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-slate-950">
                  EMAIL
                </h3>
                <p className="mt-2 font-sans font-medium text-sm sm:text-base text-slate-700 break-all">
                  dickysuhardimann@gmail.com
                </p>
              </div>

              {/* LOCATION */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-slate-950">
                  LOCATION
                </h3>
                <p className="mt-2 font-sans font-medium text-sm sm:text-base text-slate-700">
                  Bandung, Indonesiaa
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: WORKING HOURS                                  */}
        {/* ========================================================= */}
        <div className="relative w-full mt-6 sm:mt-10">
          
          {/* BANNER MERAH WORKING HOURS */}
          <div
            ref={banner2Ref}
            className="w-full bg-[#E52323] py-8 sm:py-12 lg:py-14 px-6 text-center shadow-sm"
          >
            <h2
              className={`
                ${anton.className}
                uppercase
                tracking-tight
                leading-none
                text-[clamp(3.2rem,8.5vw,8.5rem)]
                text-white
              `}
            >
              WORKING HOURS
            </h2>
          </div>

          {/* SUB-CAPTION */}
          <p className="text-center font-sans font-medium text-xs sm:text-sm lg:text-base text-slate-700 mt-4 sm:mt-6 px-6">
            Always Ready fo New Projects
          </p>

          {/* 2 KOLOM WORKING HOURS + RIGHT SIDE RED BLOCK */}
          <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 mt-10 sm:mt-14">
            
            <div
              ref={workingHoursRowRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start max-w-4xl"
            >
              {/* EVERYDAY */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-slate-950">
                  EVERYDAY
                </h3>
                <p className="mt-2 font-sans font-medium text-sm sm:text-base text-slate-700">
                  09.00 - 18.00 WIB
                </p>
              </div>

              {/* AVERAGE RESPONSE */}
              <div className="flex flex-col items-start">
                <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight text-slate-950">
                  AVERAGE RESPONSE
                </h3>
                <p className="mt-2 font-sans font-medium text-sm sm:text-base text-slate-700">
                  Less than 1 Hour
                </p>
              </div>
            </div>

            {/* RIGHT SIDE VERTICAL RED ACCENT BLOCK */}
            <div className="hidden lg:block absolute right-0 top-[-60px] bottom-[-60px] w-16 xl:w-24 bg-[#E52323]" />

          </div>

        </div>

      </div>
    </section>
  );
}