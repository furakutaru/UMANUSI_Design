import React from "react";

export function SceneCard({
  id,
  imageSrc,
  title,
  description,
  imageAspectRatio = "aspect-[1.18]",
  cardPadding = "pb-16"
}) {
  return (
    <article className="w-[300px] min-w-0 max-w-full h-full flex flex-col">
      <div className="flex flex-col bg-white rounded-xl border-2 border border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.05)] h-full flex-1 pb-6 w-full min-w-0">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-48 object-cover rounded-t-[0.6rem] min-w-0 ${id === 'retirement' ? 'object-top' : ''}`}
        />
        <div className="flex flex-col px-7 mt-6 max-md:px-5 flex-1 w-full min-w-0">
          <h3 className="text-xl font-bold leading-snug text-gray-900 break-words w-full min-w-0">
            {title}
          </h3>
          <p className="mt-2 text-base leading-6 text-gray-700 break-words w-full min-w-0">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
} 