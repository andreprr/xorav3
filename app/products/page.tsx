"use client";

import { motion } from "framer-motion";
import Hero from "./Hero";
import ProductList from "./ProductList";
import FAQ from "./FAQ";
import CTA from "./CTA";

// Variants untuk efek stagger animasi antar-section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
      {/* Hero Section */}
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      {/* Product List Section */}
      <motion.div variants={sectionVariants}>
        <ProductList />
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={sectionVariants}>
        <FAQ />
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={sectionVariants}>
        <CTA />
      </motion.div>
    </motion.main>
  );
}