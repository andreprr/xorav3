import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-32 text-white">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <FadeIn>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Start Your Project
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Siap Membangun Website
            <br />
            yang Meningkatkan Bisnis Anda?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Konsultasikan kebutuhan bisnis Anda bersama XORA.
            Kami siap membantu membangun website premium,
            cepat, modern, dan siap berkembang.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link href="/contact">

              <Button size="lg">

                Start Project

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </Link>

            <Link href="/pricing">

              <Button
                size="lg"
                variant="outline"
              >
                View Pricing
              </Button>

            </Link>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}