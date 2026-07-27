import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <Image
        src="/assets/coffee-shop/hero/hero-background.webp"
        alt="Coffee Shop"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-2xl">

          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md">
            Specialty Coffee
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none text-white md:text-8xl">
            Crafted Coffee
            <br />
            Made For
            <br />
            Your Moment.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
            Experience handcrafted coffee made from premium beans,
            served in a warm and modern atmosphere designed for
            conversations, work, and relaxation.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="#menu"
              className="rounded-full bg-[#B77945] px-8 py-4 font-semibold text-white transition hover:bg-[#99663C]"
            >
              Explore Menu
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              Our Story

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-20 grid grid-cols-3 gap-10">

            <div>

              <h3 className="text-4xl font-black text-white">
                15+
              </h3>

              <p className="mt-2 text-white/70">
                Coffee Variants
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">
                4.9★
              </h3>

              <p className="mt-2 text-white/70">
                Customer Rating
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">
                5K+
              </h3>

              <p className="mt-2 text-white/70">
                Happy Customers
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}