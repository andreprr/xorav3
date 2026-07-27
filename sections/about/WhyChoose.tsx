import {
  Rocket,
  ShieldCheck,
  Gauge,
  Headphones,
} from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Fast Development",
    desc: "Pengerjaan cepat tanpa mengorbankan kualitas.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Website aman dengan teknologi modern.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "Loading cepat dan SEO friendly.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Kami siap membantu setelah website selesai.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Why XORA
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Why Choose Us?
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="h-10 w-10 text-blue-600" />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}