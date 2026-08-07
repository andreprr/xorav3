import { Zap, ShieldCheck, BarChart3, Layers } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast Speed",
        description: "Optimized for maximum performance with ultra-low latency globally.",
    },
    {
        icon: ShieldCheck,
        title: "Bank-Grade Security",
        description: "End-to-end encryption to keep your enterprise data completely safe.",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Real-time insights and custom reports to scale business decisions.",
    },
    {
        icon: Layers,
        title: "Seamless Integration",
        description: "Connect effortlessly with over 100+ popular tools and APIs.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Features</span>
                    <h2 className="mt-3 text-4xl font-bold text-white">Everything You Need to Scale</h2>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, index) => (
                        <div key={index} className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 transition">
                            <div className="p-3 bg-indigo-600/10 rounded-xl text-indigo-400 inline-block">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}