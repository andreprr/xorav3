import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import HeroRunningText from "./HeroRunningText";
import HeroSideLabels from "./HeroSideLabels";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[max(120svh,72rem)]
        overflow-visible
        pb-[10.5rem]
      "
    >
      <HeroVideo />
      

      <HeroContent />

      <HeroRunningText />

      <HeroSideLabels />
    </section>
  );
}
