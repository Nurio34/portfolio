import Image from "next/image";
import "./index.css";
import { AnimationsType } from "../..";
import { motion } from "framer-motion";

function Techs({ animations }: { animations: AnimationsType }) {
  const techs = {
    front: [
      {
        name: "react",
        src: "/hero/curtain/front/react.webp",
      },
      {
        name: "next",
        src: "/hero/curtain/front/next.webp",
      },
      {
        name: "typescript",
        src: "/hero/curtain/front/typescript.webp",
      },
      {
        name: "tailwind",
        src: "/hero/curtain/front/tailwind.webp",
      },
      {
        name: "daisy",
        src: "/hero/curtain/front/daisy.webp",
      },
      {
        name: "redux",
        src: "/hero/curtain/front/redux.webp",
      },
      {
        name: "tanstack",
        src: "/hero/curtain/front/tanstack.webp",
      },
      {
        name: "form",
        src: "/hero/curtain/front/form.webp",
      },
      {
        name: "zod",
        src: "/hero/curtain/front/zod.webp",
      },
      {
        name: "framer",
        src: "/hero/curtain/front/framer.webp",
      },
    ],
    back: [
      {
        name: "node",
        src: "/hero/curtain/back/node.webp",
      },
      {
        name: "express",
        src: "/hero/curtain/back/express.webp",
      },
      {
        name: "mongo",
        src: "/hero/curtain/back/mongo.webp",
      },
      {
        name: "mongoose",
        src: "/hero/curtain/back/mongoose.webp",
      },
      {
        name: "postgre",
        src: "/hero/curtain/back/postgre.webp",
      },
      {
        name: "prisma",
        src: "/hero/curtain/back/prisma.webp",
      },
      {
        name: "firebase",
        src: "/hero/curtain/back/firebase.webp",
      },
      {
        name: "socket",
        src: "/hero/curtain/back/socket.webp",
      },
      {
        name: "cloudinary",
        src: "/hero/curtain/back/cloudinary.webp",
      },
      {
        name: "clerk",
        src: "/hero/curtain/back/clerk.webp",
      },
      {
        name: "gemini",
        src: "/hero/curtain/back/gemini.webp",
      },
      {
        name: "openai",
        src: "/hero/curtain/back/openai.webp",
      },
    ],
    tools: [
      {
        name: "vscode",
        src: "/about/tools/vscode.webp",
      },
      {
        name: "cursor",
        src: "/about/tools/cursor.webp",
      },
      {
        name: "git",
        src: "/about/tools/git.webp",
      },
      {
        name: "github",
        src: "/about/tools/github.webp",
      },
      {
        name: "photopea",
        src: "/about/tools/photopea.webp",
      },
      {
        name: "postman",
        src: "/about/tools/postman.webp",
      },
      {
        name: "compass",
        src: "/about/tools/compass.webp",
      },
      {
        name: "vercel",
        src: "/about/tools/vercel.webp",
      },
      {
        name: "render",
        src: "/about/tools/render.webp",
      },
      {
        name: "bunny",
        src: "/about/tools/bunny.webp",
      },
    ],
  };

  return (
    <div className="space-y-1 md:space-y-[2vh]">
      <motion.h2
        className="text-lg md:text-4xl font-extrabold text-primary font-serif"
        style={{ fontVariant: "small-caps" }}
        initial={{ opacity: 0, x: "25%" }}
        whileInView={
          animations.isAboutMeAnimated ? { opacity: 1, x: "0%" } : {}
        }
        transition={{ duration: 0.6, type: "tween" }}
      >
        Techs
      </motion.h2>
      <motion.ul
        className="grid grid-rows-3 md:grid-rows-none gap-y-4 md:gap-y-[4vh] w-full"
        initial={{ opacity: 0, x: "25%" }}
        whileInView={animations.isStatsAnimated ? { opacity: 1, x: "0%" } : {}}
        transition={{ duration: 0.6, type: "tween" }}
      >
        {Object.entries(techs).map(([title, array], index) => (
          <motion.li
            key={title}
            className="self-stretch About_Card_Container bg-base-100 text-base py-[1vh] px-[1vw]"
            style={{ "--index": index } as React.CSSProperties}
            initial={{ opacity: 0, x: "25%" }}
            whileInView={
              animations.isStatsAnimated
                ? {
                    opacity: 1,
                    x: "0%",
                    transition: { duration: 1, delay: 0.3 * index },
                  }
                : {}
            }
          >
            <ul className="flex flex-wrap justify-center gap-x-[1vw] gap-y-[1vh]">
              {array.map((tech) => (
                <li key={tech.name} className="flex gap-x-1 items-center ">
                  <figure className=" relative w-7 aspect-square">
                    <Image
                      src={tech.src}
                      fill
                      alt={tech.name}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </figure>
                  <p className=" capitalize font-semibold hidden md:block">
                    {tech.name}
                  </p>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
export default Techs;
