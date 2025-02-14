import Image from "next/image";
import { motion } from "framer-motion";
import { CurtainSizeType } from "../../_hooks";

function TechIcon({
  image,
  curtainSize,
}: {
  image: string;
  curtainSize: CurtainSizeType;
}) {
  const initialRondomX = Math.random() * curtainSize.width;
  const initialRondomY = Math.random() * curtainSize.height;
  const rondomX =
    initialRondomX > curtainSize.width - 32
      ? initialRondomX - 32
      : initialRondomX;
  const rondomY =
    initialRondomY > curtainSize.height - 32
      ? initialRondomY - 32
      : initialRondomY;

  return (
    <motion.li
      className={`absolute transition-all w-8 md:w-12 aspect-square
        ${image.includes("typescript") ? "rounded-md overflow-hidden" : ""}    
    `}
      initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      animate={{
        top: rondomY,
        left: rondomX,

        transition: { delay: 0.3 },
      }}
    >
      <Image
        src={image}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt="icon"
        className=" object-contain"
      />
    </motion.li>
  );
}
export default TechIcon;
