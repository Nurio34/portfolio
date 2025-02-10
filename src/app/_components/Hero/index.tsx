"use client";

import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import Curtains from "./Curtains";
import { HeroProvider } from "./HeroContext";

function Hero() {
  return (
    <HeroProvider>
      <section
        className="Cutout_Section relative w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-x-hidden"
        style={
          {
            "--x1": "10%",
            "--y1": "-30%",
            "--bg1": "url('/background-1.webp')",
            "--mask1": "url('/mask-images/1.webp')",
            "--size1": "30% 100%",
            "--x2": "104%",
            "--y2": "200%",
            "--bg2": "url('/background-2.webp')",
            "--mask2": "url('/mask-images/4.webp')",
            "--size2": "80%",
          } as React.CSSProperties
        }
      >
        <HeroSection />
        <HeroImage />
        <Curtains />
      </section>
    </HeroProvider>
  );
}
export default Hero;
