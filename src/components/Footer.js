import React from 'react';
import { FooterButton } from './FooterButton';

export const Footer = () => {
  const handleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full bg-red-700">
      <section id="contact" className="w-full bg-red-700 py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-8 md:gap-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">ご相談・お問い合わせ</h1>
          <h2 className="mt-4 text-lg md:text-xl font-semibold text-white text-center">
            ご依頼、ご相談は、XのリプライまたはDMにてお受けしております。
          </h2>
          <FooterButton onClick={handleConsultationClick}>
            制作を相談・依頼する
          </FooterButton>
        </div>
      </section>
      <section className="w-full bg-gray-900 py-3.5">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center">
          <p className="text-sm text-center text-gray-400">
            © 2024 UMANUSI Design. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer; 