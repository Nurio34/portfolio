import { Dispatch, SetStateAction } from "react";
import { FaDownload } from "react-icons/fa";
import { AnimationsType } from "..";
import { motion } from "framer-motion";
import Link from "next/link";

function AboutMe({
  setAnimations,
}: {
  setAnimations: Dispatch<SetStateAction<AnimationsType>>;
}) {
  return (
    <motion.div
      className=" px-[7vw] grid gap-y-1 md:gap-y-[2vh]"
      initial={{ opacity: 0, x: "-25%" }}
      whileInView={{
        opacity: 1,
        x: "0%",
        transition: { duration: 0.6, type: "tween" },
      }}
      onAnimationComplete={() =>
        setAnimations((pre) => ({ ...pre, isAboutMeAnimated: true }))
      }
    >
      <h2
        className="text-lg md:text-5xl font-extrabold text-primary font-serif"
        style={{ fontVariant: "small-caps" }}
      >
        About Me
      </h2>
      <p className=" md:text-xl font-semibold">
        I’m <span className="text-secondary font-bold">Nuri Salih Ersoy</span>,
        a self-taught{" "}
        <span className="text-accent underline underline-offset-2">
          full-stack
        </span>{" "}
        web developer based in Istanbul, Turkey. I specialize in crafting
        modern, scalable, and AI-powered web applications.
      </p>
      <p className=" text-sm md:text-lg">
        With expertise in{" "}
        <span className="text-info font-semibold">
          React, Next.js, Express.js
        </span>
        , and <span className="text-info font-semibold">AI integrations</span>,
        I love solving real-world problems through technology. My goal is to
        create intuitive user experiences and efficient back-end solutions.
      </p>
      <Link
        href={"/file/cv.pdf"}
        target="_blank"
        download={"cv"}
        className="btn btn-sm md:btn-md btn-primary font-semibold"
      >
        <FaDownload />
        Take a Look at To My Resume
      </Link>
    </motion.div>
  );
}
export default AboutMe;
