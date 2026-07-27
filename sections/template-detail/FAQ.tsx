"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

const faqs = [
  {
    question: "Apakah saya mendapatkan source code?",
    answer:
      "Ya. Anda akan mendapatkan full source code Next.js, TypeScript, Tailwind CSS, beserta seluruh aset yang digunakan.",
  },
  {
    question: "Apakah template bisa digunakan untuk client?",
    answer:
      "Bisa. Template dapat digunakan untuk project pribadi maupun project client sesuai lisensi yang berlaku.",
  },
  {
    question: "Apakah template responsive?",
    answer:
      "Ya. Template sudah dioptimalkan untuk Desktop, Tablet, dan Mobile.",
  },
  {
    question: "Apakah bisa request custom?",
    answer:
      "Tentu. Jika membutuhkan fitur tambahan atau perubahan desain, Anda dapat menghubungi tim XORA.",
  },
  {
    question: "Apakah mendapat update?",
    answer:
      "Ya. Setiap pembelian akan mendapatkan update minor secara gratis.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-4xl px-6">

        <FadeIn>

          <div className="text-center">

            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              FAQ
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Masih ada pertanyaan? Berikut beberapa pertanyaan yang paling sering diajukan sebelum membeli template.
            </p>

          </div>

        </FadeIn>

        <FadeIn delay={0.2}>

          <Accordion.Root
            type="single"
            collapsible
            className="mt-16 space-y-4"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >

                <Accordion.Header>

                  <Accordion.Trigger className="group flex w-full items-center justify-between px-8 py-6 text-left text-lg font-semibold text-slate-900">

                    {faq.question}

                    <ChevronDown className="transition duration-300 group-data-[state=open]:rotate-180" />

                  </Accordion.Trigger>

                </Accordion.Header>

                <Accordion.Content className="px-8 pb-6 leading-8 text-slate-600">

                  {faq.answer}

                </Accordion.Content>

              </Accordion.Item>
            ))}
          </Accordion.Root>

        </FadeIn>

      </div>

    </section>
  );
}