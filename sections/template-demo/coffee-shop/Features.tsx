import {
  ShoppingCart,
  CreditCard,
  Smartphone,
  MapPin,
  MessageCircle,
  Zap,
  Search,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Online Ordering",
    desc: "Customers can order directly from the website.",
  },
  {
    icon: CreditCard,
    title: "Payment Ready",
    desc: "Supports QRIS, Bank Transfer and Cards.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Optimized for desktop, tablet and mobile.",
  },
  {
    icon: MapPin,
    title: "Google Maps",
    desc: "Show your store location with one click.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Direct chat with customers instantly.",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    desc: "Optimized performance for better experience.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    desc: "Built with search engine optimization.",
  },
  {
    icon: Palette,
    title: "Easy Customization",
    desc: "Logo, colors, menu and content can be changed.",
  },
];

const included = [
  "Homepage",
  "About",
  "Product Menu",
  "Shopping Cart",
  "Checkout",
  "Gallery",
  "Contact",
  "Google Maps",
  "WhatsApp Integration",
  "Responsive Design",
  "SEO Ready",
  "Source Code",
];

export default function Features() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            Everything Included
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Everything You Need
            <br />
            To Launch Your Coffee Shop
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            This template is built with essential features that help
            coffee shops establish a modern online presence quickly.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B77945]/10">
                  <Icon className="h-7 w-7 text-[#B77945]" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-24 rounded-[40px] bg-[#2C221D] p-12 text-white">

          <h3 className="text-4xl font-black">
            Included In This Template
          </h3>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span className="text-xl text-[#D6A06C]">✔</span>

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}