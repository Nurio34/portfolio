"use client";

import { useState } from "react";
import AboutMe from "./AboutMe";
import StatsAndSkills from "./StatsAndSkills";

export type AnimationsType = {
  isAboutMeAnimated: boolean;
  isStatsAnimated: boolean;
  isSkillsAnimated: boolean;
};

function Skills() {
  const [animations, setAnimations] = useState<AnimationsType>({
    isAboutMeAnimated: false,
    isStatsAnimated: false,
    isSkillsAnimated: false,
  });

  return (
    <section
      id="About"
      className="Cutout_Section relative w-full h-screen overflow-hidden
        grid lg:grid-cols-2 items-center 
      "
      style={
        {
          "--x1": "20%",
          "--y1": "-5%",
          "--bg1": "url('/background-1.webp')",
          "--mask1": "url('/mask-images/3.webp')",
          "--size1": "50% 50%",
          "--x2": "20%",
          "--y2": "90%",
          "--bg2": "url('/background-1.webp')",
          "--mask2": "url('/mask-images/1.webp')",
          "--size2": "90% 20%",
        } as React.CSSProperties
      }
    >
      <AboutMe setAnimations={setAnimations} />
      <StatsAndSkills animations={animations} setAnimations={setAnimations} />
    </section>
  );
}
export default Skills;
