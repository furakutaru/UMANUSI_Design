import React from "react";
import { HeroButtons } from "./HeroButtons";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center w-full max-w-[854px] max-md:max-w-full">
      <h1 className="self-stretch text-7xl text-white leading-[100px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
        馬主としての視点、
        <br />
        デザイナーとしての技術。
      </h1>
      <h2 className="mt-16 ml-5 text-3xl leading-10 text-white w-[449px] max-md:mt-10 max-md:max-w-full">
        馬主・競馬関係者様向け
        <br />
        記念品オーダーメイドデザイン
      </h2>
      <HeroButtons className="mt-20 ml-6 max-md:mt-10" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/2a0208e78443ba846f65d4d107ca731c98563d3d?placeholderIfAbsent=true"
        className="object-contain mt-12 ml-6 w-7 aspect-[1.87] max-md:mt-10 animate-bounce-arrow"
        alt=""
      />
    </div>
  );
} 