"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-6xl px-6">

        <FadeIn>

          <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 to-cyan-500 p-14 text-center text-white shadow-2xl">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
              Ready to Start?
            </span>

            <h2 className="mt-8 text-5xl font-black tracking-tight">

              Launch Your Website Faster

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

              Gunakan template premium XORA atau diskusikan kebutuhan website custom untuk bisnis Anda.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Buy Template
              </Button>

              <Link href="/contact">

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
                >
                  Start Custom Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

              </Link>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}