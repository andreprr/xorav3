import { Check, Minus } from "lucide-react";

const features = [
  {
    feature: "Responsive Design",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "SEO Basic",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "WhatsApp Integration",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "Dashboard Admin",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "CMS",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "API Integration",
    starter: false,
    business: false,
    enterprise: true,
  },
  {
    feature: "Priority Support",
    starter: false,
    business: true,
    enterprise: true,
  },
];

export default function Comparison() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Compare Plans
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Compare Features
          </h2>

        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-8 py-6 text-left">
                  Features
                </th>

                <th className="text-center">
                  Starter
                </th>

                <th className="text-center">
                  Business
                </th>

                <th className="text-center">
                  Enterprise
                </th>

              </tr>

            </thead>

            <tbody>

              {features.map((item) => (

                <tr
                  key={item.feature}
                  className="border-t"
                >

                  <td className="px-8 py-6 font-medium">
                    {item.feature}
                  </td>

                  {[item.starter, item.business, item.enterprise].map(
                    (value, index) => (
                      <td
                        key={index}
                        className="text-center"
                      >
                        {value ? (
                          <Check className="mx-auto text-green-600" />
                        ) : (
                          <Minus className="mx-auto text-slate-300" />
                        )}
                      </td>
                    )
                  )}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}