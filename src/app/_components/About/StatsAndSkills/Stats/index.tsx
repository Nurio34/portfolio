import { FaLaptopCode, FaProjectDiagram, FaCodeBranch } from "react-icons/fa";
import { AnimationsType } from "../..";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

function Stats({
  animations,
  setAnimations,
}: {
  animations: AnimationsType;
  setAnimations: Dispatch<SetStateAction<AnimationsType>>;
}) {
  const stats = [
    {
      amount: "2+",
      info: "Years of Coding",
      detail:
        "I started coding in November 2022 and continuously improve my skills.",
      icon: <FaLaptopCode className="text-primary md:text-2xl" />,
    },
    {
      amount: "3+",
      info: "Major Projects Completed",
      detail:
        "I develop full-stack applications integrating modern technologies.",
      icon: <FaProjectDiagram className="text-secondary md:text-2xl" />,
    },
    {
      amount: "50+",
      info: "Mini Projects & Experiments",
      detail:
        "I build small projects to explore new technologies and sharpen my skills.",
      icon: <FaCodeBranch className="text-accent md:text-2xl" />,
    },
  ];

  return (
    <div className="space-y-1 md:space-y-[2vh]">
      <h2
        className=" text-lg md:text-4xl font-extrabold text-primary font-serif"
        style={{ fontVariant: "small-caps" }}
      >
        Experience
      </h2>
      <motion.ul
        className=" space-y-[2vh]"
        initial={{ opacity: 0, x: "-25%" }}
        whileInView={
          animations.isAboutMeAnimated ? { opacity: 1, x: "0%" } : {}
        }
        transition={{ duration: 0.6, type: "tween" }}
      >
        {stats.map((stat, index) => (
          <motion.li
            key={stat.info}
            className="About_Stat_Card py-[1vh] px-[1vw] rounded-lg max-w-72 space-y-1 md:space-y-[1vh] shadow-md shadow-base-content"
            initial={{ opacity: 0, x: "-25%" }}
            whileInView={
              animations.isAboutMeAnimated
                ? {
                    opacity: 1,
                    x: "0%",
                    transition: {
                      duration: 1,
                      delay: 0.3 * index,
                    },
                  }
                : {}
            }
            onAnimationComplete={() =>
              setAnimations((prev) => ({ ...prev, isStatsAnimated: true }))
            }
          >
            <p className=" float-right">{stat.icon}</p>
            <span className="md:text-2xl text-primary font-bold">
              {stat.amount}
            </span>
            <p className="text-sm md:text-lg font-semibold">{stat.info}</p>
            <p className="text-xs md:text-md line-clamp-2">{stat.detail}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Stats;
