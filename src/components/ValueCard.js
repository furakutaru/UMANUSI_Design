import React from 'react';

const ValueCard = ({ title, items }) => {
  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center flex-1 w-full">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-gray-900">
        {title}
      </h3>
      <ul className="text-gray-800 text-base font-medium space-y-2 text-left w-full modern-indent">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <span className="text-red-500 mr-2">・</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueCard; 