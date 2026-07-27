"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initProcessAnimation() {
    const section = document.querySelector<HTMLElement>("#process");

    if (!section) return;

    const ctx = gsap.context(() => {
        const header =
            section.querySelector<HTMLElement>("#process-header");

        const hero =
            section.querySelector<HTMLElement>("#hero-card");

        const cards =
            gsap.utils.toArray<HTMLElement>(".process-card");

        /*
        ============================
        Initial State
        ============================
        */

        if (header) {
            gsap.set(header, {
                opacity: 0,
                y: 80,
            });
        }

        if (hero) {
            gsap.set(hero, {
                opacity: 0,
                y: 120,
                rotate: -10,
                scale: .92,
            });
        }

        if (cards.length) {
            gsap.set(cards, {
                opacity: 0,
                y: 100,
                scale: .92,
            });
        }

        /*
        ============================
        Reveal Timeline
        ============================
        */

        const tl = gsap.timeline({

            scrollTrigger: {

                trigger: section,

                start: "top 70%",

                end: "bottom center",

                toggleActions: "play none none reverse",

            },

        });

        if (header) {

            tl.to(header, {

                opacity: 1,

                y: 0,

                duration: .8,

                ease: "power4.out",

            });

        }

        if (hero) {

            tl.to(hero, {

                opacity: 1,

                y: 0,

                rotate: -6,

                scale: 1,

                duration: .9,

                ease: "power4.out",

            }, "-=.4");

        }

        if (cards.length) {

            tl.to(cards, {

                opacity: 1,

                y: 0,

                scale: 1,

                stagger: .18,

                duration: .8,

                ease: "power4.out",

            }, "-=.5");

        }

        /*
        ============================
        Floating
        ============================
        */

        if (hero) {

            gsap.to(hero, {

                y: 18,

                rotate: -7,

                repeat: -1,

                yoyo: true,

                duration: 4,

                ease: "sine.inOut",

            });

        }

        cards.forEach((card, i) => {

            gsap.to(card, {

                y: 12 + i * 6,

                rotate: i % 2 ? 2 : -2,

                repeat: -1,

                yoyo: true,

                duration: 4 + i,

                ease: "sine.inOut",

            });

        });

        /*
        ============================
        Scroll Depth
        ============================
        */

        if (hero) {

            gsap.to(hero, {

                yPercent: -20,

                ease: "none",

                scrollTrigger: {

                    trigger: section,

                    start: "top bottom",

                    end: "bottom top",

                    scrub: true,

                },

            });

        }

        cards.forEach((card, i) => {

            gsap.to(card, {

                yPercent: -(10 + i * 8),

                ease: "none",

                scrollTrigger: {

                    trigger: section,

                    start: "top bottom",

                    end: "bottom top",

                    scrub: true,

                },

            });

        });

        /*
        ============================
        Mouse Parallax
        ============================
        */

        const move = (e: MouseEvent) => {

            const rect = section.getBoundingClientRect();

            const x =
                ((e.clientX - rect.left) / rect.width - .5) * 2;

            const y =
                ((e.clientY - rect.top) / rect.height - .5) * 2;

            if (hero) {

                gsap.to(hero, {

                    x: x * 20,

                    y: y * 20,

                    duration: .7,

                    overwrite: "auto",

                });

            }

            cards.forEach((card, i) => {

                gsap.to(card, {

                    x: x * (10 + i * 8),

                    y: y * (10 + i * 8),

                    duration: .7,

                    overwrite: "auto",

                });

            });

        };

        section.addEventListener("mousemove", move);

        return () => {

            section.removeEventListener("mousemove", move);

        };

    }, section);

    return () => {

        ctx.revert();

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    };
}