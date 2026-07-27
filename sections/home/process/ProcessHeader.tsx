export default function ProcessHeader() {
    return (
        <div
            className="
        relative
        z-20
        mx-auto
        flex
        max-w-3xl
        flex-col
        items-center
        text-center
      "
        >
            {/* Small Label */}

            <span
                className="
          font-medium
          uppercase
          tracking-[0.25em]
          text-sky-700
          text-lg
        "
            >
                PROCESS
            </span>

            {/* Heading */}

            <h2
                className="
          mt-4
          font-display
          text-5xl
          font-black
          tracking-[-0.05em]
          text-neutral-900
          md:text-6xl
        "
            >
                Cara Kami Bekerja
            </h2>

            {/* Description */}

            <p
                className="
          mt-7
          max-w-2xl
          text-xl
          leading-9
          text-slate-600
        "
            >
                Proses sederhana, transparan, dan terarah agar project
                selesai tepat waktu dengan kualitas terbaik.
            </p>
        </div>
    );
}