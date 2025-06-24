import React from "react";
import { ProcessNumberBadge } from "./ProcessNumberBadge";
import { ProcessCard } from "./ProcessCard";

const processSteps = [
  {
    number: "01",
    title: "ご相談",
    description: "お客様のビジョンを<br />お聞かせください。<br />まずはXのリプライかDMでお気軽にご連絡ください。"
  },
  {
    number: "02",
    title: "ヒアリング",
    description: "詳細な要望をお伺いするための<br />ヒアリングを行います。<br />ご希望の内容や予算、納期などをお知らせください。"
  },
  {
    number: "03",
    title: "デザイン制作",
    description: "ヒアリング内容をもとに、<br />オリジナルデザインを制作します。<br />馬の特徴や厩舎のイメージを大切にしたデザインをご提案します。"
  },
  {
    number: "04",
    title: "レビュー・修正",
    description: "制作したデザインをご確認いただき、必要に応じて修正を行います。<br />ご満足いただけるまで調整いたします。"
  },
  {
    number: "05",
    title: "印刷・制作",
    description: "最終デザインが確定したら、<br />印刷・制作に進みます。<br />高品質な仕上がりを実現するため、信頼できる業者と連携しています。"
  },
  {
    number: "06",
    title: "お届け",
    description: "完成した商品をお届けします。<br />印刷所から直接お届けする場合もございます。"
  }
];

export default function Process() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto overflow-hidden py-16 min-h-[762px]">
      {/* パララックス背景画像 */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-fixed z-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/bcbd7e22bef8b422aebcfd3bc499b206ca37673a?placeholderIfAbsent=true')`,
        }}
      />
      {/* 黒の半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 flex flex-col items-center w-full h-full px-6">
        <header className="text-center">
          <h1 className="text-5xl font-bold leading-none text-white max-md:text-4xl">
            制作プロセス
          </h1>
          <p className="mt-5 text-2xl font-semibold leading-none text-white max-md:max-w-full">
            安心してご依頼いただけるよう、明確なプロセスでお進めします
          </p>
        </header>
        <div className="grid grid-cols-3 justify-center gap-x-16 gap-y-8 mt-14 w-full max-w-5xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[300px] min-h-[240px]"
              style={{ marginTop: '32px' }}
            >
              {/* ナンバーをカード左上角より上に重ねる（円の高さの半分くらい上） */}
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/4 z-20">
                <ProcessNumberBadge number={step.number} />
              </div>
              <ProcessCard
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 