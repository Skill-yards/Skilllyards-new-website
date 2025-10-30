import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { COLORS } from "./colors";

export const VideoPlayer = ({ videoIds, sticky = true }) => {
  const [current, setCurrent] = useState(videoIds[0]);
  const wrapperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setAutoplay(entry.isIntersecting),
      { threshold: 0.6 },
    );
    if (wrapperRef.current) obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, []);
  //TODO: Unmute the video by default when it is in view --> currently muted to avoid intrusive experience

  return (
    <div
      ref={wrapperRef}
      className={`${sticky ? "lg:sticky lg:top-6" : ""} lg:h-auto max-h-[600px]`}
    >
      <Card
        className="h-full flex rounded-2xl border overflow-hidden backdrop-blur"
        style={{
          background: COLORS.cardBg,
          borderColor: COLORS.cardBorder,
          boxShadow: COLORS.shadow,
        }}
      >
        <div className="flex w-full h-full">
          <div className="flex-1 flex items-center justify-center bg-black">
            <div className="w-[90%] aspect-[9/16] mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${current}?autoplay=${autoplay ? 1 : 0}&mute=1&modestbranding=1&rel=0&controls=1&playsinline=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                style={{ background: "#000", borderRadius: "1rem" }}
                title="Student Testimonial"
              />
            </div>
          </div>

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
                    boxShadow:
                      current === id ? `0 0 0 2px ${COLORS.accent}` : "none",
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
