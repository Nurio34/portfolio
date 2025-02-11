import Card from "./Card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link: string;
};

function ProjectsStack() {
  const projects: ProjectType[] = [
    {
      title: "Smart Shop",
      description: "An AI-powered ",
      image: "/projects/smart_shop.webp",
      techs: [
        "Next.js",
        "Tailwind",
        "DaisyUI",
        "Framer-Motion",
        "Redux-Toolkit",
        "Next-Cloudinary",
        "ApexCharts",
        "PostgreSQL",
        "Prisma",
        "Cloudinary",
        "AI",
      ],
      link: "#",
    },
    {
      title: "Whatsup",
      description:
        "My personal portfolio showcasing my skills and projects.An AI-powered e-commerce platform with personalized recommendations.",
      image: "/projects/whatsup.webp",
      techs: [
        "React",
        "Tailwind",
        "DaisyUI",
        "Hot-Toast",
        "React-Player",
        "Framer-Motion",
        "Cloudinary",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      link: "#",
    },
    {
      title: "LMS Learn",
      description:
        "A real-time AI-powered chatbot for instant customer support.An AI-powered e-commerce platform with personalized recommendations.",
      image: "/projects/lms_learn.webp",
      techs: [
        "React",
        "Tailwind",
        "DaisyUI",
        "Framer-Motion",
        "Cloudinary",
        "Express",
        "MongoDB",
        "Mongoose",
        "Iyzipay",
      ],
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ul className="relative flex justify-center items-center">
      <button
        type="button"
        className="absolute left-0"
        onClick={() => {
          setCurrentIndex((prev) => {
            if (prev === 0) return projects.length - 1;
            return prev - 1;
          });
        }}
      >
        <CiCircleChevLeft size={40} />
      </button>
      <div className="Projects_Perspective relative w-1/2 aspect-square">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            project={project}
            index={index}
            total={projects.length}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <button
        type="button"
        className=" absolute right-0"
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
