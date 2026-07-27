import Image from "next/image";
import FrameButton from "@/components/ui/FrameButton";
import type { ProductItem } from "./productData";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (

    <div
      data-product-card
      className="
        absolute
        inset-0
        overflow-visible

        grid
        grid-cols-1
        md:grid-cols-1
        lg:grid-cols-[55%_45%]

        items-center
        gap-6
        sm:gap-10
        lg:gap-12

        h-full
        w-full
        px-4
        sm:px-6
        md:px-8
      "
    >
      {/* ===================== */}
      {/* IMAGE */}
      {/* ===================== */}

      <div
        id="product-image"
        className="
          relative
          h-[280px]
          sm:h-[360px]
          md:h-[420px]
          lg:h-[580px]
          w-full
          flex-shrink-0
        "
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
          className="object-contain"
        />
      </div>

      {/* ===================== */}
      {/* CONTENT */}
      {/* ===================== */}

      <div
        id="product-content-right"
        className="
          flex
          h-full
          flex-col
          justify-center
          py-6
          sm:py-8
          overflow-visible
        "
      >
        {/* Label */}

        <span
          id="product-label"
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.3em]
            sm:tracking-[0.35em]
            text-red-500
          "
        >
          XORA SERVICE
        </span>

        {/* Title */}

        <h2
          id="product-title"
          className="
            mt-4
            sm:mt-6

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            font-semibold

            leading-[1.2]
            sm:leading-[1.15]

            tracking-[-0.03em]
            sm:tracking-[-0.05em]

            text-neutral-900
            pb-1
            sm:pb-2
          "
        >
          {product.title}
        </h2>

        {/* Meta */}

        <div
          id="product-meta"
          className="
            mt-5
            sm:mt-7
            flex
            flex-wrap
            gap-2
            sm:gap-3
            lg:gap-4
          "
        >
          <span
            className="
              rounded-full
              bg-neutral-100
              px-3
              py-1.5
              sm:px-4
              sm:py-2

              text-xs
              sm:text-sm
              text-neutral-700
            "
          >
            {product.category}
          </span>

          <span
            className="
              rounded-full
              bg-neutral-100
              px-3
              py-1.5
              sm:px-4
              sm:py-2

              text-xs
              sm:text-sm
              text-neutral-700
            "
          >
            {product.delivery}
          </span>
        </div>

        {/* Description */}

        <p
          id="product-description"
          className="
            mt-6
            sm:mt-8

            max-w-xl

            text-sm
            sm:text-base
            md:text-lg

            leading-7
            sm:leading-8

            text-neutral-600
            pb-4
            sm:pb-6
          "
        >
          {product.description}
        </p>

        {/* CTA */}

        <div
          id="product-button"
          className="mt-6 sm:mt-8"
        >
          <FrameButton
            variant="default"
            glow={false}
          >
            Explore Service
          </FrameButton>
        </div>
      </div>
    </div>
  );
}