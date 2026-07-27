import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          START YOUR PROJECT
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
          Temukan Template
          <br />
          Terbaik untuk Bisnis Anda
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Pilih template premium XORA atau konsultasikan kebutuhan Anda untuk mendapatkan website yang sesuai dengan tujuan bisnis.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link href="/contact">
            <Button size="lg">
              Konsultasi Gratis
            </Button>
          </Link>

          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Lihat Layanan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}