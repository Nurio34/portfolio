"use client";

import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import Curtains from "./Curtains";
import { HeroProvider } from "./HeroContext";

function Hero() {
  return (
    <HeroProvider>
      <section className=" w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-x-hidden">
        <HeroSection />
        <HeroImage />
        <Curtains />
      </section>
    </HeroProvider>
  );
}
export default Hero;
