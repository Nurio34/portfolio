"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(1);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};

export const useCountContext = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useCountContext must be used within a Provider");
  return context;
};
