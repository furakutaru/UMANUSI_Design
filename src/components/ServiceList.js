import React from "react";
import { ServiceCard } from "./ServiceCard";

const serviceCategories = [
  {
    title: "記念品・メモリアルグッズ",
    services: ["ぬいぐるみ", "デコチョコ", "マグカップ", "ボールペン", "QUOカード"],
    headerPadding: "px-3"
  },
  {
    title: "応援グッズ・アパレル",
    services: ["トートバッグ", "うちわ", "バッジ", "ゴム長靴", "ネクタイ/蝶ネクタイ"],
    headerPadding: "px-9"
  },
  {
    title: "ロゴ・デザイン",
    services: ["クリアファイル", "シール", "マスキングテープ", "モバイルバッテリー", "スマホケース"],
    headerPadding: "px-16"
  }
];

export function ServiceList() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-7 text-gray-900 whitespace-nowrap max-md:px-5 mb-16 mt-16">
      <h1 className="text-4xl font-bold leading-none text-center text-black max-md:max-w-full">
        対応サービス一覧
      </h1>
      <p className="mt-12 text-2xl font-semibold leading-none text-center max-md:mt-10 max-md:max-w-full">
        リスト以外でも対応可能ですまずはお気軽にご相談ください
      </p>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-12 w-full text-base font-medium max-md:mt-10 max-md:max-w-full">
        {serviceCategories.map((category, index) => (
          <ServiceCard
            key={index}
            title={category.title}
            services={category.services}
            headerPadding={category.headerPadding}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceList; 