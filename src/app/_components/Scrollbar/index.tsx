"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function Scrollbar() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 right-0 w-1 md:w-2 h-screen bg-base-content z-10">
      <motion.div
        className="w-full bg-gradient-to-b from-accent via-secondary to-warning"
        style={{ height }}
      />
    </div>
  );
}

export default Scrollbar;
