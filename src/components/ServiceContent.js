import React from 'react';
import { FeatureItem } from './FeatureItem';

export const ServiceContent = ({
  title,
  description,
  features,
  imageSrc,
}) => {
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <article className="mt-9 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-2 text-2xl font-bold leading-none text-black whitespace-nowrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/38d27a475b19909bcae500f4dff5fb1e1cf8adf4?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-start w-6 aspect-square"
                alt=""
              />
              <h3 className="basis-auto">{title}</h3>
            </header>
            <p className="self-stretch mt-7 text-lg leading-7 text-gray-700 max-md:max-w-full">
              {description}
            </p>
            <div className="mt-9 max-w-full w-[400px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full text-base text-black whitespace-nowrap max-md:mt-10">
                    {leftFeatures.map((feature, index) => (
                      <div key={index} className={index > 0 ? 'mt-3.5' : ''}>
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full text-base text-black whitespace-nowrap max-md:mt-10">
                    {rightFeatures.map((feature, index) => (
                      <div key={index} className={index > 0 ? 'mt-3.5' : ''}>
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src={imageSrc}
            className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-10 max-md:max-w-full"
            alt={`${title}のサービス内容`}
          />
        </div>
      </div>
    </article>
  );
}; 