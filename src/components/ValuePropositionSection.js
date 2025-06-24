import React from 'react';

export const ValuePropositionSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[600px] w-full max-w-[1200px] mx-auto overflow-hidden py-12">
      {/* パララックス背景画像 */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-fixed z-0"
        style={{
          backgroundImage: `url('/value-bg.jpg')`,
        }}
      />
      {/* 黒の半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* コンテンツ */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6 py-12">
        <h1 className="text-4xl font-bold leading-none text-white text-center mb-4 drop-shadow-lg">
          私たちのデザインが提供する3つの価値
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-white text-center mb-12 drop-shadow-md">
          勝った馬も、勝てなかった馬も、みんな宝物。
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
          {/* カード1 */}
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4 flex-1 min-w-[260px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">アイデアの具現化と提案</h2>
            <ul className="text-gray-800 text-base font-medium space-y-2 mx-auto text-left">
              <li>・「作りたいけど、何がいいか分からない」を解決</li>
              <li>・漠然としたイメージを、具体的なデザインに描き起こし</li>
            </ul>
          </div>
          {/* カード2 */}
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4 flex-1 min-w-[260px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">デザイナー馬主の知見</h2>
            <ul className="text-gray-800 text-base font-medium space-y-2 mx-auto text-left">
              <li>・勝利の物語や愛馬の個性をデザインに落とし込む</li>
              <li>・血統背景など、専門知識をデザインに活用</li>
              <li>・一般的なデザイナーでは伝わらないニュアンスを形に</li>
            </ul>
          </div>
          {/* カード3 */}
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4 flex-1 min-w-[260px] flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">面倒なプロセスを全て代行可</h2>
            <ul className="text-gray-800 text-base font-medium space-y-2 mx-auto text-left">
              <li>・デザインから印刷会社との連携、納品まで一貫サポート</li>
              <li>・馬主としての視点から、想いに最適なアイテムをご提案</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 