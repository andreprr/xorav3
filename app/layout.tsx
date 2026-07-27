import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { manrope, vercetti } from "./fonts";
import LoadingScreen from "@/components/animation/LoadingScreen";
import LayoutContent from "@/components/layout/LayoutContent";

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
      className={`${manrope.variable} ${vercetti.variable}`}
  >
      <body className="min-h-screen overflow-x-hidden">
        <LoadingScreen />

        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}