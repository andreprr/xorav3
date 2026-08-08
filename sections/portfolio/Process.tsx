import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan bisnis dan tujuan website atau sistem yang ingin dibangun.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Perencanaan",
    description:
      "Kami menyusun struktur, desain, dan alur sistem sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Proses pembuatan website atau sistem menggunakan teknologi modern.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Website siap online dan kami tetap memberikan support setelah project selesai.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-blue-100/40 text-neutral-900 flex flex-col justify-between p-6 sm:p-10 lg:p-14 font-sans select-none"
    >
      {/* Decorative Accents Top */}
      <div className="w-full flex justify-between items-center text-neutral-400 text-xs font-mono opacity-70">
        <div className="flex gap-2">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
        <span className="hidden sm:inline uppercase tracking-widest text-[10px]">
          XORA PROCESS
        </span>
        <span>✦</span>
        <span className="hidden md:inline uppercase tracking-widest text-[10px]">
          LA - H - AXN7A - EUR
        </span>
        <div className="flex gap-2">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>

      {/* ======================================= */}
      {/* HERO HEADLINE & PROCESS STEPS INDEX */}
      {/* ======================================= */}
      <div className="my-auto w-full pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Giant Condensed Headline */}
          <div className="lg:col-span-9">
            <h2 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-black leading-[0.88] tracking-[-0.05em] uppercase text-neutral-950 font-sans">
              CARA KAMI
            </h2>

            {/* Inline Card / Icon Image Feature */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
              <div className="h-16 w-28 sm:h-24 sm:w-44 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-0.5 shadow-lg shadow-sky-500/20 flex items-center justify-center">
                <div className="h-full w-full rounded-[14px] bg-white/90 backdrop-blur-md flex items-center justify-center gap-2 text-sky-600">
                  <Rocket className="h-8 w-8 animate-pulse" />
                </div>
              </div>

              <h2 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-black leading-[0.88] tracking-[-0.05em] uppercase text-neutral-950 font-sans">
                BEKERJA
              </h2>
            </div>
          </div>

          {/* Right: Quick Steps List Index */}
          <div className="lg:col-span-3 flex flex-col justify-center border-l lg:border-l-0 border-neutral-200 pl-4 lg:pl-0">
            <div className="space-y-2 font-mono text-xs sm:text-sm text-neutral-600">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center justify-between py-1 border-b border-neutral-200/60"
                >
                  <span className="font-bold text-neutral-900">
                    {step.number}
                  </span>
                  <span className="uppercase tracking-wider font-sans font-semibold">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================= */}
      {/* BOTTOM SUMMARY & CARDS GRID */}
      {/* ======================================= */}
      <div className="w-full space-y-10 pt-6">
        {/* Subtitle / Intro Text */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-md bg-neutral-900 px-3 py-1 text-[11px] font-mono font-medium text-white uppercase tracking-wider mb-3">
            PROCESS OVERVIEW
          </span>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 tracking-tight">
            Proses sederhana, transparan, dan terarah{" "}
            <span className="text-neutral-400 font-normal">
              agar project selesai tepat waktu dengan kualitas terbaik.
            </span>
          </p>
        </div>

        {/* Steps Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>

                    <span className="text-2xl font-mono font-bold text-neutral-300 group-hover:text-sky-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-neutral-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Micro Label */}
        <div className="flex justify-between items-center border-t border-neutral-200/80 pt-4 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>XORA DIGITAL STUDIO</span>
          <span>WEBDESIGN & DEVELOPMENT</span>
        </div>
      </div>
    </section>
  );
}