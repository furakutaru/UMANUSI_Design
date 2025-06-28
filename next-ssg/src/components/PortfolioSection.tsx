"use client";
import React, { useState, useRef } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { SliderArrow } from "./SliderArrow";
import { useFadeInOnScroll } from "./useFadeInOnScroll";

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  { image: "/portfolio-horse-logo.jpg", title: "馬名ロゴ", description: "オリジナルグッズや出馬予告画像、メンコなどに利用" },
  { image: "/portfolio-luminaval-towel.jpg", title: "ルミナヴァル号フェイスタオル", description: "口取り式で掲げたり応援にも使えます" },
  { image: "/portfolio-age-runner-card.jpg", title: "エイジランナー号トレーディングカード", description: "サインを貰うのにも最適" },
  { image: "/portfolio-firmarpoint-card.jpg", title: "フェルマーポイント号優勝記念トレーディングカード", description: "話題になったゴリアット号のトレーディングカードと同じフォーマットで" },
  { image: "/portfolio-firmarpoint-stand.jpg", title: "フェルマーポイント号優勝記念アクリルスタンド", description: "口取り写真をアクリルスタンドに加工することで立体感のある特別な仕上がりに" },
  { image: "/portfolio-sun-or-slice-cap.jpg", title: "サンオルソーライス号キャップ", description: "関係者へのプレゼントにも、帽子タイプや刺繍なども選べます" },
  { image: "/portfolio-sun-or-slice-stand.jpg", title: "サンオルソーライス号重賞出走記念アクリルスタンド", description: "台座をゼッケンに、疾走中の写真を使うことで躍動感が有る仕上がりに" },
  { image: "/portfolio-south-express-shield.jpg", title: "サウスエクスプレス号蹄鉄盾", description: "蹄鉄は幸運のお守りともされインテリアにも最適です" },
  { image: "/portfolio-pick-and-roll-shield.jpg", title: "ピックアンドロール号蹄鉄盾", description: "デザイン自由度の高い蹄鉄盾" },
  { image: "/portfolio-pick-and-roll-photo.jpg", title: "ピックアンドロール号勝利写真", description: "L版の勝利写真をカスタマイズ" }
];

export const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showAttention, setShowAttention] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useFadeInOnScroll<HTMLDivElement>();
  const sliderContentRef = useFadeInOnScroll<HTMLDivElement>();
  const total = portfolioItems.length;

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < total - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  const handleChange = (nextIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
      setShowAttention(false);
    }, 250);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      handleChange(currentIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="w-full bg-neutral-900 pt-8 pb-12">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center px-4">
        <header ref={headerRef} className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-0">制作実績</h1>
          <h2 className="text-lg md:text-xl font-semibold leading-snug text-white mt-4 mb-6">これまでのデザイン実績の一部をご紹介します</h2>
        </header>
        <div ref={sliderContentRef} style={{ transitionDelay: '0.3s' }} className="flex flex-col items-center justify-center w-full relative">
          <div
            ref={sliderRef}
            className="mx-auto w-full max-w-[340px] aspect-[7/4] md:max-w-[700px] relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {currentIndex > 0 && (
              <div className="hidden md:block absolute left-[-56px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="left" onClick={handlePrevious} />
              </div>
            )}
            {currentIndex < total - 1 && (
              <div className="hidden md:block absolute right-[-56px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="right" onClick={handleNext} className={showAttention ? 'animate-attention' : ''} />
              </div>
            )}
            <div
              className={`transition-opacity duration-300 w-full h-full ${isFading ? 'opacity-0' : 'opacity-100'}`}
              style={{ willChange: 'opacity' }}
            >
              <PortfolioCard
                image={portfolioItems[currentIndex].image}
                title={portfolioItems[currentIndex].title}
                description={portfolioItems[currentIndex].description}
                altText={`Portfolio item: ${portfolioItems[currentIndex].title}`}
              />
            </div>
            {currentIndex > 0 && (
              <div className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="left" onClick={handlePrevious} variant="scene" />
              </div>
            )}
            {currentIndex < total - 1 && (
              <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="right" onClick={handleNext} variant="scene" className={showAttention ? 'animate-attention' : ''} />
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-6">
            {portfolioItems.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-gray-500/50'} transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 