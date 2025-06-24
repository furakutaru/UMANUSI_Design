import React from "react";
import { PriceListItem } from "./PriceListItem";

export function PriceCard({ title, items, headerRadius = '0.6rem', cardRadius = '0.75rem', cardWidth = 350 }) {
  return (
    <div
      className={"flex relative flex-col items-center bg-white border border-black border-solid shadow-sm flex-1 h-full min-h-0"}
      style={{ borderRadius: cardRadius, minHeight: 0, width: cardWidth }}
    >
      <header
        className={"flex items-center justify-center h-14 px-4 py-0 w-full text-2xl font-bold leading-6 text-center text-white bg-red-600 rounded-b-none max-md:px-3 max-md:py-0 max-md:text-xl max-sm:px-2 max-sm:py-0 max-sm:text-lg max-sm:leading-5"}
        style={{ borderTopLeftRadius: headerRadius, borderTopRightRadius: headerRadius }}
      >
        {title}
      </header>
      <div className="flex flex-col flex-1 min-h-0 w-full h-full">
        {items.map((item, index) => (
          <PriceListItem
            key={index}
            serviceName={item.serviceName}
            price={item.price}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
} 