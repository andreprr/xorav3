import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          Ready to Build?
        </span>

        <h2 className="mt-6 text-5xl font-bold md:text-6xl leading-tight">
          Wujudkan Ide Digital
          <br />
          Bersama XORA
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Mulai dari website company profile hingga sistem bisnis berbasis web,
          kami siap membantu membangun solusi digital yang tepat untuk bisnis Anda.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}