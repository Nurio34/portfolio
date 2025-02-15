"use client";

import { useEffect, useState } from "react";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
// import Footer from "./_components/Footer";
import Scrollbar from "./_components/Scrollbar";
import useScrollDirection from "./hooks/useScrollDirection";
import ThemeHandler from "./_components/ThemeHandler";
import { GlobalContextProvider } from "./GlobalContext";
import Chatbot from "./_components/Chatbot";

export default function Home() {
  const parts = [
    { name: "hero", component: <Hero />, id: "Hero" },
    { name: "about", component: <About />, id: "About" },
    { name: "skills", component: <Skills />, id: "Skills" },
    { name: "projects", component: <Projects />, id: "Projects" },
    { name: "contact", component: <Contact />, id: "Contact" },
    { name: "chatbot", component: <Chatbot />, id: "Chatbot" },
    //  { name: "footer", component: <Footer />, id: "Footer" },
  ];

  const [currentComponent, setCurrentComponent] = useState(0);
  const { scrollFirstPosition, scrollLastPosition } = useScrollDirection();

  useEffect(() => {
    if (scrollLastPosition - scrollFirstPosition === 100) {
      if (currentComponent < parts.length - 1) {
        setCurrentComponent((pre) => pre + 1);
      }
    }
    if (scrollLastPosition - scrollFirstPosition === 0 - 100) {
      if (currentComponent > 0) {
        setCurrentComponent((pre) => pre - 1);
      }
    }
  }, [scrollLastPosition]);

  useEffect(() => {
    const component = document.querySelector(`#${parts[currentComponent].id}`);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentComponent]);

  return (
    <GlobalContextProvider>
      <main>
        <ThemeHandler />
        <Scrollbar />
        <ul>
          {parts.map((part) => (
            <li key={part.name} id={part.id}>
              {part.component}
            </li>
          ))}
        </ul>
      </main>
    </GlobalContextProvider>
  );
}
