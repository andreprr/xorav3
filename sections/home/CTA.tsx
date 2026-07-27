import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="bg-black py-32 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Let's Build Something Great
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
          Siap Membawa
          <br />
          Bisnis Anda ke Level Berikutnya?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Bangun website modern, company profile, landing page,
          hingga sistem bisnis berbasis web bersama XORA.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Button size="lg">
            Konsultasi Gratis
          </Button>

        <Link href="/contact">
            <Button
             variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
        >
                Hubungi Kami
            <ArrowRight size={18} />
            </Button>
        </Link>

        </div>

      </div>
    </section>
  );
}