"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import FadeIn from "@/components/animation/FadeIn";

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812-3456-7890",
    description: "Available Mon - Fri",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    description: "Fast Response",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@xora.id",
    description: "Business Inquiry",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bandung, Indonesia",
    description: "Remote Worldwide",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Contact Information
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight">
              We're Ready
              <br />
              To Help Your Business
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Hubungi kami melalui salah satu media berikut.
              Kami akan merespon secepat mungkin.
            </p>

          </div>

        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contacts.map((item, index) => {

            const Icon = item.icon;

            return (

              <FadeIn
                key={item.title}
                delay={index * 0.15}
              >

                <div
                  className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  "
                >

                  <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                    transition
                    group-hover:bg-blue-600
                    group-hover:text-white
                    "
                  >

                    <Icon size={28} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-semibold text-slate-900 break-words">
                    {item.value}
                  </p>

                  <p className="mt-2 text-slate-500">
                    {item.description}
                  </p>

                </div>

              </FadeIn>

            );

          })}

        </div>

        {/* Bottom Card */}

        <FadeIn delay={0.5}>

          <div className="mt-16 rounded-[32px] bg-slate-900 p-10 text-white">

            <div className="grid gap-8 lg:grid-cols-2">

              <div>

                <span className="text-sm uppercase tracking-[0.25em] text-blue-400">
                  Working Hours
                </span>

                <h3 className="mt-4 text-3xl font-black">
                  Always Ready for
                  <br />
                  New Projects
                </h3>

              </div>

              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <Clock className="text-blue-400" />

                  <div>

                    <h4 className="font-semibold">
                      Monday - Friday
                    </h4>

                    <p className="text-slate-400">
                      09.00 - 18.00 WIB
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <MessageCircle className="text-blue-400" />

                  <div>

                    <h4 className="font-semibold">
                      Average Response
                    </h4>

                    <p className="text-slate-400">
                      Less than 1 Hour
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}