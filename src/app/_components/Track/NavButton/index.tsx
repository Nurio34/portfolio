import Link from "next/link";
import { NavButtonType } from "..";
import { useGlobalContext } from "@/app/GlobalContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function NavButton({
  link,
  index,
  total,
}: {
  link: NavButtonType;
  index: number;
  total: number;
}) {
  const { indexState, setIndexState } = useGlobalContext();
  const { start, end } = indexState;
  const isButtonIncluded = end >= index;
  const isLineIncluded = end > index;
  const delay_parameter = 1;

  //! *** line's states ***
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth * 0.02);
    }
  }, []);
  //! *********************

  return (
    <li className="relative">
      <div
        className="relative aspect-square overflow-hidden rounded-full"
        style={{ width: 64 }}
      >
        <div className="absolute top-0 left-0 rounded-full w-full h-full bg-base-content" />
        <motion.div
          className="absolute top-0 left-0 rounded- full w-full h-full bg-primary"
          initial={{ x: "-100%" }}
          animate={{
            x: isButtonIncluded ? "0%" : "-100%",
            transition: {
              duration: delay_parameter,
              delay: isButtonIncluded
                ? delay_parameter + delay_parameter * (-start + index - 1) * 2
                : delay_parameter * (start - index) * 2,
            },
          }}
        />

        <Link
          //href={`#${link.id}`}
          href={"#"}
          className={`absolute aspect-square top-1 left-1 rounded-full text-xs font-extrabold bg-base-100
            flex justify-center items-center
        `}
          style={{ width: 56 }}
          onClick={() =>
            setIndexState((prev) => ({ ...prev, start: prev.end, end: index }))
          }
        >
          {link.id}
        </Link>
      </div>
      {index < total - 1 && (
        <div
          className=" absolute top-1/2 -translate-y-1/2 h-1 bg-white z-50 overflow-hidden"
          style={{
            width,
            right: -width,
          }}
        >
          <motion.div
            className=" absolute top-0 left-0 w-full h-full bg-primary"
            initial={{
              x: "-100%",
            }}
            animate={{
              x: isLineIncluded ? "0%" : "-100%",
              transition: {
                duration: delay_parameter,
                delay: isLineIncluded
                  ? delay_parameter * (-start + index) * 2
                  : //TODO : burda kaldım
                    2 * (delay_parameter * (start - index)),
              },
            }}
          />
        </div>
      )}
    </li>
  );
}
export default NavButton;
