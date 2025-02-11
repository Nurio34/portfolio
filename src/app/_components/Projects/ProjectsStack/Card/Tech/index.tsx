import { motion } from "framer-motion";
import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { TechType } from "../..";
import Image from "next/image";
import { useGlobalContext } from "@/app/GlobalContext";

function Tech({
  tech,
  index,
  totalTechs,
  areTechsRevealed,
  setAreTechsRevealed,
  timeoutRef,
}: {
  tech: TechType;
  index: number;
  totalTechs: number;
  areTechsRevealed: boolean;
  setAreTechsRevealed: Dispatch<SetStateAction<boolean>>;
  timeoutRef: RefObject<NodeJS.Timeout | null>;
}) {
  const { theme } = useGlobalContext();
  const borderColor = theme === "dark" ? "rgb(255,255,255)" : "rgb(29,35,42)";
  const backgroundColor =
    theme === "light" ? "rgb(255,255,255)" : "rgb(29,35,42)";
  function revealButtons() {
    timeoutRef.current = setTimeout(() => {
      setAreTechsRevealed(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }, 1500);
  }

  return (
    <motion.li
      className={`Tech_Badge relative bg-base-100 transition-all
        ${areTechsRevealed ? "grow max-w-[60%]" : ""}  
      `}
      initial={{ display: "none" }}
      animate={{ display: "block", transition: { delay: index * 1.5 } }}
      onAnimationComplete={() => {
        if (index === totalTechs - 1) {
          revealButtons();
        }
      }}
    >
      <div className="flex items-center gap-x-[0.5vw]">
        <figure className="relative w-3 aspect-square">
          <Image src={tech.image} fill alt={tech.name} />
        </figure>
        <p>{tech.name}</p>
      </div>
      <div
        className="Border_Container absolute"
        style={
          {
            "--bc": borderColor,
          } as React.CSSProperties
        }
      >
        <div className="TechBadge_LeftBorder"></div>
        <div className="TechBadge_TopBorder"></div>
        <div className="TechBadge_RightBorder"></div>
        <div className="TechBadge_BottomBorder"></div>
      </div>
      <div
        className="Text_Hidder_Container"
        style={
          {
            "--bg": backgroundColor,
          } as React.CSSProperties
        }
      >
        <div className="Text_Hidder"></div>
      </div>
    </motion.li>
  );
}
export default Tech;
