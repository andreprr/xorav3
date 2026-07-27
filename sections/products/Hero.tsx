import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Our Products
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Solusi Digital
            <br />
            untuk UMKM
            <br />
            & Startup
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            XORA menyediakan berbagai solusi digital mulai dari Website,
            Company Profile, Landing Page, Website Catalog hingga Business
            System yang dirancang sesuai kebutuhan bisnis Anda.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">
              Konsultasi Gratis
            </Button>

            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300"
              >
                Lihat Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

          <div className="mt-16 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Digital Products
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-slate-500">
                Custom Solution
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="mt-2 text-sm text-slate-500">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}