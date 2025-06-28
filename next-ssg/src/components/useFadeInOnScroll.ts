import { useRef } from 'react';

export function useFadeInOnScroll<T extends HTMLElement = HTMLElement>(): React.RefObject<T | null> {
  // 何もしないrefを返すだけ
  return useRef<T | null>(null);
} 