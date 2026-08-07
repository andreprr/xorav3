import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 font-bold flex items-center justify-center text-white">S</div>
                    <span className="text-xl font-bold text-white tracking-wide">StartupX</span>
                </div>
                <nav className="hidden space-x-8 text-sm font-medium text-slate-400 md:flex">
                    <Link href="#features" className="hover:text-white transition">Features</Link>
                    <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
                    <Link href="#testimonials" className="hover:text-white transition">Testimonials</Link>
                    <Link href="#faq" className="hover:text-white transition">FAQ</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block">Sign In</Link>
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-5">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}