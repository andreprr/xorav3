"use client";
import WhyXoraTimeline from "./WhyXoraTimeline";
import type { StaticImageData } from "next/image";

import Image from "next/image";
import {
  whyContent,
  topTemplates,
  bottomTemplates,
} from "./whyData";

export default function WhyXora() {
  return (
    <section
      id="why-xora"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#ffffff]
        via-[#f6fbff]
        to-[#eef7ff]
        py-32
      "
    >
      {/* Crystal Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-[-10%]
            top-[-10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-200/30
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[-15%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-sky-300/25
            blur-[180px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-4">

              <span className="text-4xl font-light text-red-500">
                {whyContent.number}
              </span>

              <div className="h-px w-8 bg-neutral-300" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-neutral-500
                "
              >
                {whyContent.label}
              </span>

            </div>

            <h2
              className="
                mt-8
                whitespace-pre-line
                text-5xl
                font-semibold
                leading-[0.9]
                tracking-[-0.06em]
                text-neutral-900
                lg:text-7xl
              "
            >
              {whyContent.title}
            </h2>

          </div>

          {/* RIGHT */}

          <div className="flex justify-end">

            <div className="max-w-xl border-l border-neutral-300 pl-8">

              <p
                className="
                  text-lg
                  leading-8
                  text-neutral-600
                "
              >
                {whyContent.description}
              </p>

            </div>

          </div>

        </div>

        {/* Gallery nanti */}

        <div className="mt-24">

          {/* Row 1 */}

          <div id="why-row-top" className="flex gap-8">
            {topTemplates.map((image: StaticImageData, index: number) => (
              <div
                key={index}
                className="
                  relative
                  h-[280px]
                  w-[430px]
                  shrink-0
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  shadow-xl
                "
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}

          <div
            id="why-row-bottom"
            className="mt-8 flex gap-8"
          >
            {bottomTemplates.map((image: StaticImageData, index: number) => (
              <div
                key={index}
                className="
                  relative
                  h-[280px]
                  w-[430px]
                  shrink-0
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  shadow-xl
                "
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
      <WhyXoraTimeline />
    </section>
  );
}