import React from "react";
import { PriceCard } from "./PriceCard";

const memorialItems = [
  {
    serviceName: "蹄鉄盾",
    price: "20,000～"
  },
  {
    serviceName: "勝利写真",
    price: "20,000～"
  },
  {
    serviceName: (
      <>
        <span>トレーディングカード</span>
        <br />
        <span className="text-sm">(一種)</span>
      </>
    ),
    price: "10,000～"
  },
  {
    serviceName: "記念冊子",
    price: "20,000～"
  }
];

const apparelItems = [
  {
    serviceName: "横断幕",
    price: "10,000～"
  },
  {
    serviceName: "Tシャツ/ポロシャツ",
    price: "10,000～"
  },
  {
    serviceName: "応援タオル",
    price: "10,000～"
  },
  {
    serviceName: "キャップ",
    price: "15,000～"
  }
];

const designItems = [
  {
    serviceName: "馬名/厩舎/牧場ロゴ",
    price: "30,000～"
  },
  {
    serviceName: "名刺",
    price: "8,000～"
  }
];

export function PriceSection() {
  return (
    <section
      className="box-border relative px-5 py-12 mx-auto my-0 w-full max-w-[1204px] max-sm:px-4 max-sm:py-0"
    >
      <h1
        className="mb-5 text-4xl font-bold leading-10 text-center text-black max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9"
      >
        料金
      </h1>
      <h2
        className="mb-12 text-2xl font-semibold leading-8 text-center text-gray-900 max-md:mb-8 max-md:text-xl max-md:leading-7 max-sm:mb-6 max-sm:text-lg max-sm:leading-6"
      >
        デザインの複雑さや数量によって価格が変動します
      </h2>
      <div
        className="grid grid-cols-3 gap-6 items-stretch mb-8 w-full max-md:flex-col max-md:gap-6 max-md:items-center"
      >
        <PriceCard
          title="記念品・メモリアルグッズ"
          items={memorialItems}
          headerRadius="0.6rem"
          cardRadius="0.75rem"
          cardWidth={350}
        />
        <PriceCard
          title="応援グッズ・アパレル"
          items={apparelItems}
          headerRadius="0.6rem"
          cardRadius="0.75rem"
          cardWidth={350}
        />
        <PriceCard
          title="ロゴ・デザイン"
          items={designItems}
          headerRadius="0.6rem"
          cardRadius="0.75rem"
          cardWidth={350}
        />
      </div>
      <aside
        className="box-border flex justify-center items-center p-6 mx-auto my-0 w-full bg-gray-50 rounded-lg max-w-[992px] max-sm:px-4 max-sm:py-5"
      >
        <p
          className="text-base leading-6 text-center text-gray-700 max-sm:text-sm max-sm:leading-5"
        >
          <span>
            ※
            詳細な価格は、デザインの複雑さや数量によって変動する場合があります。お気軽にお問い合わせください。
          </span>
          <br />
          <span>
            ※
            価格にプラスして印刷代、送料がかかります。以下以外もお気軽にご相談ください。
          </span>
        </p>
      </aside>
    </section>
  );
}

export default PriceSection; 