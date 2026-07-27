import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";

export default function PricingCards() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 lg:grid-cols-3">

          {pricingPlans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-[32px] border p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-slate-200"
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                  ⭐ Paling Populer
                </div>
              )}

              <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase text-orange-700">
                {plan.badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {plan.name}
              </h3>

              {plan.oldPrice && (
                <p className="mt-8 text-lg text-slate-400 line-through">
                  {plan.oldPrice}
                </p>
              )}

              <h2 className="mt-2 text-5xl font-bold tracking-tight">
                {plan.price}
              </h2>

              <p className="mt-3 text-green-600 font-semibold">
                {plan.save}
              </p>

              <div className="my-10 h-px bg-slate-200" />

              <div className="space-y-4">

                {plan.features.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <Check className="h-5 w-5 text-green-600" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <Link href="/contact">

                <Button
                  className="mt-10 w-full"
                  size="lg"
                >
                  {plan.button}
                </Button>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}