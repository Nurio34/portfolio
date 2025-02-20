import Card from "./Card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

export type TechType = {
  name: string;
  image: string;
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  techs: TechType[];
  github: string;
  liveLink: string;
};

export type PerspectiveOriginType = {
  x: number;
  y: number;
};

function ProjectsStack({
  isAnimationStarted,
}: {
  isAnimationStarted: boolean;
}) {
  const projects: ProjectType[] = [
    {
      title: "Smart Shop",
      description:
        "AI-powered e-commerce PWA with real-time updates, role-based access, and personalized recommendations.",
      image: "/projects/smart_shop.webp",
      techs: [
        {
          name: "Next.js",
          image: "/hero/curtain/front/next.webp",
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
          name: "Framer-Motion",
          image: "/hero/curtain/front/framer.webp",
        },
        {
          name: "Redux-Toolkit",
          image: "/hero/curtain/front/redux.webp",
        },
        {
          name: "Next-Cloudinary",
          image: "/hero/curtain/front/next-cloudinary.webp",
        },
        {
          name: "ApexCharts",
          image: "/hero/curtain/front/apexcharts.webp",
        },
        {
          name: "PostgreSQL",
          image: "/hero/curtain/back/postgre.webp",
        },
        {
          name: "Prisma",
          image: "/hero/curtain/back/prisma.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/back/cloudinary.webp",
        },
        {
          name: "Gemini",
          image: "/hero/curtain/back/gemini.webp",
        },
      ],
      github: "https://github.com/Nurio34/smart-shop",
      liveLink: "https://smartshop-ashen.vercel.app/",
    },
    {
      title: "Whatsup",
      description:
        "Real-time messaging app with end-to-end encryption, supporting text, images, and notifications.",
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
          name: "Redux-Toolkit",
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
          name: "Express",
          image: "/hero/curtain/back/express.webp",
        },
        {
          name: "MongoDB",
          image: "/hero/curtain/back/mongo.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/back/cloudinary.webp",
        },

        {
          name: "Firebase",
          image: "/hero/curtain/back/firebase.webp",
        },
        {
          name: "Socket-IO",
          image: "/hero/curtain/back/socket.webp",
        },
      ],
      github: "https://github.com/Nurio34/whatsup",
      liveLink: "https://whatsup-lime-rho.vercel.app/",
    },
    {
      title: "LMS Learn",
      description:
        "Online learning platform for instructors to create courses and students to enroll, with progress tracking.",
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
          name: "Redux-Toolkit",
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
          name: "Express",
          image: "/hero/curtain/back/express.webp",
        },
        {
          name: "Cloudinary",
          image: "/hero/curtain/back/cloudinary.webp",
        },

        {
          name: "MongoDB",
          image: "/hero/curtain/back/mongo.webp",
        },
      ],
      github: "https://github.com/Nurio34/lms-learn",
      liveLink: "https://lms-learn.vercel.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <motion.ul className=" flex justify-center items-center">
      <button
        type="button"
        className="Contrast absolute left-0 md:left-[20%] z-20"
        onClick={() => {
          setCurrentIndex((prev) => {
            if (prev === 0) return projects.length - 1;
            return prev - 1;
          });
          track("Button Clicked", { buttonId: `Button-Previous_Project` });
        }}
      >
        <CiCircleChevLeft className="text-5xl md:text-8xl" />
      </button>
      <div className="Projects_Perspective z-10 w-1/4 -translate-x-1/4 aspect-square">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            project={project}
            index={index}
            total={projects.length}
            currentIndex={currentIndex}
            isAnimationStarted={isAnimationStarted}
          />
        ))}
      </div>
      <button
        type="button"
        className="Contrast absolute right-0 md:right-[20%] z-20"
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % projects.length);
          track("Button Clicked", { buttonId: `Button-Next_Project` });
        }}
      >
        <CiCircleChevRight className="text-5xl md:text-8xl" />
      </button>
    </motion.ul>
  );
}
export default ProjectsStack;
