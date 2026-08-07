import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "./projectData";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/Stagger";

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
            Website modern dengan desain premium, performa cepat, dan
            pengalaman pengguna yang profesional.
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
                    relative
                    block
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-blue-300
                    hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={project.title === "Corporate Website"}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Shine Effect */}
                    <div
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        transition-transform
                        duration-1000
                        group-hover:translate-x-full
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
                        text-slate-800
                        backdrop-blur-md
                      "
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <h3
                        className="
                          text-xl
                          font-bold
                          tracking-tight
                          transition-colors
                          duration-300
                          group-hover:text-blue-600
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        View Project
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        size-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight
                        className="
                          size-5
                          transition-transform
                          duration-300
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