import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PartType } from "../GlobalContext";

function useMultipleElementsScrollObserver(
  parts: PartType[],
  setCurrentComponent: Dispatch<SetStateAction<number>>
) {
  const [visibleEl, setVisibleEl] = useState("Hero");

  useEffect(() => {
    setCurrentComponent(parts.find((part) => part.id === visibleEl)!.index);
  }, [visibleEl]);

  useEffect(() => {
    // Get all the elements by their ids
    const elements = parts
      .map((part) => document.getElementById(part.id))
      .filter((el) => el !== null);

    // If no valid elements are found, exit early
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleEl(elementId);
          } else {
            // console.log(`${elementId} is out of view.`);
          }
        });
      },
      {
        root: null, // observing relative to the viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe each element
    elements.forEach((element) => observer.observe(element));

    // Cleanup observer when component unmounts or IDs change
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [parts]);

  return { visibleEl };
}

export default useMultipleElementsScrollObserver;
