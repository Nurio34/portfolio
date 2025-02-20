"use client";

import Scrollbar from "./_components/Scrollbar";
import ThemeHandler from "./_components/ThemeHandler";
import { GlobalContextProvider, parts } from "./GlobalContext";
import Track from "./_components/Track";
import Part from "./Part";

export default function Home() {
  return (
    <GlobalContextProvider>
      <main>
        <Track />
        <ThemeHandler />
        <Scrollbar />
        <ul>
          {parts.map((part) => (
            <Part key={part.name} part={part} />
          ))}
        </ul>
      </main>
    </GlobalContextProvider>
  );
}
