"use client";
import React from "react";

interface ProcessNumberBadgeProps {
  number: string;
}

export const ProcessNumberBadge: React.FC<ProcessNumberBadgeProps> = ({ number }) => {
  return (
    <div className="z-10 mr-0 text-xl font-bold leading-snug text-white">
      <div className="px-5 w-16 h-16 bg-red-600 rounded-full border-2 border-black border-solid flex items-center justify-center">
        {number}
      </div>
    </div>
  );
}; 