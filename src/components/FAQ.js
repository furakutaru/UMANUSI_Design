import React from "react";
import { FAQItem } from "./FAQItem";

const faqData = [
  {
    question: "依頼をするにはどうしたらいいですか？",
    answer: (
      <>
        <span>
          まずはご相談・ご依頼ボタンからXでリプライまたはDMでお願いいたします。
        </span>
        <br />
        <span>漠然としたイメージでもOKですお気軽にご連絡下さい。</span>
      </>
    ),
  },
  {
    question: "料金はどのように決まりますか？",
    answer: (
      <>
        <span>
          料金は、デザインの複雑さ、数量、使用する素材などにより異なります。
        </span>
        <br />
        <span>
          基本的な料金表はございますが、詳細はご相談の上で決定させていただきます。
        </span>
      </>
    ),
  },
  {
    question: "デザインの修正は可能ですか？",
    answer:
      "はい、お客様のご要望に沿ってデザインの修正を行います。最終的にご満足いただけるまで調整いたします。",
  },
  {
    question: "納品までの期間はどのくらいですか？",
    answer: (
      <>
        <span>
          一般的に、お打ち合わせからデザイン完了まで最短3日通常1週間程度かかります。
        </span>
        <br />
        <span>
          ただし、案件の複雑さや現在の混雑状況により変動する場合があります。
        </span>
        <br />
        <span>
          またそこから印刷に回す場合は1日〜1ヶ月ほどかかる場合がございます。
        </span>
      </>
    ),
  },
  {
    question: "支払い方法は何がありますか？",
    answer:
      "銀行振込とPayPayに対応しております。商品受け取り後1週間以内にお支払いお願いします。",
  },
];

export const FAQ = () => {
  return (
    <section className="box-border flex flex-col gap-16 items-center px-40 py-12 mx-auto my-0 w-full max-w-[1200px] max-md:gap-12 max-md:px-12 max-md:py-8 max-sm:gap-8 max-sm:px-5 max-sm:py-6">
      <header className="self-stretch text-center">
        <h1 className="text-4xl font-bold leading-10 text-black max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
          よくある質問
        </h1>
        <p className="mt-8 text-2xl font-semibold leading-8 text-gray-900 max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-7 max-md:mt-8 max-sm:mt-6">
          安心してご依頼いただけるよう、明確なプロセスでお進めします
        </p>
      </header>

      <div className="flex flex-col gap-6 items-start self-stretch">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ; 