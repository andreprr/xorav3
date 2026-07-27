import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    image: "/assets/contractor/services/residential.webp",
    description:
      "Modern residential homes built with quality materials and timeless design.",
  },
  {
    title: "Commercial Building",
    image: "/assets/contractor/services/commercial.webp",
    description:
      "Professional office buildings, retail spaces and commercial developments.",
  },
  {
    title: "Industrial Construction",
    image: "/assets/contractor/services/industrial.webp",
    description:
      "Large-scale industrial facilities, warehouses and production buildings.",
  },
  {
    title: "Architecture & Design",
    image: "/assets/contractor/services/architecture.webp",
    description:
      "Creative architectural planning focused on functionality and aesthetics.",
  },
  {
    title: "Renovation",
    image: "/assets/contractor/services/renovation.webp",
    description:
      "Transform existing buildings into modern and valuable spaces.",
  },
  {
    title: "Project Management",
    image: "/assets/contractor/services/management.webp",
    description:
      "End-to-end project coordination ensuring quality and timely delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            Our Services
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Building Solutions
            <br />
            For Every Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            From residential homes to large commercial developments,
            we deliver construction solutions with precision, safety,
            and long-term value.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center font-semibold text-[#F59E0B]">
                  Learn More

                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}