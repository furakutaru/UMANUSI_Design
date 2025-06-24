import React from "react";

export function PriceListItem({ serviceName, price, isLast = false }) {
  return (
    <div
      className={`flex relative justify-between items-center px-4 py-7 w-full ${
        isLast ? 'border-b-0' : 'border-b border-solid border-black'
      } max-sm:px-3 max-sm:py-5`}
    >
      <div layer-name="background" />
      <div
        className="flex-1 text-base leading-6 text-gray-900 max-sm:text-sm max-sm:leading-5"
      >
        {serviceName}
      </div>
      <div
        className="font-bold leading-7 text-right text-red-600"
      >
        <span className="text-sm max-sm:text-xs">¥</span>
        <span className="text-lg max-sm:text-base">{price}</span>
      </div>
    </div>
  );
} 