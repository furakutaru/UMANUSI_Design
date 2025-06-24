import React from 'react';

export const FeatureItem = ({ iconSrc, text }) => {
  return (
    <div className="flex gap-2 items-center min-h-6">
      <img
        src={iconSrc}
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        alt=""
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
}; 