"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CurtainSizeType, useCurtainSize } from "./_hooks";

interface CurtainsStateType {
  isOpening: boolean;
  isOpened: boolean;
}

interface HeroContextType {
  curtainsState: CurtainsStateType;
  setCurtainsState: React.Dispatch<React.SetStateAction<CurtainsStateType>>;
  curtainSize: CurtainSizeType;
  isLogoAnimated: boolean;
  setIsLogoAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [curtainsState, setCurtainsState] = useState<CurtainsStateType>({
    isOpening: false,
    isOpened: false,
  });

  const { curtainSize } = useCurtainSize();
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  return (
    <HeroContext.Provider
      value={{
        curtainsState,
        setCurtainsState,
        curtainSize,
        isLogoAnimated,
        setIsLogoAnimated,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => {
  const context = useContext(HeroContext);
  if (!context)
    throw new Error("useCountContext must be used within a Provider");
  return context;
};
