"use client";

import HeroSection from "./HeroSection";
import HeroImage from "./HeroImage";
import Curtains from "./Curtains";
import { useState } from "react";

function Hero() {
  const [isCurtainsOpened, setIsCurtainsOpened] = useState(false);

  return (
    <section className=" relative w-full h-screen grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <HeroSection />
      <HeroImage />
      <Curtains />
    </section>
  );
}
export default Hero;
