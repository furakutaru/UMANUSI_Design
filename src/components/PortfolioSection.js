import React, { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { SliderArrow } from "./SliderArrow";

const portfolioItems = [
  {
    image: "/portfolio-horse-logo.jpg",
    title: "馬名ロゴ",
    description: "オリジナルグッズや出馬予告画像、メンコなどに利用"
  },
  {
    image: "/portfolio-luminaval-towel.jpg",
    title: "ルミナヴァル号フェイスタオル",
    description: "口取り式で掲げたり応援にも使えます"
  },
  {
    image: "/portfolio-age-runner-card.jpg",
    title: "エイジランナー号トレーディングカード",
    description: "サインを貰うのにも最適"
  },
  {
    image: "/portfolio-firmarpoint-card.jpg",
    title: "フェルマーポイント号優勝記念トレーディングカード",
    description: "話題になったゴリアット号のトレーディングカードと同じフォーマットで"
  },
  {
    image: "/portfolio-firmarpoint-stand.jpg",
    title: "フェルマーポイント号優勝記念アクリルスタンド",
    description: "口取り写真をアクリルスタンドに加工することで立体感のある特別な仕上がりに"
  },
  {
    image: "/portfolio-sun-or-slice-cap.jpg",
    title: "サンオルソーライス号キャップ",
    description: "関係者へのプレゼントにも、帽子タイプや刺繍なども選べます"
  },
  {
    image: "/portfolio-sun-or-slice-stand.jpg",
    title: "サンオルソーライス号重賞出走記念アクリルスタンド",
    description: "台座をゼッケンに、疾走中の写真を使うことで躍動感が有る仕上がりに"
  },
  {
    image: "/portfolio-south-express-shield.jpg",
    title: "サウスエクスプレス号蹄鉄盾",
    description: "蹄鉄は幸運のお守りともしられインテリアにも最適です"
  },
  {
    image: "/portfolio-pick-and-roll-shield.jpg",
    title: "ピックアンドロール号蹄鉄盾",
    description: "デザイン自由度の高い蹄鉄盾"
  },
  {
    image: "/portfolio-pick-and-roll-photo.jpg",
    title: "ピックアンドロール号勝利写真",
    description: "L版の勝利写真をカスタマイズ"
  }
];

const CARD_WIDTH = 700;
const CARD_HEIGHT = 400;

export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const total = portfolioItems.length;

  const handleChange = (nextIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 250); // 0.25秒でフェードアウト→切替
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
    <section id="portfolio" className="w-full bg-neutral-900">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center min-h-screen py-12 relative">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold leading-10 text-center text-white max-md:text-4xl max-md:leading-9 max-sm:text-3xl max-sm:leading-7">
            制作実績
          </h1>
          <h2 className="mt-4 text-2xl font-semibold leading-8 text-center text-white max-md:text-xl max-md:leading-7 max-sm:text-base max-sm:leading-6">
            これまでのデザイン実績の一部をご紹介します
          </h2>
        </header>
        <div className="flex flex-col items-center justify-center flex-1 w-full relative">
          <div className="mx-auto w-[700px] h-[400px] flex-shrink-0 flex items-center justify-center relative">
            {/* 左右ボタンを画像の端から30px外側に配置 */}
            {currentIndex > 0 && (
              <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="left" onClick={handlePrevious} />
              </div>
            )}
            {currentIndex < total - 1 && (
              <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-20">
                <SliderArrow direction="right" onClick={handleNext} />
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
                cardWidth={CARD_WIDTH}
                cardHeight={CARD_HEIGHT}
              />
            </div>
          </div>
          {/* インジケータードット */}
          <div className="flex gap-2 mt-6">
            {portfolioItems.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-gray-500/50'} transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 