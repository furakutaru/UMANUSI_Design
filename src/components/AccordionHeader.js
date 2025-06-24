import React, { useState } from 'react';

export const AccordionHeader = ({
  title,
  isExpanded = false,
  onToggle
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="relative mx-auto my-0 w-full cursor-pointer" onClick={handleToggle}>
        <div className={`bg-black shadow-sm w-full min-h-[60px] flex items-center px-6 relative transition-all duration-200 ${expanded ? 'rounded-t-xl' : 'rounded-xl'}`}>
          <h1 className="text-2xl font-bold leading-8 text-white flex-1 max-md:text-xl max-sm:text-lg max-sm:leading-8">
            {title}
          </h1>
          <span className="text-3xl font-bold leading-8 text-center text-white w-[30px] select-none">
            {expanded ? "－" : "＋"}
          </span>
        </div>
        {expanded ? (
          <div className="p-6 text-base text-white bg-black rounded-b-xl w-full">
            2023年地方馬主資格取得、デザイナー<br />
            ダビスタで競馬に触れナリタブライアンや黄金世代に青春を費やしブランクがあったのちウマ娘で復帰。<br />
            馬券はからっきしなので主にG1馬応援。現在は共有馬のみ。<br />
            夢は一頭持ち、重賞出走、ドバイワールドカップ。
          </div>
        ) : (
          <div className="w-full" />
        )}
      </div>
    </div>
  );
}; 