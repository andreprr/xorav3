"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./Hero";
import ProductList from "./ProductList";
import FAQ from "./FAQ";
import CTA from "./CTA";

// 1. Berikan tipe eksplisit Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 2. Tambahkan 'as const' pada nilai ease agar di-infer sebagai literal type
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const, // <-- Kunci perbaikan di sini
    },
  },
};

export default function ProductsPage() {
  return (
    <motion.main
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <ProductList />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <FAQ />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CTA />
      </motion.div>
    </motion.main>
  );
}
