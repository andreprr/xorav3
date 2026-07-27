export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          About XORA
        </span>

        <h1 className="mt-8 text-6xl font-bold tracking-tight leading-tight">
          We Build Digital
          <br />
          Experiences That
          <br />
          Grow Businesses.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          XORA adalah digital agency yang berfokus pada website modern,
          landing page, dashboard, dan solusi digital yang membantu bisnis
          berkembang lebih cepat.
        </p>

      </div>

    </section>
  );
}