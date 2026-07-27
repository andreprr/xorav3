"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
        }}
        transition={{
          duration: .35,
          ease: "easeOut",
        }}
        className="
        fixed
        top-0
        left-0
        right-0
        z-[999]
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
      px-14
      xl:px-20
    "
  >
    {/* LOGO */}

    <Link href="/">
      <h1 className="text-[30px] font-black tracking-tight text-slate-900">
        XORA
      </h1>
    </Link>

    {/* MENU */}

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

    {/* CTA */}

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

    {/* MOBILE */}

    <button
      onClick={() => setMobileOpen(true)}
      className="lg:hidden"
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
            "
          >
            {/* HEADER */}

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
              <h2 className="text-3xl font-black tracking-tight">
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
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* MENU */}

            <nav className="flex flex-col px-10 py-10">

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
                    py-7
                    text-3xl
                    font-semibold
                    transition
                    hover:translate-x-2
                    "
                  >
                    {item.name}

                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>

              ))}

              {/* CTA */}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                mt-12
                inline-flex
                h-[64px]
                items-center
                justify-center
                rounded-full
                bg-slate-900
                text-lg
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-black
                "
              >
                Start Project

                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}