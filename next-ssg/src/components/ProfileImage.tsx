"use client";
import React from 'react';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = "Profile image"
}) => {
  return (
    <div className="w-full h-[250px] md:h-auto overflow-hidden md:overflow-visible border-b-8 md:border-b-0 border-black">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full h-full md:h-auto object-cover object-top"
      />
    </div>
  );
}; 