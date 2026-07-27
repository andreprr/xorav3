import { Search } from "lucide-react";
import ProcessGlass from "./ProcessGlass";

export default function ProcessHeroCard() {
    return (
        <ProcessGlass
            id="hero-card"
            className="
        w-[470px]
        p-10
        rotate-[-6deg]
      "
        >
            {/* Watermark */}

            <span
                className="
          absolute
          right-8
          top-2
          text-[150px]
          font-black
          tracking-[-0.08em]
          text-slate-200/40
          select-none
        "
            >
                01
            </span>

            {/* Icon */}

            <div
                className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-[24px]
          border
          border-white/60
          bg-white/70
          backdrop-blur-xl
          shadow-lg
        "
            >
                <Search
                    size={34}
                    className="text-sky-700"
                />
            </div>

            {/* Step */}

            <span
                className="
          mt-10
          inline-flex
          rounded-full
          bg-sky-100
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-sky-700
        "
            >
                STEP 01
            </span>

            {/* Title */}

            <h3
                className="
          mt-7
          text-4xl
          font-black
          tracking-[-0.05em]
          text-neutral-900
        "
            >
                Konsultasi
            </h3>

            {/* Description */}

            <p
                className="
          mt-6
          leading-9
          text-lg
          text-slate-600
        "
            >
                Diskusikan kebutuhan bisnis, tujuan project,
                fitur utama, target pengguna, timeline,
                serta solusi terbaik sebelum proses
                pengembangan dimulai.
            </p>
        </ProcessGlass>
    );
}