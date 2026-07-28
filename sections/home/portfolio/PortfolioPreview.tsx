'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import asset gambar
import companyProfileImg from './assets/company-profile.webp';
import landingPageImg from './assets/landing-page.webp';
import dashboardSystemImg from './assets/dashboard-system.webp';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolios = [
  {
    title: "Website Company Profile",
    category: "Corporate Website",
    tags: ["PROFESSIONAL", "TRUST"],
    description: "Desain profesional dan modern untuk meningkatkan kepercayaan klien secara signifikan.",
    image: companyProfileImg,
    slug: "/portfolio/company-profile",
  },
  {
    title: "Landing Page Produk",
    category: "Landing Page",
    tags: ["CONVERSION", "ENGAGEMENT"],
    description: "Halaman penawaran tinggi konversi dengan micro-interaction yang halus.",
    image: landingPageImg,
    slug: "/portfolio/landing-page",
  },
  {
    title: "Dashboard Sistem Bisnis",
    category: "Business System",
    tags: ["INTUITIVE UI", "ANALYTICS"],
    description: "UI/UX intuitif untuk manajemen data & analitik real-time yang kompleks.",
    image: dashboardSystemImg,
    slug: "/portfolio/dashboard-system",
  },
];

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;

      // 1. Animasi Header & Divider Entrance
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      entranceTl
        .from(titleRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from(
          dividerRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        );

      // 2. Animasi Masuk Card Aesthetic (Staggered Fade + Scale Up + Slide Up)
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Horizontal Scroll Calculation
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xDistanceToScroll = totalWidth - viewportWidth;

      if (xDistanceToScroll > 0) {
        gsap.to(container, {
          x: -xDistanceToScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      /* REVISI 1: Background disesuaikan dengan gradasi biru-putih lembut referensi */
      className="relative bg-gradient-to-br from-[#f3f9ff] via-[#e5f2fe] to-[#d6ebff] text-slate-900 overflow-hidden min-h-screen flex flex-col justify-between py-6 md:py-10"
    >
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HEADER SECTION --- */}
      <div className="w-full px-6 lg:px-12 shrink-0 relative z-10">
        <h2 
          ref={titleRef}
          className="text-[10vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[7.8vw] leading-none font-black tracking-tight uppercase text-slate-900 whitespace-nowrap select-none w-full text-justify"
        >
          RECENT PROJECTS
        </h2>

        {/* Subheader Divider */}
        <div 
          ref={dividerRef}
          className="mt-4 pt-3 border-t border-slate-400/30 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold tracking-wider text-slate-700 uppercase"
        >
          <span>PORTFOLIO SHOWCASE</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900/10 text-slate-900 border border-slate-900/10 text-[10px]">PREMIUM</span>
            <span className="px-3 py-1 rounded-full bg-slate-900/10 text-slate-900 border border-slate-900/10 text-[10px]">MODERN</span>
            <span className="px-3 py-1 rounded-full bg-slate-900/10 text-slate-900 border border-slate-900/10 text-[10px]">TRANSPARENT</span>
          </div>
        </div>
      </div>

      {/* --- HORIZONTAL CONTAINER PORTFOLIO CARDS --- */}
      <div 
        ref={containerRef} 
        className="flex gap-6 md:gap-8 px-6 lg:px-12 flex-nowrap items-center my-auto shrink-0 w-max pt-4 relative z-10"
      >
        {portfolios.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => { cardsRef.current[index] = el; }}
            /* REVISI 2: Card ultra transparan dengan glassmorphism & soft border */
            className="w-[85vw] md:w-[42vw] lg:w-[30vw] shrink-0 group relative flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/20 backdrop-blur-xl p-3.5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/35 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.12)] hover:border-white/80"
          >
            {/* Container Gambar Project */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white/30 border border-white/40">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 42vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                placeholder="blur"
              />
              
              {/* Overlay Hover Button */}
              <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[3px]">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-slate-950 text-xs font-bold shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  Detail Project <ArrowUpRight size={15} />
                </div>
              </div>
            </div>

            {/* Content Body Kartu Transparan */}
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-slate-700/80 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Chips Transparan */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 text-[9px] font-bold rounded-full bg-white/40 border border-white/60 text-slate-900 tracking-wider backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Click Target */}
            <Link href={item.slug} className="absolute inset-0 z-10">
              <span className="sr-only">Lihat {item.title}</span>
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}