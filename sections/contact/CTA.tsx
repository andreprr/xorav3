"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 text-white">

      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <FadeIn>

          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Ready To Start?
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Let's Create Your
            <br />
            Next Digital Experience
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
            Bangun website modern yang cepat, profesional,
            dan mampu meningkatkan kepercayaan pelanggan terhadap bisnis Anda.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link href="/contact">

              <Button size="lg">

                Start Project

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </Link>

            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
            >

              <Button
                size="lg"
                variant="outline"
              >

                <MessageCircle className="mr-2 h-5 w-5" />

                WhatsApp

              </Button>

            </Link>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}