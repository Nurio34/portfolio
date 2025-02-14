import { motion } from "framer-motion";
import { useHeroContext } from "../../HeroContext";
import Image from "next/image";
import TechIcon from "../TechIcon";

function LeftCurtain() {
  const images = [
    "/hero/curtain/front/react.webp",
    "/hero/curtain/front/next.webp",
    "/hero/curtain/front/typescript.webp",
    "/hero/curtain/front/tailwind.webp",
    "/hero/curtain/front/daisy.webp",
    "/hero/curtain/front/redux.webp",
    "/hero/curtain/front/tanstack.webp",
    "/hero/curtain/front/form.webp",
    "/hero/curtain/front/zod.webp",
    "/hero/curtain/front/framer.webp",
  ];

  const { setCurtainsState, curtainSize } = useHeroContext();

  return (
    <motion.div
      className="relative overflow-hidden
        grid 
      "
      exit={{
        x: "-100%",
        borderBottomRightRadius: "100%", // Corrected
        transition: { type: "tween", duration: 4 },
      }}
      onAnimationComplete={() =>
        setCurtainsState((prev) => ({ ...prev, isOpened: true }))
      }
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
export default LeftCurtain;
