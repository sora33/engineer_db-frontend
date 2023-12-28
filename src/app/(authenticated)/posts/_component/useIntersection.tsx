import { useState, useEffect } from "react";

export const useIntersection = (
  ref: React.MutableRefObject<HTMLDivElement>
) => {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return () => {};

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    let observerRefCurrent: HTMLDivElement | null = null;
    if (ref.current) {
      // 監視を開始
      observer.observe(ref.current);
      observerRefCurrent = ref.current;
    }

    if (observerRefCurrent) {
      return () => {
        // 要素の監視を終了する
        observer.unobserve(observerRefCurrent as HTMLDivElement);
      };
    }
    return () => {};
  });

  return intersecting;
};
