"use client";

import { useEffect, useRef, useState } from "react";

const useScrollDirection = () => {
  const [scrollFirstPosition, setScrollFirstPosition] = useState(0);
  const [scrollLastPosition, setScrollLastPosition] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLastPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setScrollFirstPosition(scrollLastPosition);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }, 50);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scrollLastPosition]);

  return { scrollFirstPosition, scrollLastPosition };
};

export default useScrollDirection;
