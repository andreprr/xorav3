"use client";

import { ArrowRight, Check } from "lucide-react";
import usePricingGsap from "./usePricingGsap";

export default function PricingView() {
  usePricingGsap();

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-[#fcfdff]
        py-32
      "
    >
      {/* ========================================= */}
      {/* Crystal Background */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Glow */}

        <div
          className="
            absolute
            -top-56
            left-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-sky-200/30
            blur-[190px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            top-1/3
            -left-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-cyan-100/40
            blur-[180px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-0
            -right-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-blue-100/35
            blur-[180px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[1100px]
            w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-[220px]
          "
        />

        {/* Bottom Glow */}

        <div
          className="
            absolute
            -bottom-48
            left-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-sky-300/20
            blur-[150px]
          "
        />

        {/* Crystal Texture */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            [background-image:radial-gradient(circle_at_1px_1px,#7dd3fc_1px,transparent_0)]
            [background-size:28px_28px]
          "
        />

      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >

        {/* ========================================= */}
        {/* Header */}
        {/* ========================================= */}

        <div
          id="pricing-header"
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/70
              bg-white/60
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-slate-600
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(255,255,255,.45)]
            "
          >
            Pricing
          </span>

          <h2 className="
            mt-8
            text-5xl
            font-medium            
            tracking-[-0.045em]
            text-slate-900
            md:text-7xl
            ">
            CHOOSE THE PERFECT PLAN
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            Flexible pricing plans designed to help businesses of every
            size build high-quality digital solutions.
          </p>

        </div>

        {/* ========================================= */}
        {/* Pricing Cards */}
        {/* ========================================= */}

        <div
          id="pricing-cards"
          className="
            mt-24
            grid
            gap-8
            lg:grid-cols-3
            items-end
          "
        >
          {/* ================================================= */}
          {/* STARTER */}
          {/* ================================================= */}

          <article
            className="
              pricing-card
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/60
              bg-white/55
              p-8
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(15,23,42,.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-sky-100/20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <span className="text-2xl font-semibold tracking-tight">
                  STARTER
                </span>

                <div className="rounded-2xl bg-sky-100 p-3">
                  <Check className="h-5 w-5 text-sky-600" />
                </div>

              </div>

              <p className="mt-8 text-slate-500">
                Starting from
              </p>

              <div className="mt-2 flex items-end gap-2">

                <h3 className="text-6xl
                  font-bold
                  tracking-[-0.04em]
                  text-slate-900">
                  1.000.000
                </h3>

                <span className="pb-2 text-slate-500">
                  IDR
                </span>

              </div>

              <div className="my-10 h-px bg-slate-200" />

              <ul className="space-y-5">

                {[
                  "Company Profile Website",
                  "Responsive Design",
                  "Basic SEO",
                  "Free Domain",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-sky-600"
                    />

                    <span className="text-slate-600">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </article>

          {/* ================================================= */}
          {/* BUSINESS */}
          {/* ================================================= */}

          <article
            className="
              pricing-card
              group
              relative
              -translate-y-8
              overflow-hidden
              rounded-[36px]
              border
              border-white/70
              bg-white/65
              p-10
              backdrop-blur-[30px]
              shadow-[0_45px_120px_rgba(59,130,246,.18)]
              transition-all
              duration-500
              hover:-translate-y-10
            "
          >

            {/* Blue Glow */}

            <div
              className="
                absolute
                left-1/2
                bottom-0
                h-56
                w-72
                -translate-x-1/2
                rounded-full
                bg-sky-400/25
                blur-[90px]
              "
            />

            {/* Reflection */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/65
                via-white/5
                to-sky-200/30
              "
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <span className="text-3xl font-semibold tracking-tight">
                  BUSINESS
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/70
                    bg-white/60
                    px-4
                    py-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    backdrop-blur-xl
                  "
                >
                  MOST POPULAR
                </span>

              </div>

              {/* Harga Awal Pembuatan */}
              <p className="mt-8 text-slate-500">
                Pembuatan Awal
              </p>
              <div className="mt-1 flex items-end gap-2">
                <h3 className="text-4xl font-bold tracking-[-0.04em] text-slate-900">
                  500.000
                </h3>
                <span className="pb-1 text-xs text-slate-500">IDR</span>
              </div>

              {/* Biaya Bulanan */}
              <p className="mt-4 text-slate-500">
                Biaya Bulanan
              </p>
              <div className="mt-1 flex items-end gap-2">
                <h3 className="text-4xl font-bold tracking-[-0.04em] text-slate-900">
                  300.000
                </h3>
                <span className="pb-1 text-xs text-slate-500">IDR / bln</span>
              </div>

              <div className="my-8 h-px bg-slate-200/70" />

              <ul className="space-y-5">

                {[
                  "Landing Page / Company Website",
                  "CMS Dashboard",
                  "SEO Optimization",
                  "3 Months Support",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-sky-600"
                    />

                    <span className="text-slate-700">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </article>

          {/* ================================================= */}
          {/* ENTERPRISE */}
          {/* ================================================= */}

          <article
            className="
              pricing-card
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/60
              bg-white/55
              p-8
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(15,23,42,.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]
            "
          >
            {/* Reflection */}

            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-sky-100/20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <span className="text-2xl font-semibold tracking-tight">
                  ENTERPRISE
                </span>

                <div className="rounded-2xl bg-sky-100 p-3">
                  <Check className="h-5 w-5 text-sky-600" />
                </div>

              </div>

              <p className="mt-8 text-slate-500">
                Flexible Plan
              </p>

              <div className="mt-2">

                <h3 className="text-5xl font-black">
                  Custom
                </h3>

                <span className="text-slate-500">
                  Pricing
                </span>

              </div>

              <div className="my-10 h-px bg-slate-200" />

              <ul className="space-y-5">

                {[
                  "Business System",
                  "Admin Dashboard",
                  "API Integration",
                  "Maintenance & Support",
                ].map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-sky-600"
                    />

                    <span className="text-slate-600">
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </article>

        </div>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}

        <div
          id="pricing-cta"
          className="
            mt-24
            flex
            justify-center
          "
        >

          <button
            className="
              pricing-button
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-white/70
              bg-white/60
              px-10
              py-5
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(59,130,246,.12)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_35px_90px_rgba(59,130,246,.18)]
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-32
                w-56
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-sky-300/30
                blur-[70px]
                transition-all
                duration-500
                group-hover:bg-sky-400/40
              "
            />

            {/* Reflection */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/60
                via-white/5
                to-sky-100/20
              "
            />

            {/* Shine */}

            <div
              className="
                absolute
                -left-24
                top-0
                h-full
                w-24
                rotate-12
                bg-white/60
                blur-xl
                transition-all
                duration-700
                group-hover:left-[130%]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-800
                "
              >
                View Full Pricing
              </span>

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />

            </div>

          </button>

        </div>

      </div>

    </section>
  );
}