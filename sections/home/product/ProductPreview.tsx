"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProductHeader from "./ProductHeader";
import ProductStack from "./ProductStack";

// Register Plugin GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ProductPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stack = document.getElementById("product-stack");
      if (!stack) return;

      // Hitung total scroll horizontal ke kiri
      const totalWidth = stack.scrollWidth - window.innerWidth + 96;

      const animation = gsap.to(stack, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1, // Mencegah glitch pada pinning
        },
      });

      return () => {
        // Cleanup otomatis saat unmount / pindah halaman
        animation.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="products"
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-[#f8fafc]
        flex flex-col justify-center
      "
    >
      {/* Background Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-rose-100/40 blur-[160px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full py-6">
        <ProductHeader />
        <ProductStack />
      </div>
    </section>
  );
}