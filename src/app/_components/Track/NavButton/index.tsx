import Link from "next/link";
import { NavButtonType } from "..";
import { useGlobalContext } from "@/app/GlobalContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";

function NavButton({
  link,
  index,
  total,
}: {
  link: NavButtonType;
  index: number;
  total: number;
}) {
  const { indexState, setIndexState, setCurrentComponent, currentComponent } =
    useGlobalContext();
  const { start, end } = indexState;
  const isButtonIncluded = end >= index;
  const isLineIncluded = end > index;
  const delay_parameter = 0.1;

  //! *** line's states ***
  const [lineWidth, setLineWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => {
      setLineWidth(window.innerWidth * 0.02);

      if (window.innerWidth > 768) {
        setButtonWidth(64);
      } else {
        setButtonWidth(48);
      }
    };

    if (typeof window !== "undefined") {
      handleWidth();

      window.addEventListener("resize", handleWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWidth);
      }
    };
  }, []);
  //! *********************

  useEffect(() => {
    setIndexState((prev) => ({
      ...prev,
      start: prev.end,
      end: currentComponent,
    }));
  }, [currentComponent]);

  return (
    <li className="relative">
      <div
        className="relative aspect-square overflow-hidden rounded-full"
        style={{ width: buttonWidth }}
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
          href={`#${link.id}`}
          className={`absolute aspect-square top-1 left-1 rounded-full text-[10px] md:text-xs font-normal md:font-extrabold bg-base-100
            flex justify-center items-center
        `}
          style={{ width: buttonWidth - 8 }}
          onClick={() => {
            track("Button Clicked", { buttonId: `Button-${link.id}` });
          }}
        >
          {link.id}
        </Link>
      </div>
      {index < total - 1 && (
        <div
          className=" absolute top-1/2 -translate-y-1/2 h-1 bg-base-content z-50 overflow-hidden"
          style={{
            width: lineWidth,
            right: -lineWidth,
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
                  : delay_parameter + delay_parameter * (start - index - 1) * 2,
              },
            }}
          />
        </div>
      )}
    </li>
  );
}
export default NavButton;
