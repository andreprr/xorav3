"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Rata-rata 7–21 hari kerja tergantung kompleksitas project dan revisi.",
  },
  {
    question: "Apakah website sudah termasuk domain dan hosting?",
    answer:
      "Bisa. Kami menyediakan paket lengkap termasuk domain, hosting, SSL, dan deployment.",
  },
  {
    question: "Apakah website bisa diakses melalui HP?",
    answer:
      "Ya. Semua website yang kami buat bersifat 100% responsive di desktop, tablet, maupun smartphone.",
  },
  {
    question: "Apakah saya bisa request desain sendiri?",
    answer:
      "Tentu. Kami bisa mengikuti referensi desain Anda atau membuat desain baru sesuai branding bisnis.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan dengan DP terlebih dahulu, kemudian pelunasan setelah website selesai sesuai kesepakatan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-4xl px-6">

        <FadeIn>

          <div className="mb-16 text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              FAQ
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-slate-500">
              Beberapa pertanyaan yang paling sering ditanyakan client.
            </p>

          </div>

        </FadeIn>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <FadeIn key={faq.question} delay={index * 0.1}>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`transition-all duration-300 ${
                    open === index
                      ? "max-h-40 px-6 pb-6"
                      : "max-h-0 overflow-hidden"
                  }`}
                >

                  <p className="leading-8 text-slate-600">
                    {faq.answer}
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