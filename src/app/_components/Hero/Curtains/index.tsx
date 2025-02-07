import { motion } from "framer-motion";
import Image from "next/image";

function Curtains() {
  return (
    <div
      className=" absolute w-full h-screen z-10
        grid grid-cols-2
    "
    >
      <motion.figure className=" relative rounded-br-[70%] overflow-hidden">
        <Image src={"/hero/curtain.webp"} fill alt="curtain" />
      </motion.figure>
      <motion.figure className=" relative rounded-bl-[70%] overflow-hidden">
        <Image src={"/hero/curtain.webp"} fill alt="curtain" />
      </motion.figure>
    </div>
  );
}
export default Curtains;
