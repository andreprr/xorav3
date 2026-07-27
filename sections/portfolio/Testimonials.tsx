import FadeIn from "@/components/animation/FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Maju Bersama",
    quote:
      "XORA berhasil membuat website perusahaan kami terlihat jauh lebih profesional. Proses cepat dan hasilnya melebihi ekspektasi.",
  },
  {
    name: "Rina Putri",
    company: "Resto Nusantara",
    quote:
      "Desain modern, loading cepat, dan pelanggan lebih percaya dengan bisnis kami setelah website baru selesai.",
  },
  {
    name: "Andi Saputra",
    company: "Digital Startup",
    quote:
      "Komunikasi mudah, revisi cepat, dan hasil akhirnya benar-benar premium.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Testimonials
            </span>

            <h2 className="mt-5 text-5xl font-black">
              Trusted by Clients
            </h2>

          </div>

        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <FadeIn
              key={item.name}
              delay={index * 0.15}
            >

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                <div className="mb-6 flex gap-1 text-yellow-500">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="leading-8 text-slate-600">
                  "{item.quote}"
                </p>

                <div className="mt-8">

                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  );
}