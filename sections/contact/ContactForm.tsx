"use client";

import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Start Your Project
              </span>

              <h2 className="mt-5 text-5xl font-black tracking-tight">
                Tell Us About
                <br />
                Your Project
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-500">
                Isi formulir berikut dan tim kami akan menghubungi Anda
                secepat mungkin untuk mendiskusikan solusi terbaik
                sesuai kebutuhan bisnis Anda.
              </p>

            </div>

            {/* RIGHT */}

            <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

              <div className="grid gap-6">

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    WhatsApp Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+62..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Project Type
                  </label>

                  <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">

                    <option>Landing Page</option>
                    <option>Company Profile</option>
                    <option>E-Commerce</option>
                    <option>Dashboard</option>
                    <option>Custom Web App</option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Estimated Budget
                  </label>

                  <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">

                    <option>Rp 500rb - 2jt</option>
                    <option>Rp 2jt - 5jt</option>
                    <option>Rp 5jt - 10jt</option>
                    <option>Rp 10jt+</option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
                  />

                </div>

                <Button
                  size="lg"
                  className="w-full"
                >
                  Send Project Inquiry
                </Button>

              </div>

            </form>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}