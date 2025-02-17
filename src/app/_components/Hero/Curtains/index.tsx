import { AnimatePresence } from "framer-motion";
import { useHeroContext } from "../HeroContext";
import { useEffect, useRef } from "react";
import LeftCurtain from "./LeftCurtain";
import RightCurtain from "./RightCurtain";

function Curtains() {
  const { curtainsState, setCurtainsState } = useHeroContext();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  //! *** after 2 seconds, close curtains ***
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurtainsState((prev) => ({ ...prev, isOpening: true }));

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  //! ***

  //! *** make body unscrollable while curtains open ***
  useEffect(() => {
    if (curtainsState.isOpened) {
      document.body.style.overflow = "auto";
    }
  }, [curtainsState.isOpened]);
  //! ***

  return (
    <>
      {!curtainsState.isOpened && (
        <div
          className=" absolute w-full h-screen z-50
        grid grid-cols-2
    "
        >
          <AnimatePresence>
            {!curtainsState.isOpening && <LeftCurtain key={"curtain1"} />}
            {!curtainsState.isOpening && <RightCurtain key={"curtain2"} />}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
export default Curtains;
