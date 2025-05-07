import { useEffect, useRef, useState } from "react";
import { ProjectType } from "..";
import Project from "./Project";

function ProjectsOnMobile({ projects }: { projects: ProjectType[] }) {
  const ProjectsContainerRef = useRef<HTMLUListElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollStart, setScrollStart] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ProjectsContainerRef.current)
        setContainerWidth(
          ProjectsContainerRef.current.getBoundingClientRect().width
        );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      !isDragging &&
      scrollPosition > scrollStart &&
      scrollPosition > (scrollStart + containerWidth) / 5
    )
      setScrollStart((prev) => prev + containerWidth);

    if (
      !isDragging &&
      scrollPosition < scrollStart &&
      scrollPosition < (scrollStart + containerWidth) / 5 + containerWidth
    )
      setScrollStart((prev) => prev - containerWidth);
  }, [isDragging]);

  useEffect(() => {
    if (ProjectsContainerRef.current)
      ProjectsContainerRef.current.scrollLeft = scrollStart;
  }, [scrollStart]);

  return (
    <ul
      ref={ProjectsContainerRef}
      className="flex overflow-scroll"
      onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </ul>
  );
}
export default ProjectsOnMobile;
