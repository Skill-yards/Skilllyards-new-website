import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { COLORS } from "./colors";

export const QuoteCard = ({ info, truncate = true }) => {
  const fallbackImg = "/images/default-avatar.jpg";
  const rating = Math.round(info?.rating ?? 5);
  const text = truncate && info.text.length > 140 ? info.text.slice(0, 140) + "…" : info.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        className="h-full p-5 rounded-2xl border backdrop-blur"
        style={{
          background: COLORS.cardBg,
          borderColor: COLORS.cardBorder,
          boxShadow: COLORS.shadow,
        }}
      >
        <div className="flex items-start gap-3">
          <img
            src={info.photo || fallbackImg}
            alt={info.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImg;
            }}
            className="w-12 h-12 rounded-full object-cover border-2"
            style={{ borderColor: COLORS.accent }}
          />
          <div className="min-w-0">
            <p className="font-semibold truncate" style={{ color: COLORS.text }}>
              {info.name}
            </p>
            {info.position && (
              <p className="text-sm truncate" style={{ color: COLORS.subtext }}>
                {info.position}
              </p>
            )}
          </div>
        </div>

        <div className="relative mt-4">
          <Quote className="absolute -top-3 -left-1 opacity-40 w-4 h-4" color={COLORS.accent} />
          <p className="text-sm leading-relaxed" style={{ color: COLORS.text }}>
            {text}
          </p>
        </div>

        <div className="flex gap-[3px] mt-4" aria-label={`Rating: ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={`star-${info.id}-${i}`}
              size={16}
              fill={i < rating ? COLORS.accent : "#E6E0D2"}
              color="transparent"
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};