import { PenTool, Code2, Rocket } from "lucide-react";
import ProcessGlass from "./ProcessGlass";

export default function ProcessStack() {
    return (
        <div className="relative h-[760px] w-[420px]">

            {/* ====================================== */}
            {/* CARD 02 */}
            {/* ====================================== */}

            <div
                className="
        process-card
        absolute
        right-0
        top-0
        rotate-[6deg]
    "
            >
                <ProcessGlass className="w-[340px] p-8">

                    <span
                        className="
              absolute
              right-6
              top-2
              text-[92px]
              font-black
              tracking-[-0.08em]
              text-slate-200/40
              select-none
            "
                    >
                        02
                    </span>

                    <div
                        className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/60
              bg-white/70
            "
                    >
                        <PenTool
                            className="text-sky-700"
                            size={28}
                        />
                    </div>

                    <h3
                        className="
              mt-7
              text-2xl
              font-bold
              text-neutral-900
            "
                    >
                        Perencanaan
                    </h3>

                    <p
                        className="
              mt-4
              leading-8
              text-slate-600
            "
                    >
                        Menyusun struktur website,
                        user flow, desain UI,
                        serta timeline project.
                    </p>

                </ProcessGlass>
            </div>

            {/* ====================================== */}
            {/* CARD 03 */}
            {/* ====================================== */}

            <div
                className="
        process-card
        absolute
        left-0
        top-[240px]
        -rotate-[5deg]
    "
            >
                <ProcessGlass className="w-[320px] p-8">

                    <span
                        className="
              absolute
              right-6
              top-2
              text-[86px]
              font-black
              tracking-[-0.08em]
              text-slate-200/40
              select-none
            "
                    >
                        03
                    </span>

                    <div
                        className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/60
              bg-white/70
            "
                    >
                        <Code2
                            className="text-sky-700"
                            size={28}
                        />
                    </div>

                    <h3
                        className="
              mt-7
              text-2xl
              font-bold
              text-neutral-900
            "
                    >
                        Development
                    </h3>

                    <p
                        className="
              mt-4
              leading-8
              text-slate-600
            "
                    >
                        Implementasi menggunakan
                        teknologi modern,
                        cepat, aman, dan scalable.
                    </p>

                </ProcessGlass>
            </div>

            {/* ====================================== */}
            {/* CARD 04 */}
            {/* ====================================== */}

            <div
                className="
        process-card
        absolute
        right-4
        bottom-0
        rotate-[4deg]
    "
            >
                <ProcessGlass className="w-[350px] p-8">

                    <span
                        className="
              absolute
              right-6
              top-2
              text-[92px]
              font-black
              tracking-[-0.08em]
              text-slate-200/40
              select-none
            "
                    >
                        04
                    </span>

                    <div
                        className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/60
              bg-white/70
            "
                    >
                        <Rocket
                            className="text-sky-700"
                            size={28}
                        />
                    </div>

                    <h3
                        className="
              mt-7
              text-2xl
              font-bold
              text-neutral-900
            "
                    >
                        Launch
                    </h3>

                    <p
                        className="
              mt-4
              leading-8
              text-slate-600
            "
                    >
                        Website dipublikasikan,
                        diuji kembali,
                        dan tetap mendapatkan support.
                    </p>

                </ProcessGlass>
            </div>

        </div>
    );
}