"use client";

import { useEffect, useState } from "react";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Scrollbar from "./_components/Scrollbar";
import Skills from "./_components/Skills";
import useScrollDirection from "./hooks/useScrollDirection";

export default function Home() {
  const parts = [
    { name: "hero", component: <Hero />, id: "Hero" },
    { name: "about", component: <About />, id: "About" },
    { name: "skills", component: <Skills />, id: "Skills" },
    { name: "projects", component: <Projects />, id: "Projects" },
    { name: "contact", component: <Contact />, id: "Contact" },
    { name: "footer", component: <Footer />, id: "Footer" },
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
    <main>
      <Scrollbar />
      <ul>
        {parts.map((part) => (
          <li key={part.name} id={part.id}>
            {part.component}
          </li>
        ))}
      </ul>
    </main>
  );
}
