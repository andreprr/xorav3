"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#111827]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/">

          <Image
            src="/xora-white.png"
            alt="XORA"
            width={150}
            height={40}
            priority
          />

        </Link>

        {/* Menu */}

        <nav className="hidden gap-10 lg:flex">

          {menu.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="font-medium text-white transition hover:text-[#F59E0B]"
            >
              {item.label}
            </a>

          ))}

        </nav>

        {/* CTA */}

        <div className="hidden lg:block">

          <Link
            href="/contact"
            className="rounded-full bg-[#F59E0B] px-7 py-3 font-semibold text-[#111827] transition hover:bg-white"
          >
            Get Consultation
          </Link>

        </div>

        {/* Mobile */}

        <button className="lg:hidden">

          <Menu className="h-7 w-7 text-white" />

        </button>

      </div>
    </header>
  );
}