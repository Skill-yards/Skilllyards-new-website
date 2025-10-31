import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play, Pause } from "lucide-react";
import { COLORS } from "./colors";
import { ArrowButton } from "./ArrowButton";
import { QuoteCard } from "./QuoteCard";
import { useCarousel } from "./useCarousel";

export const TestimonialCarousel = ({ items }) => {
  const visible = 2; // desktop visible cards
  const { index, auto, toggleAuto, next, prev, maxIndex } = useCarousel(
    items.length,
    visible,
  );

  const containerRef = useRef(null);
  const xOffset = 50; // each move = 50% (for 2 cards per view)

  // Animate on index change
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      xPercent: -index * xOffset,
      duration: 0.9,
      ease: "power3.inOut",
    });
  }, [index]);

  // Add a subtle auto pulse effect when auto is ON
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (auto) {
      gsap.to(el, {
        scale: 1.02,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    } else {
      gsap.killTweensOf(el);
      gsap.to(el, { scale: 1, duration: 0.3 });
    }
  }, [auto]);

  return (
    <div className="relative">
      {/* Top Controls */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAuto}
            className="px-3 py-1.5 text-xs rounded-full border bg-white/70 backdrop-blur hover:bg-white transition-colors"
            style={{ borderColor: COLORS.cardBorder, color: COLORS.text }}
          >
            {auto ? (
              <span className="inline-flex items-center gap-1">
                <Pause size={14} /> Auto
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                <Play size={14} /> Auto
              </span>
            )}
          </button>
          <span className="text-xs" style={{ color: COLORS.subtext }}>
            {index + 1}/{Math.max(1, maxIndex + 1)}
          </span>
        </div>
        <div className="flex gap-2">
          <ArrowButton dir="left" onClick={prev} disabled={index === 0} />
          <ArrowButton
            dir="right"
            onClick={next}
            disabled={index === maxIndex}
          />
        </div>
      </div>

      {/* Carousel Track */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => toggleAuto(false)}
        onMouseLeave={() => toggleAuto(true)}
      >
        <div
          ref={containerRef}
          className="flex gap-4 will-change-transform"
          style={{ transform: "translateX(0%)" }}
        >
          {items.map((it, idx) => (
            <div
              key={`${it.id}-${idx}`}
              className="min-w-[85%] sm:min-w-[60%] lg:min-w-[48%]"
            >
              <QuoteCard info={it} truncate />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
