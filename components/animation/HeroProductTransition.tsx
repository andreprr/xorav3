"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroProductTransition() {
  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>("#hero");
    const product = document.querySelector<HTMLElement>("#products");

    if (!hero || !product) return;

    // Initial State
    gsap.set(product, {
      y: "12vh",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      boxShadow: "0 -40px 120px rgba(0,0,0,.35)",
      willChange: "transform",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(product, {
      y: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      ease: "none",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });

  return null;
}