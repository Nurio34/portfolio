"use client";

import ProjectsStack from "./ProjectsStack";
import "./index.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="Cutout_Section relative w-full h-screen overflow-x-hidden"
    >
      <h2
        className="text-lg md:text-5xl font-extrabold text-primary font-serif"
        style={{ fontVariant: "small-caps" }}
      >
        Projects
      </h2>
      <div className="h-full grid grid-cols-2  ">
        <ProjectsStack />
      </div>
    </section>
  );
}
