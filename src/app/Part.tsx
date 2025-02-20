import { motion } from "framer-motion";
import { PartType } from "./GlobalContext";

function Part({ part }: { part: PartType }) {
  return (
    <motion.li id={part.id} className="my-1">
      {part.component}
    </motion.li>
  );
}
export default Part;
