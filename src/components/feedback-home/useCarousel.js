import { useState, useEffect } from "react";

export const useCarousel = (itemsLength, visible = 2) => {
  const maxIndex = Math.max(0, itemsLength - visible);
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || itemsLength <= visible) return;
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 3500);
    return () => clearInterval(id);
  }, [auto, itemsLength, maxIndex, visible]);

  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const toggleAuto = () => setAuto((s) => !s);

  return { index, auto, toggleAuto, next, prev, maxIndex };
};