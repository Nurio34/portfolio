import { motion } from "framer-motion";

function Tech({ tech, index }: { tech: string; index: number }) {
  return (
    <motion.li
      className="Tech_Badge relative bg-base-100"
      initial={{ display: "none" }}
      animate={{ display: "block", transition: { delay: index * 1.5 } }}
    >
      {tech}
      <div className="Border_Container absolute">
        <div className="TechBadge_LeftBorder"></div>
        <div className="TechBadge_TopBorder"></div>
        <div className="TechBadge_RightBorder"></div>
        <div className="TechBadge_BottomBorder"></div>
      </div>
      <div className="Text_Hidder_Container">
        <div className="Text_Hidder"></div>
      </div>
    </motion.li>
  );
}
export default Tech;
