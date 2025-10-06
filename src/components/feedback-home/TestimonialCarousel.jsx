import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { COLORS } from "./colors";
import { ArrowButton } from "./ArrowButton";
import { QuoteCard } from "./QuoteCard";
import { useCarousel } from "./useCarousel";

export const TestimonialCarousel = ({ items }) => {
  const visible = 2; // desktop visible cards
  const { index, auto, toggleAuto, next, prev, maxIndex } = useCarousel(items.length, visible);

  return (
    <div className="relative">
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
          <ArrowButton dir="right" onClick={next} disabled={index === maxIndex} />
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => toggleAuto(false)} // Pause on hover
        onMouseLeave={() => toggleAuto(true)}  // Resume on leave
      >
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${index * 50}%` }} // 2 cards per view
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          {items.map((it, idx) => (
            <div key={`${it.id}-${idx}`} className="min-w-[85%] sm:min-w-[60%] lg:min-w-[48%]">
              <QuoteCard info={it} truncate />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};