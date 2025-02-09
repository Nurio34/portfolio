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
      className=" w-full h-screen
        grid md:grid-cols-2 items-center
      "
    >
      <AboutMe setAnimations={setAnimations} />
      <StatsAndSkills animations={animations} setAnimations={setAnimations} />
    </section>
  );
}
export default Skills;
