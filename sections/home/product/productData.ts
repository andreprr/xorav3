import { StaticImageData } from "next/image";
import websiteUmkm from "./assets/website-umkm.webp";
import companyProfile from "./assets/company-profile.webp";
import ecommerce from "./assets/ecommerce.webp";
import webSystem from "./assets/web-system.webp";
import aiAutomation from "./assets/ai-automation.webp";
import landingPage from "./assets/landing-page.webp";
import maintenance from "./assets/maintenance.webp";

export interface ProductItem {
  id: number;

  // Header Section
  headline: string;
  summary: string;

  // Product Card
  title: string;
  category: string;
  industry: string;
  delivery: string;
  description: string;

  image: StaticImageData;
}

export const products: ProductItem[] = [
  {
    id: 1,

    headline: "Website UMKM",

    summary:
      "Website profesional untuk membantu UMKM tampil lebih modern, dipercaya pelanggan, dan siap berkembang di era digital.",

    title: "Website UMKM",

    category: "Website Development",

    industry: "Small Business",

    delivery: "Fast Deployment",

    description:
      "Website profesional untuk UMKM agar bisnis lebih dipercaya, mudah ditemukan pelanggan, dan terhubung langsung ke WhatsApp. Cocok untuk coffee shop, bakery, salon, bengkel, laundry, hingga toko retail.",

    image: websiteUmkm,
  },

  {
    id: 2,

    headline: "Company Profile",

    summary:
      "Bangun citra perusahaan yang profesional melalui website modern yang meningkatkan kredibilitas dan kepercayaan calon klien.",

    title: "Company Profile",

    category: "Corporate Website",

    industry: "Business & Company",

    delivery: "Premium Design",

    description:
      "Website company profile modern untuk meningkatkan kredibilitas perusahaan, memperkuat branding, dan menampilkan layanan secara profesional kepada calon klien.",

    image: companyProfile,
  },

  {
    id: 3,

    headline: "E-Commerce",

    summary:
      "Tingkatkan penjualan dengan toko online modern yang cepat, aman, dan mudah dikelola.",

    title: "E-Commerce",

    category: "Online Store",

    industry: "Retail & Commerce",

    delivery: "Integrated Payment",

    description:
      "Website toko online dengan katalog produk, checkout, dashboard admin, serta integrasi pembayaran dan WhatsApp untuk membantu meningkatkan penjualan bisnis.",

    image: ecommerce,
  },

  {
    id: 4,

    headline: "Web Based System",

    summary:
      "Bangun sistem digital yang dirancang khusus sesuai alur kerja bisnis agar operasional menjadi lebih efisien.",

    title: "Web Based System",

    category: "Business System",

    industry: "Internal Management",

    delivery: "Custom Development",

    description:
      "Sistem berbasis web yang dikembangkan sesuai kebutuhan seperti CRM, ERP, HR, Inventory, POS, Dashboard, Booking System, hingga sistem operasional perusahaan lainnya.",

    image: webSystem,
  },

  {
    id: 5,

    headline: "AI Automation",

    summary:
      "Otomatisasi proses bisnis menggunakan Artificial Intelligence untuk meningkatkan produktivitas dan efisiensi.",

    title: "AI Automation",

    category: "Artificial Intelligence",

    industry: "Business Automation",

    delivery: "AI Integration",

    description:
      "Integrasi AI untuk customer service, chatbot, workflow automation, AI assistant, hingga berbagai proses bisnis agar pekerjaan menjadi lebih cepat dan efisien.",

    image: aiAutomation,
  },

  {
    id: 6,

    headline: "Landing Page",

    summary:
      "Landing page premium dengan fokus pada performa, branding, dan konversi yang tinggi.",

    title: "Landing Page",

    category: "Marketing Website",

    industry: "Digital Campaign",

    delivery: "High Conversion",

    description:
      "Landing page modern yang dirancang untuk meningkatkan konversi promosi produk, campaign digital, launching bisnis, maupun event perusahaan.",

    image: landingPage,
  },

  {
    id: 7,

    headline: "Maintenance",

    summary:
      "Pastikan website tetap aman, cepat, dan selalu berjalan optimal melalui layanan maintenance berkelanjutan.",

    title: "Maintenance",

    category: "Website Support",

    industry: "Maintenance Service",

    delivery: "24/7 Monitoring",

    description:
      "Layanan maintenance meliputi monitoring, backup, update sistem, keamanan, SSL, hosting, serta optimasi performa agar website selalu berada dalam kondisi terbaik.",

    image: maintenance,
  },
];