import React, { useRef, useCallback } from "react";

const useObserver = (
  hasMore: boolean,
  loading: boolean,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, setPageNumber, hasMore]
  );

  return { lastElementRef };
};

export default useObserver;
