import Image from "next/image";
import { Coffee, Users, Wifi, Leaf } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description: "100% Arabica Selection",
  },
  {
    icon: Users,
    title: "Expert Barista",
    description: "Experienced Coffee Makers",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    description: "Free Wi-Fi & Comfortable Space",
  },
  {
    icon: Leaf,
    title: "Fresh Everyday",
    description: "Freshly Brewed Every Day",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <div className="relative">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/assets/coffee-shop/about/barista.webp"
              alt="Barista"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />

          </div>

          <div className="absolute -bottom-8 -right-8 overflow-hidden rounded-3xl border-8 border-white shadow-xl">

            <Image
              src="/assets/coffee-shop/about/coffee-beans.webp"
              alt="Coffee Beans"
              width={260}
              height={260}
              className="object-cover"
            />

          </div>

        </div>

        {/* Right */}

        <div>

          <span className="font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            About Brewly
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight text-slate-900">
            Crafted With Passion,
            <br />
            Served With Heart.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Every cup tells a story. We carefully select premium coffee beans,
            roast them to perfection, and serve every drink with genuine passion.
            Brewly is more than a coffee shop—it's a place to relax, connect,
            and enjoy exceptional coffee experiences.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-[#FAF7F2] p-6"
              >
                <item.icon className="h-10 w-10 text-[#B77945]" />

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}