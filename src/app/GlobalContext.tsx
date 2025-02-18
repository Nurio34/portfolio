"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type ThemeType = "dark" | "light";

export type IndexType = {
  start: number;
  end: number;
};

interface GlobalContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  indexState: IndexType;
  setIndexState: React.Dispatch<React.SetStateAction<IndexType>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  //! *** track state ***
  const [indexState, setIndexState] = useState<IndexType>({
    start: -1,
    end: 0,
  });

  //! ***

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, indexState, setIndexState }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useCountContext must be used within a Provider");
  return context;
};
