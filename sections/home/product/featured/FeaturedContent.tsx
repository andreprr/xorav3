import { ProductItem } from "../productData";
interface Props {
  product: ProductItem;
}

export default function FeaturedContent({ product }: Props) {
  return (
    <div
      id="featured-content"
      className="
        flex
        flex-col
        justify-between
        p-16
      "
    >
      <div>

        <span
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-red-400
          "
        >
          Featured Solution
        </span>

        <h2
          id="featured-title"
          className="
            mt-8
            font-display
            text-6xl
            leading-none
            tracking-[-0.05em]
            text-white
          "
        >
          {product.title}
        </h2>

        <p
          id="featured-description"
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-neutral-400
          "
        >
          {product.description}
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-3
          gap-10
          border-t
          border-white/10
          pt-10
        "
      >
        <div>

          <p className="text-xs uppercase tracking-widest text-neutral-500">

            Industry

          </p>

          <h4 className="mt-3 text-lg text-white">

            {product.industry}

          </h4>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-neutral-500">

            Solution

          </p>

          <h4 className="mt-3 text-lg text-white">

            {product.category}

          </h4>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-neutral-500">

            Delivery

          </p>

          <h4 className="mt-3 text-lg text-white">

            {product.delivery}

          </h4>

        </div>

      </div>
    </div>
  );
}