import { Dispatch, SetStateAction } from "react";
import { CurrentTabType, SkillsType } from "..";
import Button from "./Button";

function TabButtons({
  skills,
  currentTab,
  setCurrentTab,
  setOpenDescription,
}: {
  skills: SkillsType;
  currentTab: CurrentTabType;
  setCurrentTab: Dispatch<SetStateAction<CurrentTabType>>;
  setOpenDescription: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav>
      <ul className="flex items-center">
        {Object.keys(skills).map((title) => (
          <Button
            key={title}
            title={title as CurrentTabType}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            setOpenDescription={setOpenDescription}
          />
        ))}
      </ul>
    </nav>
  );
}
export default TabButtons;
