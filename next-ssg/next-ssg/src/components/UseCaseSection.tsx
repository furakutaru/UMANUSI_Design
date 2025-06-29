"use client";
import React from "react";
import { SceneSlider } from "./SceneSlider";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

const sceneData = [
  {
    id: "retirement",
    imageSrc: "/retirement-scene.png",
    title: "引退記念",
    description: "愛馬の軌跡を形に残す記念グッズ全般",
  },
  {
    id: "victory",
    imageSrc: "/victory-scene.png",
    title: "勝利祝い",
    description: "栄光の瞬間を記念するグッズ全般",
  },
  {
    id: "daily",
    imageSrc: "/daily-scene.jpg",
    title: "日常使い",
    description: "スマホケースやモバイルバッテリーで愛馬を身近に",
  },
  {
    id: "fanservice",
    imageSrc: "/fanservice-scene.png",
    title: "ファンサービス",
    description: "シールやバッジをファンへのプレゼントに",
  },
  {
    id: "race-scene",
    imageSrc: "/race-scene.png",
    title: "レース観戦時",
    description: "応援タオル、うちわ、Tシャツで仲間と一体感",
  },
  {
    id: "owner-friends",
    imageSrc: "/owner-friends.png",
    title: "馬主仲間との交流",
    description: "オリジナル名刺や記念品で話題に",
  }
];

export const UseCaseSection: React.FC = () => {
  const headerRef = useFadeInOnScroll<HTMLDivElement>();
  const sliderRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section className="relative w-full py-8 md:py-16 overflow-x-clip">
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-none text-black">
            活用シーン例
          </h1>
          <h2 className="mt-4 mb-10 text-xl md:text-2xl font-semibold leading-none text-gray-900">
            様々なシーンでご活用いただけます
          </h2>
        </header>
        <div ref={sliderRef} style={{ transitionDelay: '0.3s' }}>
          <SceneSlider scenes={sceneData} />
        </div>
      </div>
    </section>
  );
}; 