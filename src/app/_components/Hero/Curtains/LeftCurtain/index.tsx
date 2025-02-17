import { motion } from "framer-motion";
import { useHeroContext } from "../../HeroContext";
import Image from "next/image";

function LeftCurtain() {
  const { setCurtainsState } = useHeroContext();

  return (
    <motion.div
      className="relative overflow-hidden"
      exit={{
        x: "-100%",
        borderBottomRightRadius: "100%",
        transition: { type: "tween", duration: 4 },
      }}
      onAnimationComplete={() =>
        setCurtainsState((prev) => ({ ...prev, isOpened: true }))
      }
    >
      <div className="w-full h-full relative">
        <figure className="absolute top-0 left-0  w-full h-full overflow-hidden">
          <Image
            src={"/hero/curtain/curtain.webp"}
            fill
            alt="curtain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </figure>

        <div className="w-full h-full relative">
          -
          <div
            className="w-4/6 aspect-square
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          "
          >
            <figure className="w-full h-full">
              <Image
                src={"/hero/curtain/front/react-big.webp"}
                fill
                alt="react logo"
                className="object-contain"
              />
            </figure>
            <figure
              className="w-1/6 aspect-square 
                absolute bottom-0 right-0
              "
            >
              <Image
                src={"/hero/curtain/front/next.webp"}
                fill
                alt="next logo"
                className="object-contain"
              />
            </figure>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default LeftCurtain;
