import Card from "./Card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
};

function ProjectsStack() {
  const projects: ProjectType[] = [
    {
      title: "Smart Shop",
      description:
        "An AI-powered e-commerce platform with personalized recommendations.",
      image: "/projects/smart-shop.webp",
      tech: ["Next.js", "Tailwind", "DaisyUI", "AI"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my skills and projects.",
      image: "/projects/portfolio.webp",
      tech: ["Next.js", "Tailwind", "Framer"],
      link: "#",
    },
    {
      title: "Chat AI Assistant",
      description:
        "A real-time AI-powered chatbot for instant customer support.",
      image: "/projects/chat-ai.webp",
      tech: ["Next.js", "OpenAI", "Socket.io"],
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ul className="relative bg-red-500 Projects_Perspective">
      <button
        type="button"
        className=" absolute top-1/2 -translate-y-1/2"
        onClick={() => {
          setCurrentIndex((prev) => {
            if (prev === 0) return projects.length - 1;
            return prev - 1;
          });
        }}
      >
        <CiCircleChevLeft size={40} />
      </button>
      {projects.map((project, index) => (
        <Card
          key={project.title}
          project={project}
          index={index}
          currentIndex={currentIndex}
        />
      ))}
      <button
        type="button"
        className=" absolute top-1/2 right-0 -translate-y-1/2"
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % projects.length);
        }}
      >
        <CiCircleChevRight size={40} />
      </button>
    </ul>
  );
}
export default ProjectsStack;
