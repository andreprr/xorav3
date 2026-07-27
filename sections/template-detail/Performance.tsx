"use client";

import FadeIn from "@/components/animation/FadeIn";

const scores = [
  {
    title: "Performance",
    score: 100,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Accessibility",
    score: 100,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Best Practices",
    score: 100,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "SEO",
    score: 100,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export default function Performance() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">

              Lighthouse Score

            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

              Built for Speed

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Template dikembangkan menggunakan teknologi modern
              dengan performa tinggi, SEO optimal, dan best practice.

            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {scores.map((item, index) => (

            <FadeIn
              key={item.title}
              delay={index * 0.1}
            >

              <div className="rounded-[30px] border border-slate-200 bg-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                <div
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full ${item.bg}`}
                >

                  <span
                    className={`text-4xl font-black ${item.color}`}
                  >
                    {item.score}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">

                  {item.title}

                </h3>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  );
}