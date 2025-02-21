"use client";

import { useEffect, useState } from "react";
import ProjectsStack from "./ProjectsStack";
import "./index.css";
import { useGlobalContext } from "@/app/GlobalContext";

export default function Projects() {
  const { currentComponent } = useGlobalContext();
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    if (currentComponent === 3) {
      setIsAnimationStarted(true);
    }
  }, [currentComponent]);

  return (
    <section
      id="Projects"
      className="Cutout_Section relative w-full h-screen overflow-hidden
        grid grid-rows-[auto,1fr]
      "
      style={
        {
          "--x1": "50%",
          "--y1": "50%",
          "--bg1": "url('/background-2.webp')",
          "--mask1": "url('/mask-images/4.webp')",
          "--size1": "220% 200%",
          "--x2": "80%",
          "--y2": "0%",
          "--bg2": "url('/background-2.webp')",
          "--mask2": "url('/mask-images/3.webp')",
          "--size2": "0",
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsAnimationStarted(true)}
    >
      <h2
        className="text-lg md:text-5xl font-extrabold text-primary font-serif pt-[2vh] px-[4vw]"
        style={{ fontVariant: "small-caps" }}
      >
        Projects
      </h2>
      <ProjectsStack isAnimationStarted={isAnimationStarted} />
    </section>
  );
}
