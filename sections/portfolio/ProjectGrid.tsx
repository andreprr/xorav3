import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/Stagger";

const projects = [
  {
    title: "Corporate Website",
    category: "Company Profile",
    image: "/portfolio/corporate.webp",
  },
  {
    title: "Restaurant Website",
    category: "Business",
    image: "/portfolio/restaurant.webp",
  },
  {
    title: "Property Landing Page",
    category: "Landing Page",
    image: "/portfolio/property.webp",
  },
  {
    title: "Startup Dashboard",
    category: "Dashboard",
    image: "/portfolio/dashboard.webp",
  },
  {
    title: "Agency Website",
    category: "Agency",
    image: "/portfolio/agency.webp",
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    image: "/portfolio/portfolio.webp",
  },
];

export default function ProjectGrid() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Featured Works
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            Project yang kami bangun
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Website modern dengan desain premium, performa cepat,
            dan pengalaman pengguna yang profesional.
          </p>

        </div>


        {/* Grid */}

        <StaggerContainer>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <StaggerItem key={project.title}>

                <Link
                  href="/contact"
                  className="
                  group
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                  "
                >

                  {/* Image */}

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                      "
                    />


                    {/* Overlay */}

                    <div
                      className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                      "
                    />


                    {/* Category */}

                    <div
                      className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white/90
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-slate-700
                      backdrop-blur
                      "
                    >
                      {project.category}
                    </div>


                  </div>


                  {/* Content */}

                  <div className="flex items-center justify-between p-6">


                    <div>

                      <h3 className="
                      text-xl
                      font-bold
                      tracking-tight
                      transition
                      group-hover:text-blue-600
                      ">
                        {project.title}
                      </h3>


                      <p className="mt-2 text-sm text-slate-500">
                        View Project
                      </p>

                    </div>


                    <div
                      className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      transition-all
                      duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                      "
                    >

                      <ArrowUpRight
                        className="
                        size-5
                        transition
                        group-hover:rotate-45
                        "
                      />

                    </div>


                  </div>


                </Link>

              </StaggerItem>

            ))}

          </div>

        </StaggerContainer>


      </div>

    </section>
  );
}