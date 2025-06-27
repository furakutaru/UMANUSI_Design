import React from 'react';

interface FeatureItemProps {
  iconSrc: string;
  text: string;
}

export const FeatureItem = ({ iconSrc, text }: FeatureItemProps) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={iconSrc}
        className="hidden md:block object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        alt=""
      />
      <div className="self-stretch my-auto w-full break-words text-sm">{text}</div>
    </div>
  );
}; 