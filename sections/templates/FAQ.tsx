"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah template bisa diubah sesuai branding bisnis?",
    answer:
      "Bisa. Warna, font, gambar, konten, hingga layout dapat disesuaikan dengan identitas brand Anda.",
  },
  {
    question: "Apakah template sudah responsive?",
    answer:
      "Ya. Semua template XORA dirancang agar tampil optimal di desktop, tablet, dan smartphone.",
  },
  {
    question: "Apakah template sudah SEO Friendly?",
    answer:
      "Ya. Struktur HTML, performa, dan optimasi dasar SEO sudah kami terapkan pada setiap template.",
  },
  {
    question: "Berapa lama proses implementasi template?",
    answer:
      "Umumnya 3–7 hari kerja tergantung jumlah penyesuaian yang dibutuhkan.",
  },
  {
    question: "Apakah bisa request fitur tambahan?",
    answer:
      "Tentu. Template dapat dikembangkan menjadi website custom dengan fitur sesuai kebutuhan bisnis.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Jawaban atas pertanyaan yang paling sering ditanyakan mengenai Template XORA.
          </p>

        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5 leading-8 text-slate-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}