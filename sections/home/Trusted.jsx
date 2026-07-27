export default function Trusted() {
  const services = [
    "Company Profile",
    "Landing Page",
    "Website Catalog",
    "Business System",
    "Custom Website",
  ];

  return (
    <section id="trusted" className="border-y border-slate-200 bg-[#FAFAF8] py-16">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Solusi Digital XORA
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">

          {services.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white p-6 text-center font-semibold shadow-sm"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}