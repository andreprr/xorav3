"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function WhyXoraTimeline() {
  useGSAP(() => {
    const top = document.querySelector("#why-row-top");
    const bottom = document.querySelector("#why-row-bottom");

    if (!top || !bottom) return;

    //-------------------------------------------------
    // TOP ROW
    //-------------------------------------------------

    gsap.to(top, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    //-------------------------------------------------
    // BOTTOM ROW
    //-------------------------------------------------

    gsap.to(bottom, {
      xPercent: 50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
  });

  return null;
}