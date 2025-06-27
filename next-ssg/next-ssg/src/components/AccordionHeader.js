import React from 'react';

export const AccordionHeader = ({ title, isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex justify-between items-center w-full px-6 py-4 text-left text-xl font-bold text-white bg-black transition-all duration-200 ${isOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
    >
      <span>{title}</span>
      <span className="text-3xl font-bold leading-none select-none">
        {isOpen ? "－" : "＋"}
      </span>
    </button>
  );
}; 