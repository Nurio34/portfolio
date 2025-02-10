import { Dispatch, SetStateAction } from "react";
import { CurrentTabType, SkillsType } from "..";
import Button from "./Button";

function TabButtons({
  skills,
  currentTab,
  setCurrentTab,
}: {
  skills: SkillsType;
  currentTab: CurrentTabType;
  setCurrentTab: Dispatch<SetStateAction<CurrentTabType>>;
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
          />
        ))}
      </ul>
    </nav>
  );
}
export default TabButtons;
