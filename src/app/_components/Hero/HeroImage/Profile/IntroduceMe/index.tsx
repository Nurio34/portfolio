import { useEffect, useRef, useState } from "react";
import { useHeroContext } from "../../../HeroContext";
import { motion } from "framer-motion";

function IntroduceMe() {
  const introducings = [
    "Hello",
    "My name is Nuri Salih Ersoy",
    "I am from Istanbul, Turkey",
    "I am a self-taught full-stack web developer",
    "I am passionate about building AI-powered applications",
    "I specialize in creating scalable and high-performance web apps",
    "I love turning ideas into interactive digital experiences",
    "I enjoy solving complex problems with clean and efficient code",
    "I am constantly learning and improving my craft",
    "I have experience working with React, Next.js, Express, MongoDB, PostgreSQL, Prisma and AI integration",
    "I contribute to open-source projects and love collaborating with other developers",
    "I am a lifelong learner and a technology enthusiast",
    "I develop modern and responsive user interfaces using React, TailwindCss, DaisyUI and Framer Motion",
    "I build powerful and secure back-end systems with Node.js, Express, MongoDB, PostgreSQL, Prisma, Firebase and Clerk",
    "I work with Git, Github, Vercel, Render and Bunny to streamline development and deployment",
    "I create or integrate REST APIs to enhance application functionality",
  ];

  const { curtainsState } = useHeroContext();
  const { isOpened } = curtainsState;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [streamMessage, setStreamMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpened) return;

    const message = introducings[currentIndex];
    let i = isDeleting ? message.length : 0;
    const speed = isDeleting ? 10 : 100;

    function typeEffect() {
      if (!isDeleting) {
        if (i <= message.length) {
          setStreamMessage(message.slice(0, i));
          i++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);

          // Delay before starting deletion
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 1100);
        }
      } else {
        if (i >= 0) {
          setStreamMessage(message.slice(0, i));
          i--;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % introducings.length);
        }
      }
    }

    function restartTyping() {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(typeEffect, speed);
    }

    restartTyping();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpened, currentIndex, isDeleting]);

  return (
    <div
      className="grow flex flex-wrap justify-end py-[1vh] gap-x-[2.5px] font-serif tracking-normal md:text-lg font-semibold
        bg-gradient-to-br from-secondary via-warning to-primary bg-clip-text text-transparent
      "
    >
      {streamMessage.split("").map((char, index) => (
        <div key={index}>{char}</div>
      ))}
      <motion.span
        className="flex border-r-2 pr-1 border-base-content h-6"
        animate={{
          opacity: [0, 1, 0],
          transition: { duration: 1, repeat: Infinity },
        }}
      />
    </div>
  );
}

export default IntroduceMe;
