import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const company = [
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

const services = [
  { title: "Landing Page", href: "/products" },
  { title: "Company Profile", href: "/products" },
  { title: "Dashboard", href: "/products" },
  { title: "Custom Website", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      {/* Background Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black tracking-tight">
              XORA
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Modern Digital Agency yang membantu bisnis berkembang
              melalui website premium, cepat, dan berkualitas.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 transition hover:border-pink-500 hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 p-3 transition hover:border-white hover:bg-white hover:text-black"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-lg font-bold">
              Company
            </h3>

            <div className="mt-6 space-y-4">

              {company.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 transition hover:text-white"
                >
                  {item.title}
                  <ArrowUpRight size={16} />
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-lg font-bold">
              Services
            </h3>

            <div className="mt-6 space-y-4">

              {services.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-400 transition hover:text-white"
                >
                  {item.title}
                  <ArrowUpRight size={16} />
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-3">

                <Mail className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p>hello@xora.id</p>
                </div>

              </div>

              <div className="flex gap-3">

                <Phone className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    WhatsApp
                  </p>

                  <p>+62 812 3456 7890</p>
                </div>

              </div>

              <div className="flex gap-3">

                <MapPin className="mt-1 text-blue-400" />

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p>Bandung, Indonesia</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} XORA. All Rights Reserved.
            </p>

            <p>
              Designed & Developed by XORA Studio.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}