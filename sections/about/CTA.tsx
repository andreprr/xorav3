import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-32 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="uppercase tracking-[0.3em] text-sm text-slate-400">
          LET'S WORK TOGETHER
        </span>

        <h2 className="mt-6 text-6xl font-bold leading-tight">
          Let's Build
          <br />
          Something Amazing.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Kami siap membantu bisnis Anda memiliki website yang modern,
          profesional, dan mampu meningkatkan kepercayaan pelanggan.
        </p>

        <Link href="/contact">

          <Button
            size="lg"
            className="mt-12"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </Link>

      </div>

    </section>
  );
}