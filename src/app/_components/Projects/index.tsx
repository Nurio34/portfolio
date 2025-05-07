"use client";

import { useEffect, useState } from "react";
import ProjectsStack from "./ProjectsStack";
import "./index.css";
import { useGlobalContext } from "@/app/GlobalContext";
import ProjectsOnMobile from "./ProjectsOnMobile";

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

export default function Projects() {
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

  const { currentComponent, isMobile } = useGlobalContext();
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    if (currentComponent === 3) {
      setIsAnimationStarted(true);
    }
  }, [currentComponent]);

  return (
    <section
      id="Projects"
      className="Cutout_Section relative w-full h-screen overflow-hidden
        grid grid-rows-[auto,1fr]
      "
      style={
        {
          "--x1": "50%",
          "--y1": "50%",
          "--bg1": "url('/background-2.webp')",
          "--mask1": "url('/mask-images/4.webp')",
          "--size1": "220% 200%",
          "--x2": "80%",
          "--y2": "0%",
          "--bg2": "url('/background-2.webp')",
          "--mask2": "url('/mask-images/3.webp')",
          "--size2": "0",
        } as React.CSSProperties
      }
      onMouseEnter={() => setIsAnimationStarted(true)}
    >
      <h2
        className="text-lg md:text-5xl font-extrabold text-primary font-serif pt-[2vh] px-[4vw]"
        style={{ fontVariant: "small-caps" }}
      >
        Projects
      </h2>
      {isMobile ? (
        <ProjectsOnMobile projects={projects} />
      ) : (
        <ProjectsStack
          isAnimationStarted={isAnimationStarted}
          projects={projects}
        />
      )}
    </section>
  );
}
