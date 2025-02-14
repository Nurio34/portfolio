import React from "react";
import { motion } from "framer-motion";
import { useHeroContext } from "../_components/Hero/HeroContext";

export const LogoSvg = () => {
  const { setIsLogoAnimated } = useHeroContext();

  return (
    <svg
      className="scale-50 -translate-x-1/4"
      width="700"
      height="120"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* N */}
      <motion.path
        d="M10 80 Q40 10 40 70 T90 20"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0 }}
      />
      {/* U */}
      <motion.path
        d="M120 20 Q120 60 140 80 T180 20"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      />
      {/* R */}
      <motion.path
        d="M200 80 L200 20"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.path
        d="M200 20 Q240 10 210 40"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 1.4 }}
      />
      <motion.path
        d="M210 40 L250 60"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 1.6 }}
      />
      {/* I */}
      <motion.path
        d="M270 30 L260 70"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 1.8 }}
      />
      {/* O */}
      <motion.path
        d="M300 20 Q320 20 340 40 T330 80 Q300 80 300 60 T290 40 Q280 20 300 20"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 2.4 }}
      />
      {/* 3 */}
      <motion.path
        d="M380 20 Q400 10 420 10 T400 40 Q440 60 420 80 T380 100"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
      />
      {/* 4 */}
      <motion.path
        d="M470 30 L500 80"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 3.6 }}
      />
      <motion.path
        d="M500 80 L540 60"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 3.8 }}
      />
      <motion.path
        d="M520 90 L510 60"
        fill="transparent"
        stroke="white"
        strokeWidth="8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut", delay: 4 }}
        onAnimationComplete={() => {
          setIsLogoAnimated(true);
        }}
      />
    </svg>
  );
};
