import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-16 text-center text-white">
            <div className="mx-auto max-w-4xl px-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
                    🚀 Next-Gen SaaS Platform
                </span>
                <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight">
                    Scale Your Business <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        Faster Than Ever
                    </span>
                </h1>
                <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                    Empower your team with our all-in-one platform built for modern startups. Boost productivity, automate workflows, and scale seamlessly.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white gap-2 rounded-full px-8 w-full sm:w-auto">
                        Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-900 rounded-full px-8 w-full sm:w-auto">
                        Book Demo
                    </Button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> No credit card required</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 14-day free trial</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cancel anytime</span>
                </div>
            </div>
        </section>
    );
}