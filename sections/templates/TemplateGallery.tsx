import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    title:"Brewly Coffee",
    category:"Coffee Shop",
    slug:"brewly",
  },
  {
    title: "Contractor",
    category: "Company Profile",
    slug: "contractor",
  },
  {
    title: "Startup Launch",
    category: "Landing Page",
    slug: "startup-launch",
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    slug: "creative-portfolio",
  },
  {
    title: "Restaurant Premium",
    category: "Business",
    slug: "restaurant-premium",
  },
  {
    title: "Property Developer",
    category: "Business",
    slug: "property-developer",
  },
  {
    title: "Digital Agency",
    category: "Company Profile",
    slug: "digital-agency",
  },
];

export default function TemplateGallery() {
  return (
    <section className="bg-white py-28">
      <section id="template-gallery">

      </section>
      
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

            <Button size="lg">
              Request Template
            </Button>

          </Link>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {templates.map((template) => (

            <div
              key={template.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative aspect-[16/10] bg-slate-100">

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">

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

                <h3 className="mt-3 text-2xl font-bold">
                  {template.title}
                </h3>

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