"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Templates", href: "/templates" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hook Scroll Framer Motion untuk mendeteksi arah scroll
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Sembunyikan navbar jika scroll ke bawah > 100px & menu mobile tidak terbuka
    if (latest > previous && latest > 100 && !mobileOpen) {
      setHidden(true);
    } 
    // Munculkan kembali jika scroll ke atas
    else if (latest < previous) {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        id="navbar"
        initial={false}
        animate={{
          height: scrolled ? 72 : 88,
          y: hidden ? "-100%" : "0%",
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-[999]
          bg-transparent
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1600px]
            items-center
            justify-between
            px-8
            sm:px-14
            xl:px-20
          "
        >
          {/* LOGO */}
          <Link href="/">
            <h1 className="text-[28px] sm:text-[30px] font-black tracking-tight text-slate-900">
              XORA
            </h1>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[15px] font-medium text-slate-700 transition hover:text-black"
                >
                  {item.name}

                  {active && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute left-1/2 top-[28px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-black"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                rounded-xl
                bg-white
                px-7
                text-[15px]
                font-semibold
                text-slate-900
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Start Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-1 text-slate-900"
            aria-label="Open Menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="
              fixed
              inset-0
              z-[9999]
              bg-white/90
              backdrop-blur-2xl
              flex
              flex-col
              justify-between
            "
          >
            <div>
              {/* HEADER MOBILE */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-200
                  px-8
                  py-7
                "
              >
                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  XORA
                </h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    transition
                    hover:bg-slate-200
                  "
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6 text-slate-900" />
                </button>
              </div>

              {/* MENU LINKS MOBILE */}
              <nav className="flex flex-col px-8 py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        py-6
                        text-2xl
                        font-semibold
                        text-slate-900
                        transition
                        hover:translate-x-2
                      "
                    >
                      {item.name}
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* CTA MOBILE */}
            <div className="px-8 pb-10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  flex
                  w-full
                  h-[60px]
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-900
                  text-lg
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-black
                "
              >
                Start Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}