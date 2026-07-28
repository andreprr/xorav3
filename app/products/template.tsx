"use client";

import { motion } from "framer-motion";

export default function ProductsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}