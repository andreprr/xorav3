import {
  Building2,
  Rocket,
  Briefcase,
  Store,
} from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Company Profile",
    description:
      "Website profesional untuk perusahaan, UMKM, startup, dan corporate.",
    total: "12 Templates",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    description:
      "Template promosi produk, event, jasa, dan campaign marketing.",
    total: "8 Templates",
  },
  {
    icon: Briefcase,
    title: "Portfolio",
    description:
      "Template personal branding, agency, freelancer, dan creative studio.",
    total: "6 Templates",
  },
  {
    icon: Store,
    title: "Business",
    description:
      "Template restoran, retail, property, travel, hingga bisnis lokal.",
    total: "10 Templates",
  },
];

export default function TemplateCategories() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Categories
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Pilih Template
            <br />
            Sesuai Bisnis Anda
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Semua template dibuat modern, responsive, SEO Friendly,
            dan mudah dikembangkan sesuai kebutuhan bisnis.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 text-sm font-semibold text-slate-500">
                  {item.total}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}