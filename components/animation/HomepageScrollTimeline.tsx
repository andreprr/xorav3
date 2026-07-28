"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomepageScrollTimeline() {
  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>("#hero");
    const heroLogo = document.querySelector<HTMLElement>("#hero-logo");
    const heroTitle = document.querySelector<HTMLElement>("#hero-title");
    const heroDescription = document.querySelector<HTMLElement>("#hero-description");
    const heroButtons = document.querySelector<HTMLElement>("#hero-buttons");
    const navbar = document.querySelector<HTMLElement>("#navbar");
    const sidebar = document.querySelector<HTMLElement>("#sidebar");
    const trusted = document.querySelector<HTMLElement>("#trusted");
    const trustedHeader = trusted?.querySelector<HTMLElement>(".text-center");
    const trustedCards = trusted
      ? gsap.utils.toArray<HTMLElement>(".grid > div", trusted)
      : [];

    if (!hero || !heroLogo || !heroTitle || !heroDescription || !heroButtons) {
      return;
    }

    // ══════════════════════════════════════════════════════════════
    // INTRO ANIMATION — Crystal Glass Entrance (2.1s delay)
    // ══════════════════════════════════════════════════════════════

    const intro = gsap.timeline({ delay: 2.1 });

    intro
      .fromTo(
        heroLogo,
        { opacity: 0, scale: 0.85, filter: "blur(15px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
          force3D: true,
        }
      )
      .fromTo(
        heroTitle,
        { opacity: 0, y: 60, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.9"
      )
      .fromTo(
        heroDescription,
        { opacity: 0, y: 30, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .fromTo(
        heroButtons,
        { opacity: 0, y: 25, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.5"
      );

    // ══════════════════════════════════════════════════════════════
    // HERO SCROLL TIMELINE — Ice Glass Fade Out Effect
    // ══════════════════════════════════════════════════════════════

    const heroScroll = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
      },
    });

    heroScroll.set(
      [
        heroLogo,
        heroTitle,
        heroDescription,
        heroButtons,
        ...(navbar ? [navbar] : []),
        ...(sidebar ? [sidebar] : []),
        ...(trustedHeader ? [trustedHeader] : []),
        ...trustedCards,
      ],
      { willChange: "transform, opacity, filter" }
    );

    // 15% → 65%: Logo fades & crystallizes out
    heroScroll.fromTo(
      heroLogo,
      { opacity: 1, scale: 1, filter: "blur(0px)" },
      {
        opacity: 0,
        scale: 0.92,
        filter: "blur(10px)",
        duration: 0.5,
        ease: "power2.inOut",
        force3D: true,
        immediateRender: false,
      },
      0.15
    );

    // 30% → 70%: Hero Title dissolves
    heroScroll.fromTo(
      heroTitle,
      { opacity: 1, y: 0, scale: 1 },
      {
        opacity: 0,
        y: -40,
        scale: 0.96,
        duration: 0.35,
        ease: "power2.inOut",
        force3D: true,
        immediateRender: false,
      },
      0.3
    );

    heroScroll.fromTo(
      heroDescription,
      { opacity: 1, y: 0, filter: "blur(0px)" },
      {
        opacity: 0,
        y: -25,
        filter: "blur(8px)",
        duration: 0.3,
        ease: "power2.inOut",
        force3D: true,
        immediateRender: false,
      },
      0.4
    );

    heroScroll.fromTo(
      heroButtons,
      { opacity: 1, y: 0, scale: 1 },
      {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.22,
        ease: "power2.inOut",
        force3D: true,
        immediateRender: false,
      },
      0.5
    );

    // 42% → 67%: Navbar Slide Up
    if (navbar) {
      heroScroll.fromTo(
        navbar,
        { yPercent: 0 },
        {
          yPercent: -120,
          duration: 0.25,
          ease: "power2.inOut",
          force3D: true,
          immediateRender: false,
        },
        0.42
      );
    }

    // 67% → 85%: Sidebar Slide In
    if (sidebar) {
      heroScroll.set(sidebar, { pointerEvents: "none" }, 0);
      heroScroll.fromTo(
        sidebar,
        { xPercent: -100, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power2.inOut",
          force3D: true,
          immediateRender: false,
        },
        0.67
      );
      heroScroll.set(sidebar, { pointerEvents: "auto" }, 0.85);
    }

    // 75% → 100%: Trusted Section Reveal
    if (trustedHeader) {
      heroScroll.from(
        trustedHeader,
        {
          opacity: 0,
          y: 34,
          filter: "blur(5px)",
          duration: 0.18,
          ease: "power3.out",
          force3D: true,
        },
        0.75
      );
    }

    if (trustedCards.length) {
      heroScroll.from(
        trustedCards,
        {
          opacity: 0,
          y: 40,
          filter: "blur(5px)",
          stagger: 0.015,
          duration: 0.12,
          ease: "power3.out",
          force3D: true,
        },
        0.82
      );
    }

    // ══════════════════════════════════════════════════════════════
    // SECTION ENTRANCE ANIMATIONS
    // ══════════════════════════════════════════════════════════════

    function sectionTimeline(
      trigger: string,
      headerSelector: string,
      cardSelector: string,
      staggerAmount = 0.12,
      cardScale = 0.97
    ) {
      const triggerElement = document.querySelector<HTMLElement>(trigger);
      const headerElement = document.querySelector<HTMLElement>(headerSelector);
      const cards = gsap.utils.toArray<HTMLElement>(cardSelector);

      if (!triggerElement || !headerElement || !cards.length) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
      tl.from(headerElement, {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power3.out",
      }).from(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: cardScale,
          filter: "blur(6px)",
          stagger: staggerAmount,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.4"
      );
      return tl;
    }

    // ── Products ──
    sectionTimeline("#products", "#products .max-w-2xl", "#products .grid > div");

    // ── Why Xora ──
    sectionTimeline("#why-xora", "#why-xora .max-w-2xl", "#why-xora .grid > div");

    // ── Process ──
    sectionTimeline("#process", "#process .max-w-2xl", "#process .grid > div");

    // ── Portfolio ──
    const portfolio = document.querySelector<HTMLElement>("#portfolio");
    const portfolioHeader = portfolio?.querySelector<HTMLElement>(
      ":scope > div > div:first-child"
    );
    const portfolioCards = portfolio
      ? gsap.utils.toArray<HTMLElement>(".grid > div", portfolio)
      : [];
    if (portfolio && portfolioHeader && portfolioCards.length) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: portfolio,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(portfolioHeader, {
          opacity: 0,
          y: 40,
          filter: "blur(6px)",
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          portfolioCards,
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
            filter: "blur(6px)",
            stagger: 0.15,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }

    // ── Pricing ──
    const pricing = document.querySelector<HTMLElement>("#pricing");
    const pricingHeader = pricing?.querySelector<HTMLElement>(".max-w-2xl");
    const pricingCards = pricing
      ? gsap.utils.toArray<HTMLElement>(".grid > div", pricing)
      : [];
    const pricingFooter = pricing?.querySelector<HTMLElement>(
      ".text-center:last-child"
    );
    if (pricing && pricingHeader && pricingCards.length && pricingFooter) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: pricing,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(pricingHeader, {
          opacity: 0,
          y: 40,
          filter: "blur(6px)",
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          pricingCards,
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
            filter: "blur(6px)",
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          pricingFooter,
          { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
    }

    // ── CTA ──
    const cta = document.querySelector<HTMLElement>("#cta");
    const ctaItems = cta
      ? gsap.utils.toArray<HTMLElement>(".mx-auto > *", cta)
      : [];
    if (cta && ctaItems.length) {
      gsap.from(ctaItems, {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  });

  return null;
}