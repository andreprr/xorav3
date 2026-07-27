import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between gap-20 px-6 py-24">

        {/* LEFT */}
        <div className="max-w-2xl">

          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            Portfolio
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
            Selected
            <br />
            Works That
            <br />
            Build Trust.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Kami membantu bisnis membangun website dan sistem digital yang
            modern, cepat, scalable, dan berorientasi pada pertumbuhan bisnis.
          </p>

          <div className="mt-10 flex gap-4">

            <Button size="lg">
              Explore Portfolio
            </Button>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Start Project

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

          <div className="mt-16 flex gap-12">

            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="mt-2 text-sm text-slate-500">
                Industries
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-slate-500">
                Custom Built
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex-1">

          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl transition duration-500 hover:-translate-y-2">

            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />

            <div className="mt-6">

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-xs uppercase tracking-widest text-blue-600">
                    Featured Project
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    Corporate Website
                  </h3>

                </div>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                  Completed
                </span>

              </div>

              <p className="mt-4 leading-7 text-slate-600">
                Modern corporate website built using Next.js, Tailwind CSS,
                responsive layout, and optimized for SEO.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "SEO",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}