import React from 'react';
import { ExternalLinkIcon } from './ExternalLinkIcon';

export const FooterButton = ({
  children,
  onClick,
  className = ""
}) => {
  return (
    <button
      className={`relative shrink-0 h-[64px] w-[340px] max-sm:w-full max-sm:max-w-[340px] ${className}`}
      onClick={onClick}
      type="button"
    >
      <div className="absolute top-0 left-0 shrink-0 bg-white rounded-full border border-white border-solid h-[64px] w-[340px] max-sm:w-full" />
      <span className="absolute left-16 h-8 text-base font-semibold leading-8 text-center text-red-600 top-[18px] w-[220px] max-sm:left-2/4 max-sm:w-auto max-sm:-translate-x-2/4">
        {children}
      </span>
      <div className="absolute left-[30px] top-[19px] w-7 h-7 flex-shrink-0">
        <ExternalLinkIcon />
      </div>
    </button>
  );
}; 