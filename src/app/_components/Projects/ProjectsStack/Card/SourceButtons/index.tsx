import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { ProjectType } from "../../..";

function SourceButtons({
  areTechsRevealed,
  project,
}: {
  areTechsRevealed: boolean;
  project: ProjectType;
}) {
  const [areButtonsRevealed, setAreButtonsRevealed] = useState(false);

  return (
    <div className="flex justify-between gap-x-[2vw] py-[1vh] px-[1vw] ">
      <motion.div
        className="grow overflow-hidden"
        initial={{ opacity: 0, y: "25%" }}
        animate={{
          opacity: areTechsRevealed ? 1 : undefined,
          y: areTechsRevealed ? "0%" : undefined,
        }}
      >
        <Link
          href={project.github}
          target="_blank"
          className=" w-full btn btn-sm btn-primary
            flex items-center
          "
          onClick={(e) => {
            e.stopPropagation();
            track("Button Clicked", {
              buttonId: `Button-Project_${project.title}_Github`,
            });
          }}
        >
          <figure className="relative w-5 aspect-square rounded-md overflow-hidden">
            <Image
              src="/about/tools/github.webp"
              fill
              alt="github"
              className="object-cover"
            />
          </figure>
          Source
        </Link>
        <motion.div
          className=" w-full h-full bg-white"
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
        className="grow overflow-hidden"
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
          className="w-full relative overflow-hidden btn btn-sm btn-secondary
            flex items-center
          "
          onClick={(e) => {
            e.stopPropagation();
            track("Button Clicked", {
              buttonId: `Button-Project_${project.title}_LiveApp`,
            });
          }}
        >
          <figure className="relative w-5 aspect-square rounded-md overflow-hidden">
            <Image
              src={project.image}
              fill
              alt="github"
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
          Live App
        </Link>
        <motion.div
          className="w-full h-full bg-white"
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
