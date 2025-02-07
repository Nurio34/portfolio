import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  const parts = [
    { name: "hero", component: <Hero /> },
    { name: "about", component: <About /> },
    { name: "skills", component: <Skills /> },
    { name: "projects", component: <Projects /> },
    { name: "contact", component: <Contact /> },
    { name: "footer", component: <Footer /> },
  ];

  return (
    <main>
      <ul className=" ">
        {parts.map((part) => (
          <li key={part.name}>{part.component}</li>
        ))}
      </ul>
    </main>
  );
}
