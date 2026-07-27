"use client";

import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Briefcase,
  FolderOpen,
  BadgeDollarSign,
  User,
  Mail,
} from "lucide-react";

const menus = [
  { icon: Home, label: "Home", href: "/" },
  { icon: LayoutGrid, label: "Products", href: "/products" },
  { icon: FolderOpen, label: "Templates", href: "/templates" },
  { icon: Briefcase, label: "Portfolio", href: "/portfolio" },
  { icon: BadgeDollarSign, label: "Pricing", href: "/pricing" },
  { icon: User, label: "About", href: "/about" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="
      fixed
      left-0
      top-0
      z-50
      h-screen
      w-[120px]
      -translate-x-full
      opacity-0
      pointer-events-none
      transition-none
      "
    >
      <div className="flex h-full flex-col items-center justify-center border-r border-white/20 bg-white/10 backdrop-blur-xl">

        <div className="flex flex-col gap-5">

          {menus.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-2 rounded-xl p-3 transition hover:bg-white/20"
              >

                <Icon className="h-5 w-5 text-slate-700" />

                <span className="text-[11px] font-medium text-slate-700">
                  {item.label}
                </span>

              </Link>

            );

          })}

        </div>

      </div>
    </aside>
  );
}