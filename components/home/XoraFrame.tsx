"use client";

export default function XoraFrame() {
  return (
    <div
      id="xora-frame"
      className="
      pointer-events-none
      fixed
      left-1/2
      top-10
      z-50
      -translate-x-1/2
      -translate-y-6
      opacity-0
      "
    >
      <svg
        width="720"
        height="90"
        viewBox="0 0 720 90"
        fill="none"
      >
        <line
          x1="0"
          y1="45"
          x2="250"
          y2="45"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="1.5"
        />

        <line
          x1="470"
          y1="45"
          x2="720"
          y2="45"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="1.5"
        />

        <path
          d="M330 60 L360 28 L390 60"
          stroke="#60A5FA"
          strokeWidth="2"
          fill="none"
        />

        <text
          x="360"
          y="48"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="700"
          letterSpacing="10"
        >
          XORA
        </text>

      </svg>
    </div>
  );
}