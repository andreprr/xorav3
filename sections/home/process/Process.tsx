"use client";

import { useEffect } from "react";

import ProcessBackground from "./ProcessBackground";
import ProcessHeader from "./ProcessHeader";
import ProcessLayout from "./ProcessLayout";
import ProcessHeroCard from "./ProcessHeroCard";
import ProcessStack from "./ProcessStack";
import ProcessStage from "./ProcessStage";

import { initProcessAnimation } from "./processAnimation";

export default function Process() {
  useEffect(() => {
    const cleanup = initProcessAnimation();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="process"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#fcfdff]
      "
    >
      {/* =============================== */}
      {/* Crystal Background */}
      {/* =============================== */}

      <ProcessBackground />

      {/* =============================== */}
      {/* Blue Platform */}
      {/* =============================== */}

      <ProcessStage />

      {/* =============================== */}
      {/* Main Content */}
      {/* =============================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-6
          py-28
        "
      >
        {/* Header */}

        <div id="process-header">
          <ProcessHeader />
        </div>

        {/* Showcase */}

        <ProcessLayout
          hero={<ProcessHeroCard />}
          stack={<ProcessStack />}
        />
      </div>
    </section>
  );
}