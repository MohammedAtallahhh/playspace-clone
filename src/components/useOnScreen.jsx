import { useEffect, useState } from "react";

const useOnScreen = (ref, threshold = [0.5]) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > threshold[threshold.length - 1] - 0.1) {
          observer.unobserve(ref.current);
        }
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

export { useOnScreen };
