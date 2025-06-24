import React from 'react';
import { MessageHeading } from './MessageHeading';
import { MessageSubtitle } from './MessageSubtitle';
import { MessageBody } from './MessageBody';
import { AccordionHeader } from './AccordionHeader';

export const ProfileContent = () => {
  return (
    <div className="ml-5 w-[67%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-16 text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <MessageHeading>
          私も、あなたと同じ一人の馬主です。
        </MessageHeading>

        <MessageSubtitle>
          勝った馬も、勝てなかった馬も、みんな宝物。
        </MessageSubtitle>

        <MessageBody>
          はじめましてデザイナー馬主のUMAです。
          <br />
          このサービスを始めたのは、一般的なデザインでは表現しきれない、競馬の世界特有の
          <br />
          「熱量」や「物語」を形にしたかったから。
          <br />
          勝負服の色に込められた想いや、一戦一戦のドラマ。
          <br />
          その価値を、私はあなたの次くらい理解しています。
          <br />
          <br />
          あなたの愛馬との絆、厩舎の誇りを、唯一無二のデザインへ。
          <br />
          一つひとつの想いを丁寧に翻訳し、記憶に残る宝物をお届けすることをお約束します。
        </MessageBody>
        <div className="mb-8" />
        <AccordionHeader title="プロフィール" className="mt-8" />
      </div>
    </div>
  );
}; 