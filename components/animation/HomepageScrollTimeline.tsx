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

      if (
          !hero ||
          !heroLogo ||
          !heroTitle ||
          !heroDescription ||
          !heroButtons 
          
        ) {
          return;
        }
      // ══════════════════════════════════════════════════════════════
      // INTRO ANIMATION — fires after loading screen (2.1s delay)
      // ══════════════════════════════════════════════════════════════

      const intro = gsap.timeline({ delay: 2.1 });

      intro
        .from(
          heroTitle,
          { opacity: 0, y: 80, duration: 1, ease: "power4.out" }
        )
        .from(
          heroLogo,
          {
            scale: 0.94,
            opacity: 0,
            duration: 1.3,
            ease: "power4.out",
            force3D: true,
          },
          "-=0.7"
        )
        .from(
          heroDescription,
          { opacity: 0, y: 40, duration: 0.8, ease: "power4.out" },
          "-=0.65"
        )
        .from(
          heroButtons,
          { opacity: 0, y: 30, duration: 0.8, ease: "power4.out" },
          "-=0.5"
        );

      // ══════════════════════════════════════════════════════════════
      // HERO SCROLL TIMELINE — scrubbed to scroll
      // ══════════════════════════════════════════════════════════════

      const heroScroll = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=100%",
          scrub: 1.8,
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
      // 15% → 65%: logo eases out over a longer, heavier scroll distance.
      heroScroll.fromTo(
        heroLogo,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.98,
          duration: 0.5,
          ease: "power2.inOut",
          force3D: true,
          immediateRender: false,
        },
        0.15
      );

      // 30% → 70%: Hero content follows in a calm, overlapping sequence.
      heroScroll.fromTo(
        heroTitle,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: -32,
          scale: 0.98,
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
          y: -20,
          filter: "blur(2px)",
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
          y: -16,
          scale: 0.97,
          duration: 0.22,
          ease: "power2.inOut",
          force3D: true,
          immediateRender: false,
        },
        0.5
      );

      // The marquee is always present; it is the stable divider into Trusted.

      // 42% → 67%: navbar clears before the sidebar begins.
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

      // 67% → 85%: sidebar takes over only after the navbar has left.
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

      // 75% → 100%: Trusted enters while the Hero has almost resolved.
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
      // ===================================================
      // PRODUCT PANEL PULL
      // ===================================================

    
      // ══════════════════════════════════════════════════════════════
      // SECTION ENTRANCE ANIMATIONS
      // Animate only content wrappers, never entire sections.
      // toggleActions "play reverse play reverse" enables reversal
      // on scroll back up.
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
        tl.from(
          headerElement,
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }
        ).from(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: cardScale,
            stagger: staggerAmount,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        );
        return tl;
      }

      // ── Products ──
      sectionTimeline(
        "#products",
        "#products .max-w-2xl",
        "#products .grid > div"
      );

      // ── Why Xora ──
      sectionTimeline(
        "#why-xora",
        "#why-xora .max-w-2xl",
        "#why-xora .grid > div"
      );

      // ── Process ──
      sectionTimeline(
        "#process",
        "#process .max-w-2xl",
        "#process .grid > div"
      );

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
          .from(
            portfolioHeader,
            { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }
          )
          .from(
            portfolioCards,
            {
              opacity: 0,
              y: 50,
              scale: 0.97,
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
          .from(
            pricingHeader,
            { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }
          )
          .from(
            pricingCards,
            {
              opacity: 0,
              y: 50,
              scale: 0.97,
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
