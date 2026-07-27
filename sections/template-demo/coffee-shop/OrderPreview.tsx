import {
  CheckCircle2,
  Clock3,
  ChefHat,
} from "lucide-react";

const orders = [
  {
    table: "Table 01",
    items: [
      "2x Caffe Latte",
      "1x Croissant",
    ],
    status: "Preparing",
    color: "bg-amber-100 text-amber-700",
    icon: Clock3,
  },
  {
    table: "Table 03",
    items: [
      "1x Matcha Latte",
      "2x Cheesecake",
    ],
    status: "Ready",
    color: "bg-blue-100 text-blue-700",
    icon: ChefHat,
  },
  {
    table: "Take Away",
    items: [
      "3x Americano",
    ],
    status: "Completed",
    color: "bg-green-100 text-green-700",
    icon: CheckCircle2,
  },
];

export default function OrderPreview() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77945]">
            Live Order System
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Accept Orders Effortlessly
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            This template includes an interactive ordering flow,
            allowing customers to place orders while staff can
            easily manage incoming requests.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          <div className="space-y-6 lg:col-span-3">

            {orders.map((order) => {
              const Icon = order.icon;

              return (
                <div
                  key={order.table}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-bold">
                      {order.table}
                    </h3>

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${order.color}`}
                    >
                      <Icon className="h-4 w-4" />
                      {order.status}
                    </span>

                  </div>

                  <div className="mt-6 space-y-2">

                    {order.items.map((item) => (
                      <p key={item} className="text-slate-600">
                        • {item}
                      </p>
                    ))}

                  </div>

                </div>
              );
            })}

          </div>

          <div className="rounded-3xl bg-[#2C221D] p-8 text-white">

            <h3 className="text-2xl font-bold">
              Today's Summary
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-white/60">
                  Total Orders
                </p>

                <h4 className="text-4xl font-black">
                  25
                </h4>
              </div>

              <div>
                <p className="text-white/60">
                  Completed
                </p>

                <h4 className="text-4xl font-black">
                  18
                </h4>
              </div>

              <div>
                <p className="text-white/60">
                  Revenue
                </p>

                <h4 className="text-4xl font-black text-[#D6A06C]">
                  Rp2.350.000
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}