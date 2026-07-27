export default function ProcessBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* ========================================= */}
            {/* Top Blue Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          -top-56
          left-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-sky-200/30
          blur-[190px]
        "
            />

            {/* ========================================= */}
            {/* Left Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          top-1/3
          -left-64
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-100/40
          blur-[180px]
        "
            />

            {/* ========================================= */}
            {/* Right Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          bottom-0
          -right-64
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-100/35
          blur-[180px]
        "
            />

            {/* ========================================= */}
            {/* Center White Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[1100px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/70
          blur-[220px]
        "
            />

            {/* ========================================= */}
            {/* Blue Beam */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[58%]
          h-[340px]
          w-[540px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[60px]
          bg-gradient-to-br
          from-sky-400/80
          via-blue-500/90
          to-blue-700/90
          blur-[12px]
          opacity-90
          rotate-[-10deg]
        "
            />

            {/* ========================================= */}
            {/* Beam Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[58%]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400/25
          blur-[120px]
        "
            />

            {/* ========================================= */}
            {/* Crystal Texture */}
            {/* ========================================= */}

            <div
                className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:radial-gradient(circle_at_1px_1px,#7dd3fc_1px,transparent_0)]
          [background-size:28px_28px]
        "
            />

            {/* ========================================= */}
            {/* Decorative Blur */}
            {/* ========================================= */}

            <div
                className="
          absolute
          bottom-20
          right-24
          h-40
          w-40
          rounded-full
          bg-sky-300/20
          blur-[80px]
        "
            />

            <div
                className="
          absolute
          left-10
          bottom-40
          h-56
          w-56
          rounded-full
          bg-cyan-300/20
          blur-[90px]
        "
            />

        </div>
    );
}