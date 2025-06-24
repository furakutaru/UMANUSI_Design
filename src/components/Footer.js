import React from 'react';
import { FooterButton } from './FooterButton';

export const Footer = () => {
  const handleConsultationClick = () => {
    // Add consultation/contact functionality here
    console.log('Consultation button clicked');
  };

  return (
    <footer className="flex flex-col items-start w-full bg-red-700">
      <section id="contact" className="flex flex-col gap-9 items-center px-10 py-14 w-full max-md:px-8 max-md:py-10 max-sm:gap-6 max-sm:px-3 max-sm:py-8">
        <h1 className="text-5xl font-bold leading-10 text-center text-white max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          ご相談・お問い合わせ
        </h1>
        <p className="text-2xl font-semibold leading-8 text-center text-white max-md:text-xl max-md:leading-7 max-sm:text-base max-sm:leading-6">
          ご依頼、ご相談は、XのリプライまたはDMにてお受けしております。
        </p>
        <FooterButton onClick={handleConsultationClick}>
          制作を相談・依頼する
        </FooterButton>
      </section>
      <section className="flex flex-col gap-2.5 justify-center items-center px-96 py-3.5 w-full bg-gray-900 max-md:px-16 max-md:py-3.5 max-sm:px-5 max-sm:py-3.5">
        <p className="text-sm leading-5 text-center text-gray-400">
          © 2024 UMANUSI Design. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer; 