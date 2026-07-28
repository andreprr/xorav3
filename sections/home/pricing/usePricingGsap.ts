"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePricingGsap() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // ============================================
            // Initial State
            // ============================================

            gsap.set("#pricing-header > *", {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
            });

            gsap.set(".pricing-card", {
                opacity: 0,
                y: 80,
                scale: 0.94,
                rotateX: -8,
            });

            gsap.set("#pricing-cta", {
                opacity: 0,
                y: 40,
            });

            // ============================================
            // Timeline
            // ============================================

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pricing",
                    start: "top 70%",
                    once: true,
                },
            });

            // Header

            tl.to("#pricing-header > *", {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Cards

            tl.to(
                ".pricing-card",
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.18,
                    ease: "power4.out",
                },
                "-=0.2"
            );

            // CTA

            tl.to(
                "#pricing-cta",
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            );

            // ============================================
            // Featured Card Pop
            // ============================================

            gsap.fromTo(
                ".pricing-card:nth-child(2)",
                {
                    scale: 0.94,
                },
                {
                    scale: 1,
                    duration: 1.2,
                    ease: "elastic.out(1,0.45)",
                    scrollTrigger: {
                        trigger: "#pricing",
                        start: "top 70%",
                        once: true,
                    },
                }
            );

            // ============================================
            // Floating Animation
            // ============================================

            gsap.to(".pricing-card", {
                y: "-=8",
                duration: 3,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: {
                    each: 0.25,
                    from: "center",
                },
            });

            // ============================================
            // CTA Floating
            // ============================================

            gsap.to(".pricing-button", {
                y: -4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // ============================================
            // Mouse Parallax
            // ============================================

            const cards = gsap.utils.toArray<HTMLElement>(".pricing-card");

            cards.forEach((card) => {
                const move = (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();

                    const x = (e.clientX - rect.left - rect.width / 2) / 18;
                    const y = (e.clientY - rect.top - rect.height / 2) / 18;

                    gsap.to(card, {
                        rotateY: x,
                        rotateX: -y,
                        duration: 0.6,
                        ease: "power2.out",
                        transformPerspective: 1200,
                        transformOrigin: "center",
                    });
                };

                const leave = () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    });
                };

                card.addEventListener("mousemove", move);
                card.addEventListener("mouseleave", leave);
            });

        });

        return () => ctx.revert();
    }, []);
}