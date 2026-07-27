 import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Premium Modern Design",
  "Fully Responsive",
  "SEO Optimized",
  "Fast Loading",
  "Easy Customization",
  "Source Code Included",
];

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[#2C221D] to-[#4E3628] py-28">

      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur">
          XORA Website Templates
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
          Ready To Build
          <br />
          Your Coffee Shop Website?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
          This is only a preview of what your website could look like.
          Every XORA template can be customized to match your business,
          branding, and future growth.
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">

          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
            >
              <CheckCircle2 className="h-5 w-5 text-[#D6A06C]" />
              <span>{item}</span>
            </div>
          ))}

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#B77945] px-8 py-4 font-semibold text-white transition hover:bg-[#99663C]"
          >
            Use This Template

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#2C221D]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />

            Back To XORA
          </Link>

        </div>

      </div>

    </section>
  );
}