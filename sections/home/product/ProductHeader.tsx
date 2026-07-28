export default function ProductHeader() {
  return (
    <div
      id="product-header"
      className="mx-auto w-full max-w-7xl px-6 lg:px-12 mb-6 sm:mb-8"
    >
      <div>
        {/* TOP META */}
        <div className="flex items-center gap-3">
          <span
            id="product-number"
            className="text-xl font-medium text-rose-400"
          >
            02
          </span>
          <span className="text-neutral-300 font-light">—</span>
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-rose-400
            "
          >
            XORA SERVICE
          </span>
        </div>

        {/* HEADLINE */}
        <h2
          id="product-headline"
          className="
            mt-2
            text-3xl md:text-5xl lg:text-6xl
            font-bold
            tracking-tight
            text-neutral-900
          "
        >
          DIGITAL SOLUTIONS
        </h2>

        {/* SUMMARY */}
        <p
          id="product-summary"
          className="
            mt-4
            max-w-3xl
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            text-neutral-600
          "
        >
          We design and build modern digital products—from professional
          websites and custom business systems to AI-powered automation—
          helping grow faster, work smarter, and create lasting
          digital experiences.
        </p>
      </div>
    </div>
  );
}