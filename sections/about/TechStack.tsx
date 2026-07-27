const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Node.js",
  "Figma",
  "Git",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Technology
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Modern Tech Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Kami menggunakan teknologi modern yang cepat,
            aman, scalable, dan mudah dikembangkan.
          </p>

        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-5">

          {tech.map((item) => (

            <div
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-8 py-4 text-lg font-semibold transition hover:bg-blue-600 hover:text-white"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}