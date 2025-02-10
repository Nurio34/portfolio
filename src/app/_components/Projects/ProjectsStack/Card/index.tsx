import { motion } from "framer-motion";
import { ProjectType } from "..";

function Card({
  project,
  index,
  currentIndex,
}: {
  project: ProjectType;
  index: number;
  currentIndex: number;
}) {
  const patam = index - currentIndex;

  console.log(patam);

  return (
    <motion.li
      className={`Projects_Card absolute top-1/2 left-1/2 w-1/2 aspect-square
        ${
          index === 0
            ? "bg-primary"
            : index === 1
            ? "bg-secondary"
            : "bg-accent"
        }     
    `}
      style={{ translate: "-50% -50%", translateZ: patam * 100, rotateY: 60 }}
    >
      <h2>{project.title}</h2>
    </motion.li>
  );
}
export default Card;
