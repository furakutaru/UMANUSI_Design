import React from 'react';

export const MessageHeading = ({ children }) => {
  return (
    <h1 className="self-start text-4xl leading-none text-center max-md:max-w-full font-bold text-black whitespace-nowrap">
      {children}
    </h1>
  );
}; 