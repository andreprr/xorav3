import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Residence",
    category: "Residential",
    location: "Bandung",
    image: "/assets/contractor/projects/project-1.webp",
  },
  {
    title: "Office Tower",
    category: "Commercial",
    location: "Jakarta",
    image: "/assets/contractor/projects/project-2.webp",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Bekasi",
    image: "/assets/contractor/projects/project-3.webp",
  },
  {
    title: "Luxury Hotel",
    category: "Hospitality",
    location: "Bali",
    image: "/assets/contractor/projects/project-4.webp",
  },
  {
    title: "Shopping Mall",
    category: "Retail",
    location: "Surabaya",
    image: "/assets/contractor/projects/project-5.webp",
  },
  {
    title: "Modern Hospital",
    category: "Healthcare",
    location: "Bandung",
    image: "/assets/contractor/projects/project-6.webp",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            Featured Projects
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Our Latest Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every project reflects our commitment to quality, precision,
            and long-term client satisfaction.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-[32px] bg-[#F8FAFC] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="rounded-full bg-[#F59E0B]/10 px-4 py-2 text-sm font-semibold text-[#F59E0B]">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {project.location}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 font-semibold text-[#F59E0B]">
                  View Project

                  <ArrowUpRight className="h-5 w-5" />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}