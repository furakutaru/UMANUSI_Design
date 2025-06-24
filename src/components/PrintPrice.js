import React from "react";
import { PriceItem } from "./PriceItem";

export const PrintPrice = () => {
  return (
    <section className="overflow-hidden px-20 py-10 text-black max-md:px-5">
      <header className="text-center">
        <h1 className="text-4xl font-bold leading-none max-md:max-w-full">
          印刷代参考料金
        </h1>
        <p className="mt-9 text-2xl font-semibold leading-none text-gray-900 max-md:max-w-full">
          印刷物の種類や部数によって価格が変動します。下記は一例です
        </p>
      </header>

      <div className="mt-9 w-full text-lg leading-8 max-md:max-w-full">
        <div className="flex flex-wrap gap-10">
          <PriceItem
            productName="名刺20部両面カラー"
            amount="1,050"
            additionalText="（送料込み）"
          />
          <PriceItem
            productName="横断幕90×110ｃｍ"
            amount="5,8845"
            additionalText="（送料込み）"
          />
        </div>

        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <article className="overflow-hidden flex-1 grow shrink-0 pt-6 bg-white basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-md:max-w-full">
              <h3 className="grow shrink w-[146px]">
                キャッププリント15個
              </h3>
              <div className="grow shrink font-semibold text-center w-[206px]">
                <span style={{ fontWeight: 700, fontSize: '14px' }}>¥</span>
                <span style={{ fontWeight: 700 }}>35,000</span>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  （送料、キャップ代込み）
                </span>
              </div>
            </div>
            <hr className="shrink-0 mt-5 h-px border-b border-solid border-gray-200 max-md:max-w-full" />
          </article>

          <PriceItem
            productName="トレーディングカード1種20枚"
            amount="1,920"
            additionalText="（送料込み）"
          />
        </div>

        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <article className="overflow-hidden flex-1 grow shrink-0 pt-6 bg-white basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-wrap gap-10 max-md:max-w-full">
              <h3 className="flex-auto w-60">
                アクリルスタンド5個75×100mm
              </h3>
              <div className="grow shrink font-semibold text-center w-[114px]">
                <span style={{ fontWeight: 700, fontSize: '14px' }}>¥</span>
                <span style={{ fontWeight: 700 }}>7,442</span>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>
                  （送料込み）
                </span>
              </div>
            </div>
            <hr className="shrink-0 mt-5 h-px border-b border-solid border-gray-200 max-md:max-w-full" />
          </article>

          <PriceItem
            productName="タオル5枚"
            amount="7,760"
            additionalText="（送料込み）"
          />
        </div>
      </div>
    </section>
  );
};

export default PrintPrice; 