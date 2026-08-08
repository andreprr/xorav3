import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { manrope, vercetti } from "./fonts";
import LoadingScreen from "@/components/animation/LoadingScreen";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "XORA",
    template: "%s | XORA",
  },
  description: "Digital Maker Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      /* TAMBAHKAN inter.variable DI SINI */
      className={`${inter.variable} ${manrope.variable} ${vercetti.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans">
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}