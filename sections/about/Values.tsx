import {
  Gem,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Quality",
    desc: "Setiap project dibangun dengan standar kualitas tinggi dan detail yang matang.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Menggunakan teknologi modern agar bisnis selalu selangkah lebih maju.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Transparansi dan komunikasi menjadi pondasi dalam setiap project.",
  },
  {
    icon: Sparkles,
    title: "Experience",
    desc: "Fokus menciptakan pengalaman digital yang elegan dan mudah digunakan.",
  },
];

export default function Values() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Our Values
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            What We Believe
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="h-10 w-10 text-blue-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
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