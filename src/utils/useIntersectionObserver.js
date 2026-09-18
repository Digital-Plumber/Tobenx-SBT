/**
 * useIntersectionObserver — Reusable hook for scroll-triggered visibility.
 *
 * Returns a [ref, isVisible] tuple.
 * When the element enters the viewport (by `threshold`), `isVisible` flips to true.
 * The observer disconnects after first trigger unless `once = false`.
 */
import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
