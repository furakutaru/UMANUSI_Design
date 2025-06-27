import React from 'react';

export const TabButton = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`w-full max-w-xs text-xs gap-2.5 self-stretch px-8 py-4 my-auto rounded-full min-h-[48px] max-md:px-5 transition-all duration-200 ease-out hover:scale-105 hover:bg-red-500 hover:text-white font-semibold ${
        isActive
          ? 'text-white bg-red-500'
          : 'text-red-500 bg-white border border-red-500 border-solid'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}; 