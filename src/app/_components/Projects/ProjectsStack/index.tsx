import Card from "./Card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

export type TechType = {
  name: string;
  image: string;
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  techs: TechType[];
  link: string;
};

function ProjectsStack() {
  const projects: ProjectType[] = [
    {
      title: "Smart Shop",
      description: "An AI-powered ",
      image: "/projects/smart_shop.webp",
      techs: [
        {
          name: "Next.js",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Tailwind",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "DaisyUI",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Framer-Motion",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Redux-Toolkit",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Next-Cloudinary",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "ApexCharts",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "PostgreSQL",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Prisma",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "AI",
          image: "/hero/curtain/front/react.webp",
        },
      ],

      link: "#",
    },
    {
      title: "Whatsup",
      description:
        "My personal portfolio showcasing my skills and projects.An AI-powered e-commerce platform with personalized recommendations.",
      image: "/projects/whatsup.webp",
      techs: [
        {
          name: "React",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Tailwind",
          image: "/hero/curtain/front/tailwind.webp",
        },
        {
          name: "DaisyUI",
          image: "/hero/curtain/front/daisy.webp",
        },
        {
          name: "Reducx-Toolkit",
          image: "/hero/curtain/front/redux.webp",
        },
        {
          name: "Hot-Toast",
          image: "/hero/curtain/front/react-hot-toast.webp",
        },
        {
          name: "Framer-Motion",
          image: "/hero/curtain/front/framer.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/front/cloudinary.webp",
        },
        {
          name: "Express",
          image: "/hero/curtain/front/express.webp",
        },
        {
          name: "MongoDB",
          image: "/hero/curtain/front/mongo.webp",
        },
        {
          name: "Firebase",
          image: "/hero/curtain/front/firebase.webp",
        },
        {
          name: "Socket-IO",
          image: "/hero/curtain/front/socket.webp",
        },
      ],
      link: "#",
    },
    {
      title: "LMS Learn",
      description:
        "A real-time AI-powered chatbot for instant customer support.An AI-powered e-commerce platform with personalized recommendations.",
      image: "/projects/lms_learn.webp",
      techs: [
        {
          name: "React",
          image: "/hero/curtain/front/react.webp",
        },
        {
          name: "Tailwind",
          image: "/hero/curtain/front/tailwind.webp",
        },
        {
          name: "DaisyUI",
          image: "/hero/curtain/front/daisy.webp",
        },
        {
          name: "Reducx-Toolkit",
          image: "/hero/curtain/front/redux.webp",
        },
        {
          name: "Hot-Toast",
          image: "/hero/curtain/front/react-hot-toast.webp",
        },
        {
          name: "Framer-Motion",
          image: "/hero/curtain/front/framer.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/front/cloudinary.webp",
        },
        {
          name: "Express",
          image: "/hero/curtain/front/express.webp",
        },
        {
          name: "MongoDB",
          image: "/hero/curtain/front/mongo.webp",
        },
        {
          name: "Firebase",
          image: "/hero/curtain/front/firebase.webp",
        },
        {
          name: "Socket-IO",
          image: "/hero/curtain/front/socket.webp",
        },
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
