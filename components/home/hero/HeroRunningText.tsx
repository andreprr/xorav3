export default function HeroRunningText() {
  const items = [
    "DIGITAL MAKER EXPERIENCE",
    "PREMIUM WEB DEVELOPMENT",
    "MODERN UI/UX DESIGN",
    "AI AUTOMATION",
    "CUSTOM BUSINESS SYSTEM",
    "NEXT.JS • TYPESCRIPT • THREE.JS",
    "BUILT FOR MODERN BRANDS",
    "CRAFTED WITH PRECISION",
  ];

  return (
    <div
      id="hero-running"
      className="
        absolute
        bottom-0
        left-0
        w-full
        overflow-hidden
        border-y
        border-black/5
        bg-white/65
        backdrop-blur-md
      "
    >
      <div className="animate-marquee flex w-max whitespace-nowrap py-10 sm:py-12">

        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">

            {items.map((item, index) => (
              <div
                key={index}
                className="mx-10 flex items-center sm:mx-14"
              >
                <span
                  className="
                    text-[clamp(1.75rem,3.1vw,3.25rem)]
                    font-bold
                    uppercase
                    tracking-[-0.045em]
                    text-black/85
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    mx-10
                    text-[clamp(1.75rem,3.1vw,3.25rem)]
                    font-extralight
                    text-slate-300
                    sm:mx-14
                  "
                >
                  /
                </span>

              </div>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
}
