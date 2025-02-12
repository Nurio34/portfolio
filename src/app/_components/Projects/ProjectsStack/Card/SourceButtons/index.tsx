import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectType } from "../..";
import Link from "next/link";

function SourceButtons({
  areTechsRevealed,
  project,
}: {
  areTechsRevealed: boolean;
  project: ProjectType;
}) {
  const [areButtonsRevealed, setAreButtonsRevealed] = useState(false);

  return (
    <div className="flex justify-between gap-x-[2vw]  py-[1vh] px-[1vw]">
      <motion.div
        className="grow"
        initial={{ opacity: 0, y: "25%" }}
        animate={{
          opacity: areTechsRevealed ? 1 : undefined,
          y: areTechsRevealed ? "0%" : undefined,
        }}
      >
        <Link
          href={project.github}
          target="_blank"
          className=" w-full relative overflow-hidden  btn btn-sm btn-primary"
        >
          Github
        </Link>
        <motion.div
          className=" absolute w-full h-full bg-white"
          initial={{ rotate: -45, translate: "-100%" }}
          animate={{
            translateX: areButtonsRevealed ? "200%" : undefined,
            opacity: 0.75,
            filter: "blur(10px)",
            transition: { duration: 1 },
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="grow"
        initial={{ opacity: 0, y: "25%" }}
        animate={{
          opacity: areTechsRevealed ? 1 : undefined,
          y: areTechsRevealed ? "0%" : undefined,
          transition: { delay: 0.3 },
        }}
        onAnimationComplete={() => setAreButtonsRevealed(true)}
      >
        <Link
          href={project.liveLink}
          target="_blank"
          className="w-full relative overflow-hidden btn btn-sm btn-secondary"
        >
          Live App
        </Link>
        <motion.div
          className=" absolute w-full h-full bg-white"
          initial={{ rotate: -45, translate: "-100%" }}
          animate={{
            translateX: areButtonsRevealed ? "200%" : undefined,
            opacity: 0.75,
            filter: "blur(10px)",
            transition: { duration: 1 },
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
export default SourceButtons;
