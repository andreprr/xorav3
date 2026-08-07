import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/40 border-t border-slate-900 text-center">
            <div className="mx-auto max-w-4xl px-6">
                <h2 className="text-4xl font-bold text-white sm:text-5xl">
                    Ready to Accelerate Your Growth?
                </h2>
                <p className="mt-4 text-slate-400 text-lg">
                    Join thousands of startups building the future with our platform.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8">
                        Start Your Free Trial Now
                    </Button>
                </div>
            </div>
        </section>
    );
}