import { motion } from "framer-motion";
import { useState } from "react";

function SourceButtons({ areTechsRevealed }: { areTechsRevealed: boolean }) {
  const [areButtonsRevealed, setAreButtonsRevealed] = useState(false);

  return (
    <div className="flex justify-between  py-[1vh] px-[1vw]">
      <motion.button
        type="button"
        className="relative overflow-hidden  btn btn-sm btn-primary"
        initial={{ opacity: 0, y: "25%" }}
        animate={{
          opacity: areTechsRevealed ? 1 : undefined,
          y: areTechsRevealed ? "0%" : undefined,
        }}
      >
        Button
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
      </motion.button>
      <motion.button
        type="button"
        className="relative overflow-hidden btn btn-sm btn-secondary"
        initial={{ opacity: 0, y: "25%" }}
        animate={{
          opacity: areTechsRevealed ? 1 : undefined,
          y: areTechsRevealed ? "0%" : undefined,
          transition: { delay: 0.3 },
        }}
        onAnimationComplete={() => setAreButtonsRevealed(true)}
      >
        Button
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
      </motion.button>
    </div>
  );
}
export default SourceButtons;
