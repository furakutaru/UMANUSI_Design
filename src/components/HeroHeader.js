import React from "react";
import { HeroContent } from "./HeroContent";

export function HeroHeader() {
  return (
    <header className="overflow-hidden font-bold text-center whitespace-nowrap">
      <div className="w-full bg-zinc-300 max-md:max-w-full">
        <div className="flex flex-col items-center px-20 pt-52 pb-12 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <HeroContent />
        </div>
      </div>
    </header>
  );
}

export default HeroHeader; 