import {
  Coffee,
  ShoppingCart,
  CreditCard,
  CupSoda,
} from "lucide-react";

const steps = [
  {
    icon: Coffee,
    title: "Browse Menu",
    description: "Explore premium coffee and fresh pastries.",
  },
  {
    icon: ShoppingCart,
    title: "Add To Cart",
    description: "Select your favorite items with one click.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Checkout easily using multiple payment methods.",
  },
  {
    icon: CupSoda,
    title: "Enjoy Coffee",
    description: "Relax while your order is freshly prepared.",
  },
];

export default function OrderFlow() {
  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            Ordering Experience
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Order In Just A Few Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Designed to make ordering coffee simple, fast, and enjoyable
            for every customer.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B77945]/10">
                  <Icon className="h-8 w-8 text-[#B77945]" />
                </div>

                <span className="mt-6 block text-sm font-bold text-[#B77945]">
                  STEP {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Preview */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {/* Cart */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="text-2xl font-bold">
              🛒 My Cart
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex justify-between">

                <div>

                  <h4 className="font-semibold">
                    Caffe Latte ×2
                  </h4>

                  <p className="text-slate-500">
                    Rp35.000 / cup
                  </p>

                </div>

                <strong>Rp70.000</strong>

              </div>

              <div className="flex justify-between">

                <div>

                  <h4 className="font-semibold">
                    Croissant ×1
                  </h4>

                  <p className="text-slate-500">
                    Fresh Butter
                  </p>

                </div>

                <strong>Rp22.000</strong>

              </div>

              <hr />

              <div className="flex justify-between">

                <span>Total</span>

                <strong className="text-xl">
                  Rp92.000
                </strong>

              </div>

              <button className="w-full rounded-full bg-[#2C221D] py-4 font-semibold text-white transition hover:bg-[#B77945]">
                Checkout
              </button>

            </div>

          </div>

          {/* Payment */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="text-2xl font-bold">
              Payment Method
            </h3>

            <div className="mt-8 space-y-4">

              {[
                "QRIS",
                "Credit Card",
                "Bank Transfer",
                "Cash",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border p-4"
                >
                  <input type="radio" name="payment" />
                  {item}
                </label>
              ))}

            </div>

            <button className="mt-8 w-full rounded-full bg-[#B77945] py-4 font-semibold text-white hover:bg-[#99663C]">
              Place Order
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}