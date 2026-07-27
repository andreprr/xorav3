export default function ProductHeader() {
  return (
    <div
      id="product-header"
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10"
    >
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-start">

        {/* LEFT */}
        <div>

          <div className="flex items-center gap-3 sm:gap-4">

            <span
              id="product-number"
              className="text-3xl sm:text-4xl font-light text-red-500"
            >
              02
            </span>

            <div className="h-px w-6 sm:w-8 bg-neutral-300" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                sm:tracking-[0.45em]
                text-neutral-500
                text-[11px]
                sm:text-xs
              "
            >
              XORA SERVICE
            </span>

          </div>

          <h2
            id="product-headline"
            className="
              mt-6
              sm:mt-8
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-display
              font-bold
              leading-tight
              text-neutral-900
            "
          >
            DIGITAL SOLUTIONS
          </h2>

        </div>

        {/* RIGHT */}

        <div className="mt-8 flex sm:mt-0 lg:justify-end">

          <div className="w-full max-w-md border-l border-neutral-300 pl-6 sm:pl-8">

            <p
              id="product-summary"
              className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-neutral-600"
            >
              We design and build modern digital products—from professional
              websites and custom business systems to AI-powered automation—
              helping businesses grow faster, work smarter, and create lasting
              digital experiences.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}