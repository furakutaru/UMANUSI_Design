"use client";
import React from 'react';

interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  variant?: 'scene' | 'portfolio';
}

export const SliderArrow: React.FC<SliderArrowProps> = ({
  direction,
  onClick,
  className = "",
  variant
}) => {
  const arrowPath = direction === "left"
    ? "M7 13L1 7L7 1"
    : "M0.999999 1L7 7L1 13";

  const positionClasses = direction === "left"
    ? "left-0"
    : "right-0";

  const isScene = variant === "scene";
  const bgClass = isScene
    ? "bg-red-600 bg-opacity-60 border-none"
    : "bg-white bg-opacity-20 border-white border-opacity-30 border";

  return (
    <button
      className={`absolute top-1/2 z-10 w-12 h-12 -translate-y-1/2 cursor-pointer max-sm:w-10 max-sm:h-10 ${positionClasses} ${className}`}
      onClick={onClick}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      <div className={`absolute top-0 left-0 w-12 h-12 rounded-full backdrop-blur-[2px] ${bgClass} max-sm:w-10 max-sm:h-10`} />
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
        style={{
          width: "6px",
          height: "12px",
          strokeWidth: "2px",
          stroke: "#FFF",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)"
        }}
      >
        <path
          d={arrowPath}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}; 