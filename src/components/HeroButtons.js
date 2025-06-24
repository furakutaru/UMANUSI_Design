import React from "react";

export function HeroButtons() {
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
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <button 
        onClick={handleConsultationClick}
        className="flex-1 px-6 py-4 text-base font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
      >
        制作を相談・依頼する
      </button>
      <button 
        onClick={handlePortfolioClick}
        className="flex-1 px-6 py-4 text-base font-semibold text-red-500 bg-white rounded-full border border-red-500 hover:bg-red-50 transition-colors"
      >
        制作実績を見る
      </button>
    </div>
  );
} 