import React from "react";

export const PortfolioCard = ({
  image,
  title,
  description,
  altText = "",
  cardWidth = 700,
  cardHeight = 400
}) => {
  return (
    <div
      className="relative shrink-0 mx-auto flex flex-col justify-end items-center rounded-lg"
      style={{ width: cardWidth, height: cardHeight }}
    >
      <img
        src={image}
        alt={altText}
        className="object-cover absolute top-0 left-0 rounded-lg w-full h-full"
      />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 40%)'
        }}
      />
      <div className="relative z-10 w-full px-6 pb-4 text-left">
        <h3 className="text-2xl font-bold leading-9 text-white mb-1">
          {title}
        </h3>
        <p className="text-base leading-7 text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
}; 