import { CurrentTabType, SkillsType } from "..";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Description from "./Description";

export type DescriptionType = {
  name: string;
  src: string;
  description: string;
};

function Descriptions({
  skills,
  currentTab,
  openDescription,
  setOpenDescription,
}: {
  skills: SkillsType;
  currentTab: CurrentTabType;
  openDescription: string;
  setOpenDescription: Dispatch<SetStateAction<string>>;
}) {
  const descriptions: DescriptionType[] = skills[currentTab];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleIsMobile = () => {
      setIsMobile(window.innerWidth > 768 ? false : true);
    };
    handleIsMobile();
    window.addEventListener("resize", handleIsMobile);

    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);

  return (
    <ul
      className=" py-[1vh] px-[1vw]
        grid grid-cols-2 lg:grid-cols-3 place-content-center gap-x-[2vw] gap-y-[1.5vh] 
      "
      style={{
        gridTemplateRows: `repeat(${Math.ceil(
          descriptions.length / Number(`${isMobile ? 2 : 3}`)
        )},auto)`,
      }}
    >
      {descriptions.map((description, index) => (
        <Description
          key={description.name}
          description={description}
          openDescription={openDescription}
          setOpenDescription={setOpenDescription}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </ul>
  );
}
export default Descriptions;
