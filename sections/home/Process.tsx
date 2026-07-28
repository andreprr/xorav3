import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan bisnis dan tujuan website atau sistem yang ingin dibangun.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Perencanaan",
    description:
      "Kami menyusun struktur, desain, dan alur sistem sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Proses pembuatan website atau sistem menggunakan teknologi modern.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Website siap online dan kami tetap memberikan support setelah project selesai.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#FAFAF8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Process
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Cara Kami Bekerja
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Proses sederhana, transparan, dan terarah agar project selesai
            tepat waktu dengan kualitas terbaik.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-3xl font-bold text-slate-200">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}