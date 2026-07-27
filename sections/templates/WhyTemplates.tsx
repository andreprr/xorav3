import {
  Zap,
  ShieldCheck,
  Smartphone,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pengerjaan Lebih Cepat",
    description:
      "Gunakan template yang sudah dirancang secara profesional sehingga proses development menjadi jauh lebih cepat.",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description:
      "Semua template dioptimalkan untuk desktop, tablet, dan smartphone dengan tampilan yang konsisten.",
  },
  {
    icon: ShieldCheck,
    title: "SEO Friendly",
    description:
      "Struktur website dibuat mengikuti standar SEO sehingga lebih mudah ditemukan di mesin pencari.",
  },
  {
    icon: RefreshCcw,
    title: "Mudah Dikembangkan",
    description:
      "Template dapat dikustomisasi dan dikembangkan sesuai kebutuhan bisnis Anda di masa mendatang.",
  },
];

export default function WhyTemplates() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why Choose XORA
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Kenapa Memilih
            <br />
            Template XORA?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Template kami bukan sekadar tampilan menarik, tetapi juga dibangun
            dengan standar modern agar siap digunakan untuk kebutuhan bisnis.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}