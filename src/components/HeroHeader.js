import React, { useEffect, useRef } from "react";
import { HeroContent } from "./HeroContent";

export function HeroHeader() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5; // スローモーション
      video.loop = true; // ループ再生を明示
    }
    // Parallax効果
    const handleScroll = () => {
      if (video) {
        const scrollY = window.scrollY;
        video.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full h-[700px] md:h-screen max-h-[800px] overflow-hidden text-center">
      {/* 背景動画 */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* 黒半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* コンテンツ */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center -mt-[50px]">
        <HeroContent />
      </div>
    </header>
  );
}

export default HeroHeader; 