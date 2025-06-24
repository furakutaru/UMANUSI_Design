import React, { useState } from "react";
import { SceneCard } from "./SceneCard";
import { SliderArrow } from "./SliderArrow";

export function SceneSlider({ scenes }) {
  // 1画面に表示するカード数
  const VISIBLE_COUNT = 4;
  const [startIndex, setStartIndex] = useState(0);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE_COUNT < scenes.length;

  const handlePrev = () => {
    if (canPrev) setStartIndex(startIndex - 1);
  };
  const handleNext = () => {
    if (canNext) setStartIndex(startIndex + 1);
  };

  // スライド表示するカード群
  const visibleScenes = scenes.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <div className="relative overflow-hidden mt-7 w-full max-md:max-w-full min-w-0 flex justify-center">
      <div 
        className="flex gap-9 w-auto mx-auto transition-all duration-600 ease-out" 
        style={{ minWidth: 0 }}
      >
        {visibleScenes.map((scene) => (
          <SceneCard
            key={scene.id}
            id={scene.id}
            imageSrc={scene.imageSrc}
            title={scene.title}
            description={scene.description}
            imageAspectRatio={scene.imageAspectRatio}
            cardPadding={scene.cardPadding}
          />
        ))}
      </div>
      {/* 左右ボタン（SliderArrow） */}
      {canPrev && (
        <SliderArrow direction="left" onClick={handlePrev} />
      )}
      {canNext && (
        <SliderArrow direction="right" onClick={handleNext} />
      )}
    </div>
  );
} 