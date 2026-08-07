import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animation/FadeIn";

import corporate from "./assets/corporate.webp";
import dashboard from "./assets/dashboard.webp";

const projects = [
  {
    title: "Corporate Website",
    category: "Company Profile",
    year: "2026",
    image: corporate,
    description:
      "Website company profile modern dengan desain premium yang membantu meningkatkan kredibilitas perusahaan, branding digital, serta menghasilkan lebih banyak calon pelanggan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    stats: [
      { value: "95+", label: "Performance" },
      { value: "100%", label: "Responsive" },
      { value: "1.1s", label: "Load Time" },
    ],
  },
  {
    title: "Business Dashboard",
    category: "Business System",
    year: "2026",
    image: dashboard,
    description:
      "Dashboard bisnis modern untuk monitoring penjualan, laporan keuangan, stok barang, serta aktivitas bisnis secara real-time.",
    tech: ["Next.js", "Laravel API", "MySQL", "Chart.js"],
    stats: [
      { value: "99%", label: "Accuracy" },
      { value: "24/7", label: "Realtime" },
      { value: "Fast", label: "Experience" },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Featured Projects
            </span>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900">
              Selected Case Studies
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kami membangun website dan sistem digital yang tidak hanya
              terlihat modern, tetapi juga cepat, SEO Friendly, dan mampu
              meningkatkan kepercayaan pelanggan.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(0,0,0,.12)]">
                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  {/* Preview */}
                  <div className="relative p-8 lg:p-10">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 lg:p-12">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        {project.category}
                      </span>

                      <span className="text-sm font-medium text-slate-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-8 text-4xl font-black tracking-tight text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-3 gap-6">
                      {project.stats.map((item) => (
                        <div key={item.label}>
                          <h4 className="text-3xl font-black text-blue-600">
                            {item.value}
                          </h4>

                          <p className="mt-2 text-sm text-slate-500">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Button size="lg">
                        Live Preview
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>

                      <Link href="/contact">
                        <Button variant="ghost" size="lg">
                          Start Similar Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}