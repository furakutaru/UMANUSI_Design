import { useEffect, useRef } from 'react';

export function useFadeInOnScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    node.classList.add('fade-in');
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
} 