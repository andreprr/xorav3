interface ProcessGlassProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export default function ProcessGlass({
    id,
    children,
    className = "",
}: ProcessGlassProps) {
    return (
        <div
            id={id}
            className={`
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/60
        bg-white/45
        backdrop-blur-[26px]
        shadow-[0_40px_120px_rgba(15,23,42,.10)]
        transition-all
        duration-700
        hover:-translate-y-2
        hover:shadow-[0_60px_160px_rgba(59,130,246,.16)]
        ${className}
      `}
        >
            {/* ========================= */}
            {/* Glass Gradient */}
            {/* ========================= */}

            <div
                className="
          absolute
          inset-0
          rounded-[34px]
          bg-gradient-to-br
          from-white/70
          via-white/20
          to-transparent
        "
            />

            {/* ========================= */}
            {/* Reflection */}
            {/* ========================= */}

            <div
                className="
          absolute
          -left-24
          top-0
          h-full
          w-32
          rotate-[18deg]
          bg-white/50
          blur-2xl
          transition-transform
          duration-1000
          group-hover:translate-x-[520px]
        "
            />

            {/* ========================= */}
            {/* Top Highlight */}
            {/* ========================= */}

            <div
                className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-white/80
        "
            />

            {/* ========================= */}
            {/* Left Highlight */}
            {/* ========================= */}

            <div
                className="
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-white/60
        "
            />

            {/* ========================= */}
            {/* Bottom Glow */}
            {/* ========================= */}

            <div
                className="
          absolute
          bottom-0
          left-1/2
          h-24
          w-48
          -translate-x-1/2
          rounded-full
          bg-sky-300/25
          blur-3xl
        "
            />

            {/* ========================= */}
            {/* Inner Border */}
            {/* ========================= */}

            <div
                className="
          absolute
          inset-[1px]
          rounded-[32px]
          border
          border-white/40
        "
            />

            {/* ========================= */}
            {/* Content */}
            {/* ========================= */}

            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}