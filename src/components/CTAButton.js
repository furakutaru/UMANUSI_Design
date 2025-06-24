import React from "react";

export function CTAButton({ children, onClick, className = "" }) {
  return (
    <button
      className={`gap-2.5 px-8 py-4 bg-white rounded-full border border-red-500 border-solid min-h-[62px] text-lg font-semibold leading-loose text-red-600 whitespace-nowrap max-md:px-5 ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
} 