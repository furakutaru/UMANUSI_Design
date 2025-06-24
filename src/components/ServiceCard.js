import React from "react";
import { ServiceItem } from "./ServiceItem";

export function ServiceCard({ title, services, headerPadding = "px-3" }) {
  return (
    <article
      className={"flex flex-col items-center self-stretch my-auto bg-white border border-black border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex-1 h-full min-h-0 w-[350px]"}
      style={{ borderRadius: '0.75rem' }}
    >
      <header
        className={`flex items-center justify-center h-14 gap-2.5 self-stretch ${headerPadding} max-w-full text-2xl font-bold leading-none text-center text-white bg-red-600 rounded-b-none min-h-14 w-full max-md:px-5`}
        style={{ borderTopLeftRadius: '0.6rem', borderTopRightRadius: '0.6rem' }}
      >
        {title}
      </header>
      <div className="flex flex-col w-full">
        {services.map((service, index) => (
          <ServiceItem key={index} name={service} isLast={index === services.length - 1} />
        ))}
      </div>
    </article>
  );
} 