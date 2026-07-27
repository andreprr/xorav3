"use client";
import { products as productData } from "@/sections/home/product/productData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ProductScrollTimeline() {
  useGSAP(() => {
    // ======================================================
    // ELEMENTS
    // ======================================================

    const products = document.querySelector<HTMLElement>("#products");

    const serviceTitle =
      document.querySelector<HTMLElement>("#service-title");

    const productContent =
      document.querySelector<HTMLElement>("#product-content");

    // Product Stack
    const cards = gsap.utils.toArray<HTMLElement>(
      "#product-stack > [data-product-card]"
    );

    if (
      !products ||
      !serviceTitle ||
      !productContent
    ) {
      return;
    }

    // ======================================================
    // INITIAL STATE
    // ======================================================

    gsap.set(serviceTitle, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      willChange: "transform,opacity,filter",
    });

    gsap.set(productContent, {
      opacity: 0,
      y: 120,
      willChange: "transform,opacity",
    });

    // Semua card ditumpuk
    gsap.set(cards, {
      yPercent: 100,
      autoAlpha: 0,
      willChange: "transform,opacity",
    });

    // Card pertama tampil
    if (cards.length) {
      gsap.set(cards[0], {
        yPercent: 0,
        autoAlpha: 1,
      });
    }

    // ======================================================
    // PRODUCT STORY
    // ======================================================

    const scrollDistance = Math.max((cards.length - 1) * 40 + 100, 320);

    const story = gsap.timeline({
      scrollTrigger: {
        trigger: products,
        start: "top top",
        end: `+=${scrollDistance}%`,
        pin: true,
        pinSpacing: true,
        scrub: 0.18,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // ======================================================

    story.to({}, { duration: 0.28 });

    // ======================================================
    // SERVICE FADE
    // ======================================================

    story.to(serviceTitle, {
      opacity: 0,
      y: -40,
      filter: "blur(10px)",
      duration: 0.35,
      ease: "power3.out",
    });

    story.set(serviceTitle, {
      display: "none",
    });

    // ======================================================
    // PRODUCT CONTENT
    // ======================================================

    story.to(
      productContent,
      {
        opacity: 1,
        y: 0,
        duration: 0.42,
        ease: "power4.out",
      },
      "-=0.12"
    );

    // ======================================================
    // HOLD
    // ======================================================

    story.to({}, { duration: 0.28 });

    // ======================================================
    // PRODUCT STACK
    // ======================================================

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      story.to(
        card,
        {
          yPercent: -100,
          autoAlpha: 0,
          duration: 0.45,
          ease: "power4.inOut",
        }
      );

      story.fromTo(
        cards[index + 1],
        {
          yPercent: 100,
          autoAlpha: 1,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.45,
          ease: "power4.inOut",
        },
        "<"
      );

      story.to({}, { duration: 0.6 });
    });

    // ======================================================
    // CLEANUP
    // ======================================================

    return () => {
      story.scrollTrigger?.kill();
      story.kill();
    };
  });

  return null;
}
