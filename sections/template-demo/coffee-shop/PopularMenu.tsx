import Image from "next/image";

const menu = [
  {
    name: "Caffe Latte",
    image: "/assets/coffee-shop/menu/latte.webp",
    price: "Rp35.000",
    rating: "4.9",
    badge: "Best Seller",
    description: "Smooth espresso blended with creamy steamed milk.",
  },
  {
    name: "Espresso",
    image: "/assets/coffee-shop/menu/espresso.webp",
    price: "Rp25.000",
    rating: "4.8",
    badge: "Classic",
    description: "Rich and bold espresso made from premium beans.",
  },
  {
    name: "Cappuccino",
    image: "/assets/coffee-shop/menu/cappuccino.webp",
    price: "Rp34.000",
    rating: "4.9",
    badge: "Popular",
    description: "Perfect balance of espresso, milk and foam.",
  },
  {
    name: "Matcha Latte",
    image: "/assets/coffee-shop/menu/matcha-latte.webp",
    price: "Rp37.000",
    rating: "4.8",
    badge: "New",
    description: "Premium Japanese matcha with creamy fresh milk.",
  },
  {
    name: "Croissant",
    image: "/assets/coffee-shop/menu/croissant.webp",
    price: "Rp22.000",
    rating: "4.7",
    badge: "Fresh",
    description: "Freshly baked buttery croissant every morning.",
  },
  {
    name: "Cheesecake",
    image: "/assets/coffee-shop/menu/cheesecake.webp",
    price: "Rp38.000",
    rating: "4.9",
    badge: "Favorite",
    description: "Creamy cheesecake with smooth vanilla flavor.",
  },
];

export default function PopularMenu() {
  return (
    <section
      id="menu"
      className="bg-[#FAF7F2] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            Popular Menu
          </span>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Crafted With Passion
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Every cup is handcrafted using carefully selected premium beans,
            delivering the perfect balance of aroma and flavor.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {menu.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#B77945] px-4 py-2 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              </div>

              <div className="p-7">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <span className="font-semibold text-[#B77945]">
                    ⭐ {item.rating}
                  </span>

                </div>

                <p className="mt-4 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <h4 className="text-2xl font-black">
                    {item.price}
                  </h4>

                  <button className="rounded-full bg-[#2C221D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#B77945]">
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}