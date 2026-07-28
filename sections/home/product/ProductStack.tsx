import ProductCard from "./productCard";
import { products } from "./productData";

export default function ProductStack() {
  return (
    <div
      id="product-stack-wrapper"
      className="w-full overflow-hidden py-4"
    >
      <div
        id="product-stack"
        className="
          flex flex-nowrap
          gap-6 sm:gap-8 lg:gap-10
          w-max
          px-6 lg:px-12
        "
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            data-product-card
            data-index={index}
            className="
              w-[85vw] sm:w-[680px] lg:w-[1020px]
              h-[580px] sm:h-[540px] lg:h-[560px]
              shrink-0
            "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}