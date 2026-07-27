import ProductCard from "./productCard";
import { products } from "./productData";

export default function ProductStack() {
  return (
    <div
      id="product-stack"
      className="
        relative
        mx-auto
        mt-6
        sm:mt-8
        lg:mt-12
        h-[480px]
        sm:h-[600px]
        md:h-[680px]
        lg:min-h-[720px]

        w-full
        max-w-7xl

        overflow-visible
      "
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          data-product-card
          data-index={index}
          className="absolute inset-0"
          style={{
            zIndex: products.length - index,
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}