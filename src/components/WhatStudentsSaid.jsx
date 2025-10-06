import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// ---------- Theme Tokens ----------
const COLORS = {
  bg: "#F7F6F3",
  cardBg: "rgba(255,255,255,0.7)",
  cardBorder: "#EAE6DF",
  text: "#2F2A25",
  subtext: "#7C736A",
  accent: "#D4AF37",
  shadow: "0 12px 35px rgba(0,0,0,0.08)",
};

// ---------- Quote Card ----------
const QuoteCard = ({ info, truncate = true }) => {
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

// ---------- Carousel ----------
const ArrowButton = ({ dir, onClick, disabled }) => (
  <button
    type="button"
    aria-label={dir === "left" ? "Previous" : "Next"}
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full border bg-white/80 backdrop-blur hover:bg-white transition 
                shadow-sm disabled:opacity-40 disabled:cursor-not-allowed`}
    style={{ borderColor: COLORS.cardBorder }}
  >
    {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </button>
);

const TestimonialCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const visible = 2; // desktop visible cards
  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    if (!auto || items.length <= visible) return;
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 3500);
    return () => clearInterval(id);
  }, [auto, items.length, maxIndex]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAuto((s) => !s)}
            className="px-3 py-1.5 text-xs rounded-full border bg-white/70 backdrop-blur hover:bg-white transition"
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
          <ArrowButton dir="left" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0} />
          <ArrowButton dir="right" onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))} disabled={index === maxIndex} />
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setAuto(false)}
        onMouseLeave={() => setAuto(true)}
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

// ---------- Video Player (Tall, vertical thumbs on right) ----------
const VideoPlayer = ({ videoIds, sticky = true }) => {
  const [current, setCurrent] = useState(videoIds[0]);
  const wrapperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setAutoplay(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);

  return (
  <div
    ref={wrapperRef}
className={`${sticky ? "lg:sticky lg:top-6" : ""} lg:h-auto max-h-[600px]`}
  >
    <Card
      className="h-full flex rounded-2xl border overflow-hidden backdrop-blur"
      style={{ background: COLORS.cardBg, borderColor: COLORS.cardBorder, boxShadow: COLORS.shadow }}
    >
      {/* Main flex: player left, thumbs right */}
      <div className="flex w-full h-full">
        
        {/* Video fills parent height */}
        <div className="flex-1 flex items-center justify-center bg-black">
          <div className="w-[90%] aspect-[9/16] mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-black">
            {/* YouTube iframe fills parent */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${current}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1&playsinline=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              style={{ background: "#000", borderRadius: "1rem" }}
              title="Student Testimonial"
            />
          </div>
        </div>
        
        {/* Vertical Thumbnail Rail */}
        <div
          className="w-[92px] border-l flex flex-col h-full"
          style={{ borderColor: COLORS.cardBorder }}
        >
          <div className="h-full overflow-y-auto py-3 px-2 flex flex-col gap-2 justify-start">
            {videoIds.map((id, idx) => (
              <button
                key={`${id}-${idx}`}
                onClick={() => setCurrent(id)}
                className={`relative w-full aspect-[9/16] rounded-lg overflow-hidden border transition ${
                  current === id ? "ring-2" : ""
                }`}
                style={{
                  borderColor: COLORS.cardBorder,
                  boxShadow: current === id ? "0 0 0 2px " + COLORS.accent : "none",
                }}
                aria-label={`Play video ${id}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

};

// ---------- Main ----------
const WhatStudentsSaid = () => {
  const reviews = useMemo(
    () => [
      {
        id: 1,
        name: "Girish Kumar",
        position: "Full-Stack Graduate",
        text:
          "The full-stack course at Skillyards prepared me thoroughly for the industry. From writing clean code to understanding system design, I gained hands-on experience that helped me get placed at SN Digitech.",
        photo: "Founder/student/girish.png",
        rating: 5,
      },
      {
        id: 2,
        name: "Sumit Kumar",
        position: "Beginner to Frontend",
        text:
          "Before joining Skillyards, I had no prior knowledge of coding. Over the past months, I've learned HTML, CSS, and JavaScript while improving my communication and confidence.",
        photo: "Founder/student/sumit.webp",
        rating: 4,
      },
      {
        id: 3,
        name: "Raghvendra",
        position: "Software Trainee",
        text:
          "Learning at Skillyards gave me practical exposure and one-on-one mentorship. The projects and reviews helped me grow professionally and personally.",
        photo: "Founder/student/hm.jpg",
        rating: 5,
      },
    ],
    []
  );

  const videoIds = useMemo(
    () => ["e2Rutd_ZIoA", "oKJ8kzPf_Ds", "vphzE_WqcPc"],
    []
  );

  return (
    <section
      className="py-12 px-4 lg:px-8"
      style={{ background: COLORS.bg }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="font-serif font-bold text-2xl md:text-3xl tracking-tight"
            style={{ color: COLORS.text }}
          >
            Hear from Our Students
          </h2>
          <div
            className="h-1 w-24 mx-auto mt-3 rounded-full"
            style={{ background: COLORS.accent }}
          />
          <p className="mt-3 text-sm md:text-base" style={{ color: COLORS.subtext }}>
            Real outcomes, real stories — text and video testimonials from our learners.
          </p>
        </div>

        {/* Split */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Carousel + See all */}
          <div className="w-full lg:w-[68%]">
            <TestimonialCarousel items={reviews} />

            {/* See All Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="mt-6 mx-auto block px-5 py-2 rounded-full font-medium transition border"
                  style={{
                    background: COLORS.accent,
                    color: "#1F1A13",
                    borderColor: "transparent",
                  }}
                >
                  See All Reviews
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-4xl max-h-[80vh] overflow-y-auto rounded-2xl p-6"
                style={{ background: COLORS.bg, borderColor: COLORS.cardBorder }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {reviews.map((r, idx) => (
                    <QuoteCard key={`${r.id}-all-${idx}`} info={r} truncate={false} />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right: Tall Sticky Video */}
          <div className="w-full lg:w-[32%] lg:self-start">
            <VideoPlayer videoIds={videoIds} sticky />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatStudentsSaid;
