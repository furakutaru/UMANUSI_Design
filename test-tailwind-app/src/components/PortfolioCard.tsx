import React from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  altText?: string;
}

export const PortfolioCard = ({
  image,
  title,
  description,
  altText = ""
}: PortfolioCardProps) => {
  return (
    <div
      className="relative shrink-0 mx-auto flex flex-col justify-end items-center rounded-lg w-full aspect-[7/4] md:max-w-[700px] md:aspect-[7/4]"
    >
      <img
        src={image.replace(/\.(png|jpg)$/, '.webp')}
        alt={altText}
        className="object-cover absolute top-0 left-0 rounded-lg w-full h-full"
        loading="lazy"
      />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 40%)'
        }}
      />
      <div className="relative z-10 w-full px-4 md:px-6 pb-4 text-left">
        <h3 className="text-lg md:text-2xl font-bold leading-7 md:leading-9 text-white mb-1">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-6 md:leading-7 text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
}; 