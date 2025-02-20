import { motion } from "framer-motion";
import { ProjectType } from "..";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tech from "./Tech";
import SourceButtons from "./SourceButtons";
import { track } from "@vercel/analytics";

function Card({
  project,
  index,
  total,
  currentIndex,
  isAnimationStarted,
}: {
  project: ProjectType;
  index: number;
  total: number;
  currentIndex: number;
  isAnimationStarted: boolean;
}) {
  const z_param = 200;
  const [perspective, setPerspective] = useState(35);
  const totalCards = currentIndex === index ? 35 : 1;

  const [z_Pos, setZ_Pos] = useState<number[]>([]);
  const [y_Pos, setY_Pos] = useState<string[]>([]);
  const [rotatingY, setRotatingY] = useState(1);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [titleStream, setTitleStream] = useState("");
  const [isTitleStreamComplated, setIsTitleStreamComplated] = useState(false);
  const [descriptionStream, setDescriptionStream] = useState("");
  const [isDescriptionStreamComplated, setIsDescriptionStreamComplated] =
    useState(false);
  const [areTechsRevealed, setAreTechsRevealed] = useState(false);
  const [isCardStackVisible, setIsCardStackVisible] = useState(true);

  //! *** handle stream texts ***
  useEffect(() => {
    if (isTitleStreamComplated && descriptionStream.trim() === "") {
      streamDescription();
    }
  }, [isTitleStreamComplated]);
  //! *************************

  //! *** when clicked next or previous buttons, adjust positions ***
  useEffect(() => {
    if (currentIndex === index % total) {
      //! *** move to z_param
      setZ_Pos([-z_param, 0, z_param]);
      setY_Pos(["0", "50%", "0"]);
    }

    if (currentIndex === (index + 1) % total) {
      //! *** move to 0
      setZ_Pos([z_param, z_param / 2, 0]);
      setY_Pos(["0", "-49%", "0"]);
    }

    if (currentIndex === (index + 2) % total) {
      //! *** move to -z_param
      setZ_Pos([0, -z_param / 2, -z_param]);
      setY_Pos(["0", "-50%", "0"]);
    }
  }, [currentIndex]);
  //! ***************

  useEffect(() => {
    if (
      currentIndex === index &&
      titleStream.trim() === "" &&
      isAnimationStarted
    ) {
      streamTitle();
    }
  }, [isAnimationStarted, currentIndex]);

  function streamTitle() {
    let ind = 0;
    intervalRef.current = setInterval(() => {
      if (ind === project.title.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          setIsTitleStreamComplated(true);
        }
      }

      setTitleStream(project.title.slice(0, ind));
      ind++;
    }, 10);
  }

  function streamDescription() {
    let ind = 0;
    intervalRef.current = setInterval(() => {
      if (ind === project.description.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          setIsDescriptionStreamComplated(true);
        }
      }

      setDescriptionStream(project.description.slice(0, ind));
      ind++;
    }, 10);
  }

  return (
    <>
      {Array(totalCards)
        .fill("#")
        .map((_, i) => (
          <motion.li
            key={i}
            tabIndex={i === 0 ? 0 : -1}
            className={`absolute z-10 -top-[150%] md:top-0 -left-[80%] md:left-0  w-[300%] md:w-full h-[400%] md:h-full shadow-base-content rounded-lg overflow-hidden bg-base-100
              grid grid-rows-[1fr,1fr] 
              ${i !== 0 ? "border-b-8" : ""}
              ${i === 0 ? "shadow-md" : ""}
              ${
                currentIndex === index
                  ? "Projects_Card border-b-2 border-r-2 border-t-2 text-base-content"
                  : "shadow-sm opacity-30"
              } ${i === totalCards - 1 - 1 ? "border-l-8 shadow-lg" : ""}
            `}
            style={
              {
                "--z_Param": z_param - i,
                "--perspective": perspective,
                "--rotatingY": rotatingY,
              } as React.CSSProperties
            }
            initial={{ rotateY: perspective, opacity: 0 }}
            animate={{
              opacity:
                currentIndex !== index
                  ? 0.5
                  : !isCardStackVisible && i !== 0
                  ? 0
                  : 1,
              z: currentIndex === index ? [-z_param, 0, z_param - i] : z_Pos,
              y: y_Pos,
              rotateY: perspective,
              transition: { duration: 0.3 },
            }}
            onHoverStart={() => {
              if (currentIndex === index) {
                setRotatingY(0);
                setIsCardStackVisible(false);
                setPerspective(0);
              }
            }}
            onMouseLeave={() => {
              setRotatingY(1);
              setIsCardStackVisible(true);
              setPerspective(35);
            }}
            onClick={() => {
              track("Button Clicked", {
                buttonId: `Not_Button-Card_${project.title}`,
              });
            }}
          >
            <figure className="relative cursor-default">
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
            {i === 0 && (
              <div className={` py-[0.5vh] px-[1vw] cursor-default`}>
                <h2 className=" font-bold">{titleStream}</h2>
                <p className=" text-sm font-semibold">{descriptionStream}</p>
                {isDescriptionStreamComplated && (
                  <motion.ul
                    className={`flex flex-wrap gap-x-[1vw] gap-y-[1.5vh] text-xs py-[1vh] px-[0.5vw]`}
                  >
                    {project.techs.map((tech, t_index) => (
                      <Tech
                        key={tech.name}
                        tech={tech}
                        index={t_index}
                        totalTechs={project.techs.length}
                        areTechsRevealed={areTechsRevealed}
                        setAreTechsRevealed={setAreTechsRevealed}
                        timeoutRef={timeoutRef}
                      />
                    ))}
                  </motion.ul>
                )}
                <SourceButtons
                  areTechsRevealed={areTechsRevealed}
                  project={project}
                />
              </div>
            )}
          </motion.li>
        ))}
    </>
  );
}

export default Card;
