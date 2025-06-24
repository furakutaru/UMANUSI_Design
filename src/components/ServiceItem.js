import React from "react";

export function ServiceItem({ name, isLast }) {
  return (
    <div
      className={`flex items-center px-6 py-5 w-full border-b border-gray-200 text-base leading-relaxed min-h-[48px]${isLast ? ' border-b-0' : ''}`}
    >
      <span className="font-normal text-black w-full">{name}</span>
    </div>
  );
} 