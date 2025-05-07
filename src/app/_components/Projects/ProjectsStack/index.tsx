import Card from "./Card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { ProjectType } from "..";

export type PerspectiveOriginType = {
  x: number;
  y: number;
};

function ProjectsStack({
  isAnimationStarted,
  projects,
}: {
  isAnimationStarted: boolean;
  projects: ProjectType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.ul className=" flex justify-center items-center">
      <button
        type="button"
        className="Contrast absolute left-0 md:left-[5%] lg:left-[20%] z-20"
        onClick={() => {
          setCurrentIndex((prev) => {
            if (prev === 0) return projects.length - 1;
            return prev - 1;
          });
          track("Button Clicked", { buttonId: `Button-Previous_Project` });
        }}
      >
        <CiCircleChevLeft className="text-5xl lg:text-8xl" />
      </button>
      <div className="Projects_Perspective z-10 w-[417.25px] -translate-x-1/4 aspect-square">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            project={project}
            index={index}
            total={projects.length}
            currentIndex={currentIndex}
            isAnimationStarted={isAnimationStarted}
          />
        ))}
      </div>
      <button
        type="button"
        className="Contrast absolute right-0 md:right-[5%] lg:right-[20%] z-20"
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % projects.length);
          track("Button Clicked", { buttonId: `Button-Next_Project` });
        }}
      >
        <CiCircleChevRight className="text-5xl lg:text-8xl" />
      </button>
    </motion.ul>
  );
}
export default ProjectsStack;
