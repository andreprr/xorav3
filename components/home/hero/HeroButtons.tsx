"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex items-center justify-center gap-5">

      {/* Explore */}

      <Link
        href="/portfolio"
        className="
          group
          inline-flex
          h-[62px]
          w-[220px]
          items-center
          justify-center
          rounded-full
          bg-black/85
          text-white
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,.25)]
          transition-all
          duration-300
          hover:bg-black
          hover:-translate-y-1
          hover:shadow-[0_30px_80px_rgba(0,0,0,.35)]
        "
      >
        <span className="text-[15px] font-semibold font-body text-white">
          Explore Work
        </span>

        <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      {/* Contact */}

      <Link
        href="/contact"
        className="
          group
          inline-flex
          h-[62px]
          w-[220px]
          items-center
          justify-center
          rounded-full
          border
          border-white/40
          bg-white/35
          text-slate-900
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(255,255,255,.15)]
          transition-all
          duration-300
          hover:bg-white/60
          hover:-translate-y-1
        "
      >
        <span className="text-[15px] font-semibold font-body">
          Start Project
        </span>

        <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}