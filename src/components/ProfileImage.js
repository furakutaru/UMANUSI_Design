import React from 'react';

export const ProfileImage = ({
  src,
  alt = "Profile image"
}) => {
  return (
    <div className="w-full">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}; 