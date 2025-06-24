import React from "react";

export const CheckIcon = ({ className = "" }) => {
  return (
    <div className={`relative w-7 h-7 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-full"
      >
        <path
          d="M20.7987 9.00341C21.2554 11.2447 20.9299 13.5748 19.8765 15.6052C18.8231 17.6356 17.1056 19.2435 15.0102 20.1607C12.9148 21.078 10.5683 21.2492 8.36196 20.6458C6.15563 20.0424 4.22285 18.7008 2.88593 16.8448C1.54902 14.9889 0.88878 12.7306 1.01532 10.4468C1.14186 8.16294 2.04754 5.9915 3.58131 4.29458C5.11508 2.59766 7.18424 1.47784 9.44372 1.12186C11.7032 0.765884 14.0164 1.19527 15.9977 2.33841"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-2/3 h-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <path
          d="M0.997559 8.00391L3.99756 11.0039L13.9976 1.00391"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}; 