import React from "react";

export const PriceDisplay = ({ amount, additionalText }) => {
  return (
    <div className="font-semibold text-center">
      <span style={{ fontWeight: 700, fontSize: '14px' }}>¥</span>
      <span style={{ fontWeight: 700 }}>{amount}</span>
      <span style={{ fontWeight: 700, fontSize: '14px' }}>
        {additionalText}
      </span>
    </div>
  );
}; 