import React from 'react';

export const MessageBody = ({ children }) => {
  return (
    <p className="mt-7 text-lg leading-8 max-md:max-w-full text-black">
      {children}
    </p>
  );
}; 