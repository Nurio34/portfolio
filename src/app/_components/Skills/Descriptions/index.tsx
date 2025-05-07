import { CurrentTabType, SkillsType } from "..";
import { Dispatch, SetStateAction } from "react";
import Description from "./Description";
import { useGlobalContext } from "@/app/GlobalContext";

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
  const { isMobile } = useGlobalContext();

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
        />
      ))}
    </ul>
  );
}
export default Descriptions;
