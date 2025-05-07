import Image from "next/image";
import { DescriptionType } from "..";
import { FaAngleDown } from "react-icons/fa";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";

function Description({
  description,
  openDescription,
  setOpenDescription,
  index,
}: {
  description: DescriptionType;
  openDescription: string;
  setOpenDescription: Dispatch<SetStateAction<string>>;
  index: number;
}) {
  const [descriptionStream, setDescriptionStream] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (description.name === openDescription) {
      let i = 1;
      intervalRef.current = setInterval(() => {
        setDescriptionStream(description.description.slice(0, i));
        i++;
        if (i === description.description.length + 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [openDescription]);

  const handleDescriptionVisiblity = () => {
    track("Button Clicked", { buttonId: `Button-${description.name}` });

    if (description.name === openDescription) {
      return setOpenDescription("");
    }

    setOpenDescription(description.name);
  };

  return (
    <motion.li
      className={`relative self-start md:py-1 px-[1vw] rounded-md  ${
        description.name === openDescription
          ? "shadow-md shadow-base-content bg-base-100"
          : "bg-base-content text-base-100"
      }`}
      initial={{ opacity: 0, x: "-25%" }}
      whileInView={{
        opacity: 1,
        x: "0%",
        transition: { type: "tween", delay: 0.1 * index },
      }}
    >
      <div>
        <button
          type="button"
          className="w-full text-start"
          onClick={handleDescriptionVisiblity}
        >
          <div className="flex gap-x-[0.5vw] items-center">
            <figure className=" relative w-4 md:w-8 aspect-square rounded-md overflow-hidden">
              <Image
                src={description.src}
                fill
                alt={description.name}
                className=" object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
            <p
              className={`capitalize text-sm line-clamp-1 md:line-clamp-none ${
                description.name === openDescription ? "font-bold" : ""
              }`}
            >
              {description.name}
            </p>
            <motion.div
              animate={{
                rotateZ:
                  openDescription === description.name ? "180deg" : "0deg",
                transition: {
                  type: "tween",
                },
              }}
            >
              <FaAngleDown />
            </motion.div>
          </div>
        </button>
        <motion.p
          className={`overflow-hidden absolute shadow-xl ${
            index % 2 === 0
              ? "left-0 rounded-tr-lg lg:rounded-tr-none"
              : "right-0 rounded-tl-lg lg:rounded-tl-none"
          } px-[1vw] pt-1 lg:pt-0 pb-1 rounded-bl-lg rounded-br-lg bg-base-100 
            w-[200%] lg:w-full
            ${
              description.name === openDescription
                ? "font-semibold z-10"
                : "-z-10"
            }`}
          initial={{ height: 0 }}
          animate={{
            opacity: openDescription === description.name ? 1 : 0,
            // height:
            //   openDescription === description.name
            //     ? `${isMobile ? "24px" : "auto"}`
            //     : 0,
            height: "auto",
            transition: { type: "tween" },
          }}
        >
          {descriptionStream}
        </motion.p>
      </div>
    </motion.li>
  );
}
export default Description;
