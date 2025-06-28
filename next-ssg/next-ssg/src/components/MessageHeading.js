import React from 'react';

export const MessageHeading = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 break-words">
      {children}
    </h1>
  );
}; 