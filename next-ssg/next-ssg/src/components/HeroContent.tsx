"use client";
import React from "react";
import { HeroButtons } from "./HeroButtons";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

export const HeroContent: React.FC = () => {
  const buttonsRef = useFadeInOnScroll();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl px-4 text-white drop-shadow-lg">
      <h1 className="text-4xl leading-tight md:text-7xl md:leading-[100px] font-bold">
        馬主<span style={{ fontSize: '80%' }}>としての</span>視点、<br />
        デザイナー<span style={{ fontSize: '80%' }}>としての</span>技術。
      </h1>
      <h2 className="mt-8 md:mt-12 text-xl md:text-3xl leading-snug font-semibold">
        馬主・競馬関係者様向け<br />
        記念品オーダーメイドデザイン
      </h2>
      <div ref={buttonsRef} className="mt-12 md:mt-16 w-[90vw] md:w-auto max-w-xl flex flex-col items-center">
        <HeroButtons />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/2a0208e78443ba846f65d4d107ca731c98563d3d?placeholderIfAbsent=true"
        className="mt-8 md:mt-12 w-5 md:w-7 aspect-[1.87] animate-bounce"
        alt="Scroll down"
      />
    </div>
  );
}; 