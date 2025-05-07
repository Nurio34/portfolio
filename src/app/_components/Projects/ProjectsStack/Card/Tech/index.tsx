import { motion } from "framer-motion";
import { Dispatch, RefObject, SetStateAction } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/GlobalContext";
import { TechType } from "../../..";

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
    }, 1000);
  }

  return (
    <motion.li
      className={`Tech_Badge relative bg-base-100 transition-all
        ${areTechsRevealed ? "grow max-w-[30%]" : ""}  
      `}
      initial={{ display: "none" }}
      animate={{ display: "block", transition: { delay: index * 0.8 } }}
      onAnimationComplete={() => {
        if (index === totalTechs - 1) {
          revealButtons();
        }
      }}
    >
      <div className="flex items-center gap-x-[0.5vw]">
        <figure className="relative w-5 aspect-square">
          <Image
            src={tech.image}
            fill
            alt={tech.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
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
