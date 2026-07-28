"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Rata-rata 7–21 hari kerja tergantung kompleksitas project dan revisi yang dibutuhkan.",
  },
  {
    question: "Apakah website bisa diubah sesuai kebutuhan bisnis?",
    answer:
      "Ya. Semua website dan sistem yang kami bangun dapat disesuaikan dengan kebutuhan bisnis Anda.",
  },
  {
    question: "Apakah sudah termasuk domain dan hosting?",
    answer:
      "Paket tertentu sudah termasuk domain dan hosting. Detailnya dapat didiskusikan saat konsultasi.",
  },
  {
    question: "Apakah setelah project selesai masih mendapat support?",
    answer:
      "Ya. Kami menyediakan support dan maintenance sesuai paket yang dipilih.",
  },
  {
    question: "Bisakah membuat sistem khusus selain website?",
    answer:
      "Bisa. Kami juga mengembangkan sistem bisnis berbasis web seperti stock management, POS, dashboard, hingga sistem operasional perusahaan.",
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

          <h2 className="mt-4 text-5xl font-bold">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Temukan jawaban atas pertanyaan yang paling sering diajukan sebelum memulai project bersama XORA.
          </p>

        </div>

        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-8">
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