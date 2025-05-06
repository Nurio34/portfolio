import { Dispatch, SetStateAction } from "react";
import { CurrentTabType } from "../..";
import { track } from "@vercel/analytics";

function Button({
  title,
  currentTab,
  setCurrentTab,
  setOpenDescription,
}: {
  title: CurrentTabType;
  currentTab: CurrentTabType;
  setCurrentTab: Dispatch<SetStateAction<CurrentTabType>>;
  setOpenDescription: Dispatch<SetStateAction<string>>;
}) {
  const handleTab = () => {
    setCurrentTab(title);
    setOpenDescription("");
    track("Button Clicked", { buttonId: `Button-Tab_${title}` });
  };

  return (
    <li>
      <button
        type="button"
        className={`capitalize py-1 px-[1vw] border-r-2 border-b-2 transition-all
            ${
              currentTab === title
                ? "border-secondary font-bold text-secondary"
                : "border-base-300 bg-base-content text-base-100"
            }     
        `}
        style={{ fontVariant: "small-caps" }}
        onClick={handleTab}
      >
        {title}
      </button>
    </li>
  );
}
export default Button;
