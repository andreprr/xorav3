import { products } from "../productData";

export default function ProductNavigation() {
  return (
    <nav
      id="product-navigation"
      className="
        mt-8
        sm:mt-12
        lg:mt-16
        overflow-x-auto
        overflow-y-hidden
        -mx-4
        sm:-mx-6
        px-4
        sm:px-6
      "
    >
      <div className="inline-flex min-w-full items-center justify-center gap-6 sm:gap-8 lg:gap-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            data-nav={index}
            className="
              relative
              cursor-default
              pb-3
              flex-shrink-0
            "
          >
            <span
              className="
                text-xs
                sm:text-sm
                font-medium
                tracking-[0.15em]
                sm:tracking-[0.18em]
                uppercase
                text-neutral-500
                transition-colors
                duration-300
                whitespace-nowrap
              "
            >
              {product.title}
            </span>

            {/* Active Indicator */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                origin-left
                scale-x-0
                rounded-full
                bg-blue-500
              "
            />
          </div>
        ))}
      </div>
    </nav>
  );
}