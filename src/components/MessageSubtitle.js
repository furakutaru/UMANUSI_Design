import React from 'react';

export const MessageSubtitle = ({ children }) => {
  return (
    <h2 className="self-start mt-5 text-2xl leading-none text-left text-gray-900 max-md:max-w-full font-bold whitespace-nowrap">
      {children}
    </h2>
  );
}; 