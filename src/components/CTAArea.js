import React from "react";
import { CTAButton } from "./CTAButton";

export function CTAArea() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-red-600">
      <div className="flex flex-col items-center justify-center">
        <CTAButton onClick={handleCTAClick} className="h-[64px] w-[340px] text-xl">
          制作を相談・依頼する
        </CTAButton>
      </div>
    </section>
  );
} 