import { motion } from "framer-motion";
import Image from "next/image";
import { useHeroContext } from "../../HeroContext";
import TechIcon from "../TechIcon";

function RightCurtain() {
  const images = [
    "/hero/curtain/back/node.webp",
    "/hero/curtain/back/express.webp",
    "/hero/curtain/back/mongo.webp",
    "/hero/curtain/back/mongoose.webp",
    "/hero/curtain/back/postgre.webp",
    "/hero/curtain/back/prisma.webp",
    "/hero/curtain/back/firebase.webp",
    "/hero/curtain/back/socket.webp",
    "/hero/curtain/back/cloudinary.webp",
    "/hero/curtain/back/clerk.webp",
    "/hero/curtain/back/gemini.webp",
    "/hero/curtain/back/openai.webp",
  ];

  const { curtainSize } = useHeroContext();

  return (
    <motion.div
      className="relative overflow-hidden
        grid 
      "
      exit={{
        x: "100%",
        borderBottomLeftRadius: "100%", // Corrected
        transition: { type: "tween", duration: 4 },
      }}
    >
      <figure className="col-start-1 col-end-2 row-start-1 row-end-2 relative  w-full h-full overflow-hidden">
        <Image
          src={"/hero/curtain/curtain.webp"}
          fill
          alt="curtain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>
      <ul className="col-start-1 col-end-2 row-start-1 row-end-2">
        {images.map((image) => (
          <TechIcon key={image} image={image} curtainSize={curtainSize} />
        ))}
      </ul>
    </motion.div>
  );
}
export default RightCurtain;
