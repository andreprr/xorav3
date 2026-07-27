interface ProcessLayoutProps {
    hero: React.ReactNode;
    stack: React.ReactNode;
}

export default function ProcessLayout({
    hero,
    stack,
}: ProcessLayoutProps) {
    return (
        <div
            className="
        relative
        mx-auto
        mt-24
        h-[950px]
        w-full
      "
        >
            {/* Background Platform */}

            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[620px]
          w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-10deg]
          rounded-[64px]
          bg-gradient-to-br
          from-sky-300
          via-sky-500
          to-blue-700
          opacity-90
          blur-[2px]
        "
            />

            {/* Glow */}

            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[950px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-400/30
          blur-[140px]
        "
            />

            {/* Hero */}

            <div
                className="
          absolute
          left-8
          top-40
          z-30
        "
            >
                {hero}
            </div>

            {/* Right Stack */}

            <div
                className="
          absolute
          right-8
          top-10
          z-40
        "
            >
                {stack}
            </div>
        </div>
    );
}