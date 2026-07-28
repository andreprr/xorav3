import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafafa] text-neutral-900 flex flex-col justify-between p-6 sm:p-10 lg:p-14 font-sans select-none">
      {/* Decorative Plus / Cross Accents */}
      <span className="absolute top-20 left-10 text-xs font-light text-neutral-400 opacity-60">
        +
      </span>
      <span className="absolute top-20 left-1/2 text-xs font-light text-neutral-400 opacity-60">
        ×
      </span>
      <span className="absolute top-20 right-10 text-xs font-light text-neutral-400 opacity-60">
        ×
      </span>
      <span className="absolute bottom-10 right-10 text-xs font-light text-neutral-400 opacity-60">
        ×
      </span>

      {/* TOP DECORATIVE DOTS */}
      <div className="pt-20 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
        <span className="h-1 w-1 rounded-full bg-neutral-300" />
      </div>

      {/* ======================================= */}
      {/* MAIN HERO TYPOGRAPHY (ONE LINE LOCKED) */}
      {/* ======================================= */}
      <div className="relative my-auto w-full text-center flex items-center justify-center">
        <h1 className="w-full text-[12.5vw] sm:text-[13.5vw] lg:text-[14.5vw] font-black leading-none tracking-[-0.06em] uppercase font-sans text-neutral-950 scale-y-125 my-8 whitespace-nowrap">
          XORA STUDIO
        </h1>

        {/* FLOATING BADGE IN THE CENTER */}
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-10">
          {/* Subtle Glow Behind Badge */}
          <div className="absolute inset-0 rounded-2xl bg-sky-400/35 blur-2xl scale-110" />

          {/* Badge Card */}
          <div className="relative rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md px-5 py-2 sm:px-8 sm:py-4 border border-white/80 shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
            <span className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-900">
              XORA
            </span>
          </div>
        </div>
      </div>

      {/* ======================================= */}
      {/* BOTTOM FOOTER CONTENT */}
      {/* ======================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pt-10">
        {/* Left: Summary khusus Products */}
        <div className="lg:col-span-5">
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-neutral-600 font-medium max-w-lg">
            XORA menyediakan berbagai solusi digital mulai dari Website, Company Profile,
            Landing Page, Website Catalog hingga Business System yang dirancang sesuai
            kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Middle: CTA Link & Dots */}
        <div className="lg:col-span-4 flex items-center gap-8">
          <Link
            href="#product-list"
            className="text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-500 transition-colors uppercase tracking-wider"
          >
            Explore Products
          </Link>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
          </div>
        </div>

        {/* Right: Micro Label & Divider Line */}
        <div className="lg:col-span-3 flex items-center justify-between border-t border-neutral-200/80 pt-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium ml-auto">
            MICRO LABELS
          </span>
        </div>
      </div>
    </section>
  );
}