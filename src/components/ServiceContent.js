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
    <article className="mt-9 px-4 w-full max-w-full">
      <div className="flex gap-8 md:gap-5 flex-col md:flex-row w-full">
        {/* テキスト＋特徴リスト */}
        <div className="w-full md:w-6/12">
          <div className="flex flex-col items-start w-full md:my-auto">
            <header className="flex gap-2 text-xl md:text-2xl font-bold leading-none text-black">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/38d27a475b19909bcae500f4dff5fb1e1cf8adf4?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-start w-6 aspect-square"
                alt=""
              />
              <h3 className="basis-auto">{title}</h3>
            </header>
            <p className="mt-5 md:mt-7 text-base md:text-lg leading-7 text-gray-700 w-full">
              {description}
            </p>
            <div className="mt-7 md:mt-9 w-full max-w-full">
              <div className="flex flex-col md:flex-row gap-5 w-full">
                {/* 左カラム */}
                <div className="w-full md:w-6/12">
                  <div className="flex flex-col items-start w-full text-base text-black">
                    {leftFeatures.map((feature, index) => (
                      <div key={index} className={index > 0 ? 'mt-3.5' : ''}>
                        <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* 右カラム（モバイルでは下に） */}
                <div className="w-full md:ml-5 md:w-6/12">
                  <div className="flex flex-col items-start w-full text-base text-black">
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
        {/* 画像 */}
        <div className="w-full md:ml-5 md:w-6/12 flex items-center justify-center">
          <img
            src={imageSrc}
            className="object-contain w-full rounded-lg aspect-[1.33] mt-6 md:mt-0 max-w-full"
            alt={`${title}のサービス内容`}
          />
        </div>
      </div>
    </article>
  );
}; 