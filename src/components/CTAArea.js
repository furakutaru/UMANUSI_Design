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
    <section className="text-lg font-semibold leading-loose text-center text-red-600 whitespace-nowrap">
      <div className="flex flex-col justify-center items-center px-20 py-14 w-full bg-red-600 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[268px]">
          <CTAButton onClick={handleCTAClick}>
            制作を相談・依頼する
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default CTAArea; 