import { motion } from "framer-motion";
import Image from "next/image";
import { useHeroContext } from "../../HeroContext";

function RightCurtain() {
  const { setCurtainsState } = useHeroContext();
  return (
    <motion.div
      className="relative overflow-hidden"
      exit={{
        x: "100%",
        borderBottomLeftRadius: "100%",
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
            <figure className="relative w-full h-full">
              <Image
                src={"/hero/curtain/back/node-big.webp"}
                fill
                alt="react logo"
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
            <figure
              className="w-1/6 aspect-square 
                absolute bottom-0 right-0 bg-white rounded-full overflow-hidden
              "
            >
              <Image
                src={"/hero/curtain/back/express.webp"}
                fill
                alt="next logo"
                className="object-contain border-2 border-base-100 p-2 rounded-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default RightCurtain;
