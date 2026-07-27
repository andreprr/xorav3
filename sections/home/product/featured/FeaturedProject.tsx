import { products } from "../productData";

const product = products[0];

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="h-full w-full"
    >
      <div
        className="
          h-full
          overflow-hidden
          rounded-[36px]
          border
          border-neutral-200
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,.08)]
        "
      >
        <div
          className="
            grid
            h-full
            grid-cols-1
            lg:grid-cols-2
          "
        >
          {/* IMAGE */}

          <div
          id="featured-image-wrapper"
          className="
            relative
            overflow-hidden
            border-b
            border-white/10
            lg:border-b-0
            lg:border-r
          "
        >
            <img
              id="featured-image"
              src={product.image}
              alt={product.title}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* CONTENT */}

          <div
            className="
              flex
              h-full
              flex-col
              justify-between
              p-10
              lg:p-12
            "
          >
            <div>
              <span
                id="featured-number"
                className="
                  text-xs
                  tracking-[0.4em]
                  text-neutral-500
                  tracking-[0.45em]
                "
              >
                {String(product.id).padStart(2, "0")}
              </span>

              <h2
                id="featured-title"
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.05em]
                  text-neutral-900
                  lg:text-5xl
                "
              >
                {product.title}
              </h2>

              <p
                id="featured-description"
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-neutral-500
                "
              >
                {product.description}
              </p>
            </div>

            <button
              id="featured-button"
              className="
                mt-8
                w-fit
                rounded-full
                border
                border-white/10
                px-6
                py-3
                text-sm
                text-white
                transition
                bg-black
                text-white
                hover:bg-neutral-800
              "
            >
              Explore Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}