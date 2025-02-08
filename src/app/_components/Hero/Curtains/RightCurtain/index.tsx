import { motion } from "framer-motion";
import Image from "next/image";

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

  return (
    <motion.div
      className=" relative overflow-hidden"
      exit={{
        x: "100%",
        borderBottomLeftRadius: "100%", // Corrected
        transition: { type: "tween", duration: 4 },
      }}
    >
      <figure className="relative w-full h-full overflow-hidden">
        <Image
          src={"/hero/curtain/curtain.webp"}
          fill
          alt="curtain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>
      <ul
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            flex flex-wrap justify-center gap-x-[2vw] md:gap-x-[2vw] gap-y-[2vh] md:gap-y-[4vh]
        "
      >
        {images.map((image) => (
          <li
            key={image}
            className={`relative w-5 md:w-12 aspect-square
                ${
                  image.includes("mongo") ? "rounded-full overflow-hidden" : ""
                }    
            `}
          >
            <Image
              src={image}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="icon"
              className=" object-contain"
            />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
export default RightCurtain;
