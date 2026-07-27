import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-80"
        >

        <div className="hidden sm:block">

        </div>
      </Link>


        {/* Menu */}

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#menu"
            className="text-sm font-medium text-stone-700 transition hover:text-[#B77945]"
          >
            Menu
          </a>


          <a
            href="#about"
            className="text-sm font-medium text-stone-700 transition hover:text-[#B77945]"
          >
            About
          </a>


          <a
            href="#gallery"
            className="text-sm font-medium text-stone-700 transition hover:text-[#B77945]"
          >
            Gallery
          </a>


          <a
            href="#contact"
            className="text-sm font-medium text-stone-700 transition hover:text-[#B77945]"
          >
            Contact
          </a>


        </nav>


        {/* CTA */}

        <a
          href="#order"
          className="
          rounded-full
          bg-[#1C1917]
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-[#B77945]
          "
        >
          Order Now
        </a>


      </div>

    </header>
  );
}