import React, { useState, useEffect, useRef } from "react";
import { SceneCard } from "./SceneCard";
import { SliderArrow } from "./SliderArrow";

export function SceneSlider({ scenes }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const sliderContentRef = useRef(null);

  // 画面幅から表示枚数を計算
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) setVisibleCount(4);
      else if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // currentIndexの最大値を制限
  useEffect(() => {
    const maxIndex = Math.max(0, scenes.length - visibleCount);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, scenes.length]);

  // --- スライド操作 ---
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, scenes.length - visibleCount);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // --- スライド位置の計算 ---
  useEffect(() => {
    if (sliderContentRef.current) {
      const cardWidth = sliderContentRef.current.children[0].offsetWidth;
      const offset = -currentIndex * cardWidth;
      sliderContentRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex, visibleCount]);

  const maxIndex = Math.max(0, scenes.length - visibleCount);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-12 md:px-16">
      <div className="overflow-hidden">
        <div
          ref={sliderContentRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {scenes.map((scene) => (
            <div key={scene.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
              <SceneCard {...scene} />
            </div>
          ))}
        </div>
      </div>
      {currentIndex > 0 && (
        <SliderArrow direction="left" onClick={handlePrev} variant="scene" />
      )}
      {currentIndex < maxIndex && (
        <SliderArrow direction="right" onClick={handleNext} variant="scene" />
      )}
    </div>
  );
} 