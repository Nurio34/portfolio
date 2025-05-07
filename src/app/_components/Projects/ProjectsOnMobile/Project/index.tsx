import Image from "next/image";
import { ProjectType } from "../..";
import Link from "next/link";

function Project({ project }: { project: ProjectType }) {
  return (
    <li className="min-w-full">
      <figure className="relative w-full aspect-video overflow-hidden">
        <Image src={project.image} alt={`${project.title} image`} fill />
      </figure>
      <div className="pb-[1vh] px-[2vw]">
        <h2 className="pt-[1vh] bg-base-100/20 text-2xl font-bold text-base-content indent-4 contrast-200">
          {project.title}
        </h2>
        <p className="bg-base-100/20 text-base-content font-semibold pb-1 contrast-200">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <li
              key={tech.name}
              className="grow max-w-48 flex items-center gap-x-2 border py-1 px-2 rounded-md bg-base-100/50"
            >
              <figure className="relative w-5 aspect-square overflow-hidden">
                <Image
                  src={tech.image}
                  alt={`${tech.name} icon`}
                  fill
                  className="object-cover"
                />
              </figure>
              <span className="text-base-content contrast-200">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="py-2 flex justify-center gap-x-4">
          <Link
            href={project.github}
            target="_blank"
            className="grow flex justify-center gap-x-2 rounded-lg bg-primary py-2 px-4 font-bold text-primary-content"
          >
            <figure className="relative w-6 aspect-square">
              <Image
                src={"/hero/social/github.webp"}
                alt="github icon"
                fill
                className="object-cover"
              />
            </figure>
            <span>Source</span>
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            type="button"
            className="grow flex justify-center gap-x-2 rounded-lg bg-secondary py-2 px-4 font-bold text-primary-content"
          >
            <figure className="relative w-6 aspect-square rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt="github icon"
                fill
                className="object-cover"
              />
            </figure>
            <span>Live</span>
          </Link>
        </div>
      </div>
    </li>
  );
}
export default Project;
