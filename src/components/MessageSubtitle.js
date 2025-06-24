import React from 'react';

export const MessageSubtitle = ({ children }) => {
  return (
    <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 break-words">
      {children}
    </h2>
  );
}; 