"use client";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/assets/home/hero/Hero_bcg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay agar teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Soft Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,.05) 0%, rgba(255,255,255,.02) 40%, rgba(0,0,0,.25) 100%)",
        }}
      />
    </div>
  );
}