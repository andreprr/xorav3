import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}

      <Image
        src="/assets/contractor/hero/hero-background.webp"
        alt="Construction Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#111827]/65" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
          Premium Construction Company
        </span>

        <h1 className="mt-8 max-w-4xl text-6xl font-black leading-none text-white md:text-8xl">
          Building
          <br />
          The Future
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
          Delivering high-quality residential, commercial, and industrial
          construction with modern engineering, experienced professionals,
          and a commitment to excellence.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="#projects"
            className="rounded-full bg-[#F59E0B] px-8 py-4 font-semibold text-[#111827] transition hover:bg-white"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#111827]"
          >
            Get Consultation

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-black text-[#F59E0B]">
              150+
            </h3>

            <p className="mt-2 text-white/70">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-[#F59E0B]">
              20+
            </h3>

            <p className="mt-2 text-white/70">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-[#F59E0B]">
              50+
            </h3>

            <p className="mt-2 text-white/70">
              Professional Engineers
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-[#F59E0B]">
              98%
            </h3>

            <p className="mt-2 text-white/70">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}