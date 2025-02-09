"use client";
import { Dispatch, SetStateAction } from "react";
import Skills from "./Skills";
import Stats from "./Stats";
import { AnimationsType } from "..";

function StatsAndSkills({
  animations,
  setAnimations,
}: {
  animations: AnimationsType;
  setAnimations: Dispatch<SetStateAction<AnimationsType>>;
}) {
  return (
    <div className="grid grid-cols-2 items-center px-[4vw] gap-x-[4vw] md:gap-x-0">
      <Stats animations={animations} setAnimations={setAnimations} />
      <Skills animations={animations} />
    </div>
  );
}

export default StatsAndSkills;
