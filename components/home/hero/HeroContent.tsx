"use client";

import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import XoraLogo from "@/components/3d/XoraLogo";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20">
      <div
        id="hero-content"
        className="
          relative
          flex
          w-full
          flex-col
          items-center
          text-center
          px-6
          pt-[clamp(4rem,8vh,6rem)]
        "
      >

        <div
          id="hero-logo"
          className="h-[clamp(16.25rem,28vw,27.5rem)] w-[clamp(16.25rem,28vw,27.5rem)] shrink-0"
        >
          <XoraLogo />
        </div>

        <HeroTitle />

        <p
          id="hero-description"
          className="
            mt-6
            max-w-[42rem]
            font-body
            text-[clamp(1rem,1.35vw,1.125rem)]
            font-normal
            leading-[1.65]
            tracking-[-0.015em]
            text-slate-600
          "
        >
          XORA menghadirkan solusi digital modern 
          untuk membantu bisnis, UMKM, startup, dan perusahaan berkembang melalui website premium, 
          sistem digital, serta integrasi AI yang dirancang untuk meningkatkan efisiensi, 
          memperkuat identitas merek, dan memberikan pengalaman digital yang berkelas.
        </p>

        <div
          id="hero-buttons"
          className="mt-8"
        >
          <HeroButtons />
        </div>
      </div>
    </div>
  );
}
