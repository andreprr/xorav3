import Image from "next/image";
import Link from "next/link";
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
        flex flex-col lg:grid lg:grid-cols-[55%_45%]
        h-full w-full
        rounded-[2rem] lg:rounded-[2.5rem]
        bg-white/90 backdrop-blur-xl
        border border-white/60
        shadow-[0_20px_50px_rgba(0,0,0,0.04)]
        p-6 sm:p-8 lg:p-10
        gap-6 lg:gap-10
        shrink-0
        transition-all duration-300
      "
    >
      {/* ===================== */}
      {/* IMAGE SHOWCASE */}
      {/* ===================== */}
      <div
        id="product-image"
        className="
          relative
          w-full
          h-[240px] sm:h-[320px] lg:h-full
          rounded-2xl lg:rounded-3xl
          overflow-hidden
          bg-gradient-to-br from-slate-50 to-slate-100/60
          flex items-center justify-center
        "
      >
        <div className="relative w-full h-full p-2 lg:p-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-contain p-2 lg:p-4"
          />
        </div>
      </div>

      {/* ===================== */}
      {/* CONTENT */}
      {/* ===================== */}
      <div
        id="product-content-right"
        className="
          flex flex-col justify-center
          h-full w-full
          py-2 lg:py-4 lg:pr-4
        "
      >
        {/* Label */}
        <span
          id="product-label"
          className="
            text-[11px] sm:text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-rose-400
          "
        >
          XORA SERVICE
        </span>

        {/* Title */}
        <h2
          id="product-title"
          className="
            mt-3 sm:mt-4
            text-3xl sm:text-4xl lg:text-[2.75rem]
            font-bold
            leading-[1.15]
            tracking-tight
            text-neutral-900
          "
        >
          {product.title}
        </h2>

        {/* Badges / Meta */}
        <div
          id="product-meta"
          className="
            mt-4 sm:mt-6
            flex flex-wrap
            gap-2 sm:gap-3
          "
        >
          <span
            className="
              rounded-full
              bg-neutral-100/80
              px-4 py-1.5
              text-xs sm:text-sm
              font-medium
              text-neutral-700
            "
          >
            {product.category}
          </span>

          <span
            className="
              rounded-full
              bg-neutral-100/80
              px-4 py-1.5
              text-xs sm:text-sm
              font-medium
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
            mt-5 sm:mt-6
            text-sm sm:text-base lg:text-[1.05rem]
            leading-relaxed
            text-neutral-500
            line-clamp-4 lg:line-clamp-none
          "
        >
          {product.description}
        </p>

        {/* CTA Button */}
        <div
          id="product-button"
          className="mt-6 sm:mt-8"
        >
          <Link href="/products">
            <FrameButton
              variant="default"
              glow={false}
            >
              Explore Service
            </FrameButton>
          </Link>
        </div>
      </div>
    </div>
  );
}