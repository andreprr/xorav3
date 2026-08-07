import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Import asset gambar
import brewlyImg from "@/sections/templates/assets/BrewlyCoffee.webp";
import contractorImg from "@/sections/templates/assets/agency.webp"; // atau sesuaikan jika ada file tersendiri
import startupImg from "@/sections/templates/assets/Startup.webp";

// 2. Tambahkan properti image ke array templates
const templates = [
  {
    title: "Brewly Coffee",
    category: "Coffee Shop",
    slug: "brewly",
    image: brewlyImg,
  },
  {
    title: "Contractor",
    category: "Company Profile",
    slug: "contractor",
    image: contractorImg,
  },
  {
    title: "Startup Launch",
    category: "Landing Page",
    slug: "startup-launch",
    image: startupImg,
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    slug: "creative-portfolio",
    image: null,
  },
  {
    title: "Restaurant Premium",
    category: "Business",
    slug: "restaurant-premium",
    image: null,
  },
  {
    title: "Property Developer",
    category: "Business",
    slug: "property-developer",
    image: null,
  },
  {
    title: "Digital Agency",
    category: "Company Profile",
    slug: "digital-agency",
    image: contractorImg,
  },
];

export default function TemplateGallery() {
  return (
    <section className="bg-white py-28">
      <section id="template-gallery"></section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Gallery
            </span>

            <h2 className="mt-4 text-5xl font-bold tracking-tight">
              Premium Website Templates
            </h2>
          </div>

          <Link href="/contact">
            <Button size="lg">Request Template</Button>
          </Link>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Container Gambar Thumbnail */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                {template.image && (
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                )}

                {/* Overlay Hover Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                  <Link href={`/templates/${template.slug}`}>
                    <Button>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-8">
                <span className="text-sm uppercase tracking-wider text-slate-500">
                  {template.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">{template.title}</h3>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold"
                >
                  Gunakan Template
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}