import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black py-32 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-6xl font-bold leading-tight">
          Ready to Build
          <br />
          Your Website?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 leading-8">
          Mulai project website profesional bersama XORA dan manfaatkan promo soft launching.
        </p>

        <Link href="/contact">

          <Button
            size="lg"
            className="mt-10"
          >
            Start Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

        </Link>

      </div>

    </section>
  );
}