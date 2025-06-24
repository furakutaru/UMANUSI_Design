import React from "react";

export function HeroButtons({ className = "" }) {
  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`flex flex-wrap gap-9 text-lg font-semibold leading-loose w-[572px] max-md:max-w-full ${className}`}>
      <button 
        onClick={handleConsultationClick}
        className="flex-auto gap-2.5 self-stretch px-11 py-4 text-white bg-red-500 rounded-full min-h-[62px] max-md:px-5"
      >
        制作を相談・依頼する
      </button>
      <button 
        onClick={handlePortfolioClick}
        className="flex-auto gap-2.5 self-stretch px-16 py-4 text-red-500 bg-white rounded-full border border-red-500 border-solid min-h-[62px] max-md:px-5"
      >
        制作実績を見る
      </button>
    </div>
  );
} 