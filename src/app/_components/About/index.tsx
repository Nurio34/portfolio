"use client";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-base-200 text-base-content px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            I’m{" "}
            <span className="text-secondary font-semibold">
              Nuri Salih Ersoy
            </span>
            , a self-taught full-stack web developer based in Istanbul, Turkey.
            I specialize in crafting modern, scalable, and AI-powered web
            applications.
          </p>
          <p className="text-base-content/80 mt-4">
            With expertise in{" "}
            <span className="text-accent">
              React, Next.js, Node.js, and AI integrations
            </span>
            , I love solving real-world problems through technology. My goal is
            to create intuitive user experiences and efficient back-end
            solutions.
          </p>

          {/* Download Resume Button */}
          <a href="/resume.pdf" download className="btn btn-primary mt-6">
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </motion.div>

        {/* Right Side - Skills & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FaLaptopCode className="text-4xl" />
                </div>
                <div className="stat-value">5+</div>
                <div className="stat-title">Years of Coding</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaProjectDiagram className="text-4xl" />
                </div>
                <div className="stat-value">20+</div>
                <div className="stat-title">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-semibold text-base-content mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "TailwindCSS",
              "TypeScript",
              "Docker",
              "Firebase",
            ].map((skill) => (
              <div key={skill} className="badge badge-accent p-4 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
