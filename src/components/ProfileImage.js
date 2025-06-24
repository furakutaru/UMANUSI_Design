import React from 'react';

export const ProfileImage = ({
  src,
  alt = "Profile image"
}) => {
  return (
    <div className="w-[33%] max-md:ml-0 max-md:w-full">
      <img
        src={src}
        alt={alt}
        className="object-contain grow w-full aspect-[0.75] max-md:mt-10"
      />
    </div>
  );
}; 