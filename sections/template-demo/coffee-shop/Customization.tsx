import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const customItems = [
  "Your Logo",
  "Brand Colors",
  "Typography",
  "Menu & Products",
  "Categories",
  "Additional Pages",
  "Payment Integration",
  "Reservation System",
  "Loyalty Program",
  "POS Integration",
  "Membership",
  "WhatsApp Integration",
];

export default function Customization() {
  return (
    <section className="bg-[#FAF7F2] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            100% Customizable
          </span>

          <h2 className="mt-5 text-5xl font-black leading-tight text-slate-900">
            Your Brand.
            <br />
            Your Identity.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Every XORA template is fully customizable. We can adjust the design,
            colors, features, and functionality to perfectly match your coffee
            shop and business goals.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">

            {customItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-[#B77945]" />

                <span className="font-medium">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <Image
            src="/assets/coffee-shop/customization/laptop-mockup.webp"
            alt="Customization Preview"
            width={1400}
            height={900}
            className="w-full"
          />

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-[#2C221D] px-8 py-4 text-white shadow-xl">
            ✨ Fully Customizable
          </div>

        </div>

      </div>
    </section>
  );
}