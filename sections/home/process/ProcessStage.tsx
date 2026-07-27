export default function ProcessStage() {
    return (
        <div
            className="
        pointer-events-none
        absolute
        inset-0
        z-10
        overflow-hidden
      "
        >
            {/* ========================================= */}
            {/* Main Glass Platform */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[62%]
          h-[340px]
          w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-10deg]
          rounded-[48px]
          bg-gradient-to-br
          from-sky-300
          via-sky-500
          to-blue-700
          opacity-95
        "
            />

            {/* ========================================= */}
            {/* Glass Reflection */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[60%]
          h-[260px]
          w-[560px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-10deg]
          rounded-[42px]
          bg-gradient-to-br
          from-white/45
          via-white/10
          to-transparent
          blur-sm
        "
            />

            {/* ========================================= */}
            {/* Bottom Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[63%]
          h-[420px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-400/40
          blur-[120px]
        "
            />

            {/* ========================================= */}
            {/* Blue Fog */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[67%]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/20
          blur-[180px]
        "
            />

            {/* ========================================= */}
            {/* White Highlight */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-1/2
          top-[54%]
          h-[220px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/60
          blur-[100px]
        "
            />

            {/* ========================================= */}
            {/* Extra Left Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          left-[28%]
          top-[58%]
          h-48
          w-48
          rounded-full
          bg-cyan-300/20
          blur-[90px]
        "
            />

            {/* ========================================= */}
            {/* Extra Right Glow */}
            {/* ========================================= */}

            <div
                className="
          absolute
          right-[26%]
          top-[60%]
          h-56
          w-56
          rounded-full
          bg-sky-300/20
          blur-[90px]
        "
            />
        </div>
    );
}