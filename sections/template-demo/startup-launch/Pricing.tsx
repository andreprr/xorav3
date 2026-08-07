import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$29",
        desc: "Perfect for small teams and early startups.",
        features: ["Up to 5 team members", "Basic Analytics", "10GB Cloud Storage", "Email Support"],
        popular: false,
    },
    {
        name: "Pro",
        price: "$79",
        desc: "Ideal for growing businesses and tech companies.",
        features: ["Unlimited team members", "Advanced Analytics", "500GB Cloud Storage", "24/7 Priority Support", "API Access"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$199",
        desc: "Custom solutions for large scale organizations.",
        features: ["Custom Integrations", "Dedicated Account Manager", "Unlimited Storage", "SLA Guarantee", "Custom Security"],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-900/40 border-t border-slate-900">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Pricing</span>
                    <h2 className="mt-3 text-4xl font-bold text-white">Simple & Transparent Pricing</h2>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border ${plan.popular ? "border-indigo-500 bg-slate-900 shadow-2xl shadow-indigo-500/10" : "border-slate-800 bg-slate-950"} flex flex-col justify-between`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    Most Popular
                                </span>
                            )}
                            <div>
                                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                                    <span className="text-slate-400 text-sm">/month</span>
                                </div>
                                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3">
                                            <Check className="h-4 w-4 text-indigo-400" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button className={`mt-8 w-full rounded-xl ${plan.popular ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-slate-800 hover:bg-slate-700 text-white"}`}>
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}