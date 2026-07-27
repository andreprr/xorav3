"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Templates", href: "/templates" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-white"
        >

          <div className="flex items-center justify-between border-b px-6 py-6">

            <h2 className="text-2xl font-black">
              XORA
            </h2>

            <button onClick={onClose}>
              <X className="size-7" />
            </button>

          </div>

          <div className="flex flex-col px-8 py-10">

            {links.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="border-b py-5 text-2xl font-semibold"
              >
                {item.name}
              </Link>

            ))}

            <Button
              size="lg"
              className="mt-10"
            >
              Start Project
            </Button>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}