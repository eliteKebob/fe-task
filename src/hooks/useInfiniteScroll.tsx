import { useState, useEffect, useRef } from "react";

interface IProps {
  items: Array<unknown>;
  defaultCount: number;
  increaseFactor: number;
}

const useInfiniteScroll = ({ items, defaultCount, increaseFactor }: IProps) => {
  const [count, setCount] = useState(defaultCount);
  const loader = useRef<HTMLDivElement>(null);
  const isLoading = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading.current) {
          isLoading.current = true;
          setCount((prev) => {
            isLoading.current = false;
            return Math.min(prev + increaseFactor, items.length);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [increaseFactor, items.length]);

  return { count, loader };
};

export default useInfiniteScroll;
