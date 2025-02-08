import { motion } from "framer-motion";
import { useHeroContext } from "../../HeroContext";
import Image from "next/image";

function LeftCurtain() {
  const images = [
    "/hero/curtain/front/react.webp",
    "/hero/curtain/front/next.webp",
    "/hero/curtain/front/typescript.webp",
    "/hero/curtain/front/tailwind.webp",
    "/hero/curtain/front/daisy.webp",
    "/hero/curtain/front/redux.webp",
    "/hero/curtain/front/form.webp",
    "/hero/curtain/front/zod.webp",
    "/hero/curtain/front/framer.webp",
  ];

  const { setCurtainsState } = useHeroContext();

  return (
    <motion.div
      className=" relative overflow-hidden"
      exit={{
        x: "-100%",
        borderBottomRightRadius: "100%", // Corrected
        transition: { type: "tween", duration: 4 },
      }}
      onAnimationComplete={() =>
        setCurtainsState((prev) => ({ ...prev, isOpened: true }))
      }
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
                  image.includes("typescript")
                    ? "rounded-md overflow-hidden"
                    : ""
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
export default LeftCurtain;
