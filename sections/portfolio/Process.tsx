import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

import FadeIn from "@/components/animation/FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Kami memahami kebutuhan bisnis, target market, dan tujuan website sebelum proses desain dimulai.",
    icon: Search,
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Mendesain tampilan modern yang fokus pada branding, user experience, dan konversi.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Website dikembangkan menggunakan teknologi modern dengan performa tinggi dan SEO Friendly.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Website dipublikasikan ke domain Anda lengkap dengan optimasi dan maintenance awal.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Process
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight">
              Simple Process,
              <br />
              Outstanding Results
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Kami membuat proses pengembangan website menjadi mudah,
              transparan, dan terstruktur.
            </p>

          </div>

        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <FadeIn
                key={step.number}
                delay={index * 0.15}
              >

                <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                      <Icon size={28} />

                    </div>

                    <span className="text-5xl font-black text-slate-100">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-500">
                    {step.description}
                  </p>

                </div>

              </FadeIn>

            );

          })}

        </div>

      </div>

    </section>
  );
}