import { useEffect, useState } from "react";

export interface CurtainSizeType {
  width: number;
  height: number;
}

export const useCurtainSize = () => {
  const [curtainSize, setCurtainSize] = useState<CurtainSizeType>({
    width: 0,
    height: 0,
  });

  const adjustCurtainSize = () => {
    const halfWidth = window.innerWidth / 2;
    const height = window.innerHeight;
    setCurtainSize({ width: halfWidth, height });
  };

  useEffect(() => {
    adjustCurtainSize();

    window.addEventListener("resize", adjustCurtainSize);

    return () => {
      window.removeEventListener("resize", adjustCurtainSize);
    };
  }, []);

  return { curtainSize };
};
