import React from 'react';
import ValueCard from './ValueCard';

const valuesData = [
  {
    title: "アイデアの具現化と提案",
    items: [
      "「作りたいけど、何がいいか分からない」を解決",
      "漠然としたイメージを、具体的なデザインに描き起こし",
    ],
  },
  {
    title: "デザイナー馬主の知見",
    items: [
      "勝利の物語や愛馬の個性をデザインに落とし込む",
      "血統背景など、専門知識をデザインに活用",
      "一般的なデザイナーでは伝わらないニュアンスを形に",
    ],
  },
  {
    title: "面倒なプロセスを全て代行可",
    items: [
      "デザインから印刷会社との連携、納品まで一貫サポート",
      "馬主としての視点から、想いに最適なアイテムをご提案",
    ],
  },
];

export const ValuePropositionSection = () => {
  return (
    <section className="relative w-full py-8 md:py-20 md:h-[580px] overflow-x-clip">
      {/* 背景とオーバーレイを横いっぱいに */}
      <div
        className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full bg-center bg-cover bg-fixed z-0"
        style={{ backgroundImage: `url('/value-bg.jpg')` }}
      />
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full bg-black/60 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 w-full h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
          私たちのデザインが提供する3つの価値
        </h1>
        <p className="mt-4 mb-8 md:mb-12 text-lg md:text-xl font-semibold text-white text-center drop-shadow-md">
          勝った馬も、勝てなかった馬も、みんな宝物。
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-5xl items-stretch">
          {valuesData.map((value, index) => (
            <ValueCard key={index} title={value.title} items={value.items} />
          ))}
        </div>
      </div>
    </section>
  );
}; 