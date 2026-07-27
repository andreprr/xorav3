"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import JsonLd from "@/components/seo/JsonLd";
import MotionWrapper from "@/components/animation/MotionWrapper";
import SmoothScroll from "@/components/animation/SmoothScroll";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isTemplateDemo =
    pathname.startsWith("/templates/") &&
    pathname !== "/templates";

  const isHome = pathname === "/";

  return (
    <SmoothScroll>
      {!isTemplateDemo && (
        <>
          <Navbar />
          <JsonLd />
        </>
      )}

      {isHome && <Sidebar />}

      <main className="flex-1">
        {children}
      </main>
    </SmoothScroll>
  );
}
