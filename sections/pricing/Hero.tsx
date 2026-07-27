import { BadgeDollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Blur */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-700">
          <BadgeDollarSign className="h-4 w-4" />
          Pricing
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
          Simple Pricing
          <br />
          For Every Business.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Pilih paket website yang sesuai dengan kebutuhan bisnis Anda.
          Transparan, tanpa biaya tersembunyi, dan siap dikembangkan
          seiring pertumbuhan perusahaan.
        </p>

      </div>

    </section>
  );
}