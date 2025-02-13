"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CurtainsStateType {
  isOpening: boolean;
  isOpened: boolean;
}

interface HeroContextType {
  curtainsState: CurtainsStateType;
  setCurtainsState: React.Dispatch<React.SetStateAction<CurtainsStateType>>;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [curtainsState, setCurtainsState] = useState<CurtainsStateType>({
    isOpening: true,
    isOpened: true,
  });

  return (
    <HeroContext.Provider value={{ curtainsState, setCurtainsState }}>
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
