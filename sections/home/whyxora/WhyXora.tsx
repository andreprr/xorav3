"use client";

import Image, { StaticImageData } from "next/image";
import WhyXoraTimeline from "./WhyXoraTimeline";
import {
  whyContent,
  topTemplates,
  bottomTemplates,
} from "./whyData";

const topLoop = [...topTemplates, ...topTemplates];
const bottomLoop = [...bottomTemplates, ...bottomTemplates];

export default function WhyXora() {
  return (
    <section
      id="why-xora"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#f7fbff]
        to-[#eef7ff]
        py-32
      "
    >
      {/* ================= Background Glow ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-[-12%]
            top-[-10%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-sky-200/40
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            top-[10%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-cyan-200/35
            blur-[220px]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-blue-100/30
            blur-[220px]
          "
        />

      </div>

      <div className="relative">

       {/* ================= HEADER ================= */}

        <div className="relative mx-auto max-w-7xl px-8">

          <div className="grid items-start gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="flex items-start gap-6">

                <div className="flex items-start gap-5">

                  <span className="text-5xl font-light text-[#4D8EFF]">
                    {whyContent.number}
                  </span>

                  <div className="mt-2 h-36 w-px bg-[#4D8EFF]/40" />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
                    {whyContent.label}
                  </p>

                  <h2
                    className="
                      mt-4
                      uppercase
                      leading-[0.82]
                      tracking-[-0.08em]
                      font-black
                    "
                  >
                    <span
                      className="
                        block
                        text-[clamp(5rem,8vw,8rem)]
                        text-neutral-900
                      "
                    >
                      WHY
                    </span>

                    <span
                      className="
                        block
                        text-[clamp(5rem,8vw,8rem)]
                        bg-gradient-to-b
                        from-[#76BBFF]
                        via-[#2F84FF]
                        to-[#0058EC]
                        bg-clip-text
                        text-transparent
                      "
                    >
                      XORA
                    </span>

                  </h2>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-end">

              <div className="max-w-xl border-l border-neutral-300 pl-8">

                <p className="text-xl leading-9 text-neutral-700">
                  {whyContent.description}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= GALLERY ================= */}

          <div className="relative mt-28 left-1/2 w-screen -translate-x-1/2">

            {/* Row Top */}

            <div className="w-full overflow-hidden">

              <div
                id="why-row-top"
                className="
                  why-scroll-left
                  flex
                  w-max
                  gap-10
                "
              >

                {topLoop.map((image, index) => (

                  <div
                    key={index}
                    className="
                      relative
                      h-[300px]
                      w-[480px]
                      shrink-0
                      overflow-hidden
                      rounded-[34px]
                      bg-white
                      shadow-[0_30px_80px_rgba(0,0,0,.08)]
                    "
                  >

                    <Image
                      src={image}
                      alt=""
                      fill
                      className="
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />

                  </div>

                ))}

              </div>

            </div>

            {/* Row Bottom */}

            <div className="mt-10 w-full overflow-hidden">

              <div
                id="why-row-bottom"
                className="
                  why-scroll-right
                  flex
                  w-max
                  gap-10
                "
              >

                {bottomLoop.map((image, index) => (

                  <div
                    key={index}
                    className="
                      relative
                      h-[300px]
                      w-[480px]
                      shrink-0
                      overflow-hidden
                      rounded-[34px]
                      bg-white
                      shadow-[0_35px_90px_rgba(41,92,163,.12)]
                    "
                  >

                    <Image
                      src={image}
                      alt=""
                      fill
                      className="
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>
      </div>

      <WhyXoraTimeline />

    </section>
  );
}