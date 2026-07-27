import ProductHeader from "./ProductHeader";
import ProductStack from "./ProductStack";

export default function ProductPreview() {
  return (
    <section
      id="products"
      className="
        relative
        z-50
        min-h-screen
        overflow-hidden
        bg-[#fcfdff]
      "
    >
      {/* ========================================= */}
      {/* Crystal / Ice Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Blue Glow */}
        <div
          className="
            absolute
            -top-56
            left-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-sky-200/30
            blur-[190px]
          "
        />

        {/* Left Glow */}
        <div
          className="
            absolute
            top-1/3
            -left-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-cyan-100/40
            blur-[180px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            bottom-0
            -right-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-blue-100/35
            blur-[180px]
          "
        />

        {/* Center White Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[1100px]
            w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[220px]
          "
        />

        {/* Crystal Texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            [background-image:radial-gradient(circle_at_1px_1px,#7dd3fc_1px,transparent_0)]
            [background-size:28px_28px]
          "
        />
      </div>

      {/* ========================================= */}
      {/* SERVICE INTRO */}
      {/* ========================================= */}

      <div
        id="service-intro"
        className="
          absolute
          inset-0
          z-30
          flex
          items-center
          justify-center
          pointer-events-none
        "
      >
        <h1
          id="service-title"
          className="
            font-display
            text-[14vw]
            sm:text-[16vw]
            md:text-[18vw]
            font-black
            leading-none
            tracking-[-0.08em]
            text-neutral-900
            select-none
            -translate-y-16
            sm:-translate-y-20
          "
        >
          SERVICE
        </h1>
      </div>

      {/* ========================================= */}
      {/* PRODUCT CONTENT */}
      {/* ========================================= */}

      <div
        id="product-content"
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          translate-y-32
          opacity-0
          pb-12
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-10
            py-6
            sm:py-8
            lg:py-12
          "
        />

        <ProductHeader />

        <ProductStack />
      </div>
    </section>
  );
}