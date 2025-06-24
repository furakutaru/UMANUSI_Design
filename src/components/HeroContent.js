import React from "react";
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl px-4 text-white drop-shadow-lg">
      <h1 className="text-4xl leading-tight md:text-7xl md:leading-[100px] font-bold">
        馬主としての視点、
        <br />
        デザイナーとしての技術。
      </h1>
      <h2 className="mt-8 md:mt-12 text-xl md:text-3xl leading-snug font-semibold">
        馬主・競馬関係者様向け
        <br />
        記念品オーダーメイドデザイン
      </h2>
      
      <div className="mt-12 md:mt-16 w-full max-w-md">
        <HeroButtons />
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/2a0208e78443ba846f65d4d107ca731c98563d3d?placeholderIfAbsent=true"
        className="mt-8 md:mt-12 w-5 md:w-7 aspect-[1.87] animate-bounce"
        alt="Scroll down"
      />
    </div>
  );
} 