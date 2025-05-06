"use client";

import {
  createContext,
  Dispatch,
  JSX,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import useScrollDirection from "./hooks/useScrollDirection";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import ContactMe from "./_components/Contact";
import useMultipleElementsScrollObserver from "./hooks/useMultipleElementsScrollObserver";

export type PartType = {
  name: string;
  component: JSX.Element;
  id: string;
  index: number;
};

export const parts: PartType[] = [
  { name: "hero", component: <Hero />, id: "Hero", index: 0 },
  { name: "about", component: <About />, id: "About", index: 1 },
  { name: "skills", component: <Skills />, id: "Skills", index: 2 },
  { name: "projects", component: <Projects />, id: "Projects", index: 3 },
  { name: "contact", component: <ContactMe />, id: "Contact", index: 4 },
];

export type ThemeType = "dark" | "light";

export type IndexType = {
  start: number;
  end: number;
};

interface GlobalContextType {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  indexState: IndexType;
  setIndexState: Dispatch<SetStateAction<IndexType>>;
  // currentComponent: number;
  // setCurrentComponent: Dispatch<SetStateAction<number>>;
  visibleEl: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //! *** theme state ***
  const [theme, setTheme] = useState<ThemeType>("dark");
  //! *******************

  //! *** track state ***
  const [indexState, setIndexState] = useState<IndexType>({
    start: -1,
    end: 0,
  });
  //! ***

  //! *** observer ***
  const { visibleEl } = useMultipleElementsScrollObserver(parts);
  //! ****************

  //! *** when scroll, detect next section and automaticly scroll that this section takes full screen ***
  // const [currentComponent, setCurrentComponent] = useState(0);
  // const { scrollFirstPosition, scrollLastPosition } = useScrollDirection();

  // useEffect(() => {
  //   if (scrollLastPosition - scrollFirstPosition === 100) {
  //     if (currentComponent < parts.length - 1) {
  //       setCurrentComponent((pre) => pre + 1);
  //     }
  //   }
  //   if (scrollLastPosition - scrollFirstPosition === 0 - 100) {
  //     if (currentComponent > 0) {
  //       setCurrentComponent((pre) => pre - 1);
  //     }
  //   }
  // }, [scrollLastPosition]);

  // useEffect(() => {
  //   const component = document.querySelector(`#${parts[currentComponent].id}`);
  //   if (component) {
  //     component.scrollIntoView({ behavior: "smooth" });
  //     setIndexState((prev) => ({
  //       ...prev,
  //       start: prev.end,
  //       end: currentComponent,
  //     }));
  //   }
  // }, [currentComponent]);

  //! **********************

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        indexState,
        setIndexState,
        visibleEl,
      }}
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
