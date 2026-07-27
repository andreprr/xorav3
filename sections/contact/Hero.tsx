"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-36">

      {/* Soft Glow */}
      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">

              Contact XORA

            </span>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl">

              Let's Build

              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

                Something Amazing

              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">

              Siap mengembangkan website modern untuk bisnis Anda?
              Tim XORA siap membantu mulai dari landing page,
              company profile, dashboard hingga custom web application
              yang cepat, premium, dan meningkatkan kredibilitas bisnis.

            </p>

            {/* Button */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link href="#contact-form">

                <Button size="lg">

                  Start Your Project

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </Link>

              <Link
                href="https://wa.me/6282130300614"
                target="_blank"
              >

                <Button
                  size="lg"
                  variant="outline"
                >

                  <MessageCircle className="mr-2 h-5 w-5" />

                  WhatsApp Us

                </Button>

              </Link>

            </div>

            {/* Stats */}

            <div className="mt-24 grid grid-cols-2 gap-10 md:grid-cols-4">

              <div>

                <h3 className="text-4xl font-black text-blue-600">
                  50+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Projects Completed
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-blue-600">
                  100%
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Responsive Design
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-blue-600">
                  95+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Performance Score
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-blue-600">
                  &lt;24h
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Response Time
                </p>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}