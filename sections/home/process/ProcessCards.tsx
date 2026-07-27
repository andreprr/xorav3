import { processSteps } from "./processData";

export default function ProcessCards() {
    return (
        <div
            className="
        relative
        mx-auto
        mt-24
        h-[850px]
        w-full
      "
        >
            {processSteps.map((step) => {
                const Icon = step.icon;

                const isLarge = step.size === "large";

                return (
                    <article
                        key={step.id}
                        style={{
                            top: step.position.top,
                            left: step.position.left,
                            right: step.position.right,
                            transform: `rotate(${step.rotation})`,
                        }}
                        className={`
              absolute
              overflow-hidden
              rounded-[34px]
              border
              border-white/60
              bg-white/55
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(15,23,42,.10)]
              transition-all
              duration-700
              hover:-translate-y-3
              hover:scale-[1.02]
              hover:shadow-[0_50px_120px_rgba(59,130,246,.18)]
              ${isLarge
                                ? "w-[430px] p-10"
                                : "w-[340px] p-8"
                            }
            `}
                    >
                        {/* Glass Reflection */}

                        <div
                            className="
                absolute
                inset-0
                rounded-[34px]
                bg-gradient-to-br
                from-white/60
                via-white/10
                to-transparent
                opacity-70
              "
                        />

                        {/* Number */}

                        <span
                            className="
                absolute
                right-8
                top-6
                select-none
                text-[90px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-slate-200/50
              "
                        >
                            {step.number}
                        </span>

                        {/* Content */}

                        <div className="relative z-10">

                            {/* Icon */}

                            <div
                                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/60
                  shadow-lg
                  backdrop-blur-xl
                "
                            >
                                <Icon
                                    size={28}
                                    className="text-sky-700"
                                />
                            </div>

                            {/* Title */}

                            <h3
                                className={`
                  mt-8
                  font-bold
                  text-neutral-900
                  ${isLarge
                                        ? "text-3xl"
                                        : "text-2xl"
                                    }
                `}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}

                            <p
                                className="
                  mt-5
                  leading-8
                  text-slate-600
                "
                            >
                                {step.description}
                            </p>
                        </div>

                        {/* Bottom Glow */}

                        <div
                            className="
                absolute
                bottom-0
                left-1/2
                h-24
                w-40
                -translate-x-1/2
                rounded-full
                bg-sky-300/20
                blur-3xl
              "
                        />
                    </article>
                );
            })}
        </div>
    );
}