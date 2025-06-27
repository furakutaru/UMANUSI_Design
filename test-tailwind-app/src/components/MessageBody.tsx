import React from 'react';

export const MessageBody = ({ children }) => {
  return (
    <p className="mt-6 text-base leading-relaxed text-gray-700 whitespace-pre-wrap break-words">
      {children}
    </p>
  );
}; 