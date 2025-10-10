import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LoadingAnimation = ({
  logo = null,
  onComplete,
  autoRestart = false,
  backgroundColor = "black",
}) => {
  const svgRef = useRef();
  const containerRef = useRef();
  const timelineRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      );
    }

    const tl = gsap.timeline({
      repeat: autoRestart ? -1 : 2,
      repeatDelay: 0.3,
      defaults: { duration: 0.6, ease: "power2.inOut" },
      onComplete: () => {
        if (!autoRestart) {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              setTimeout(() => {
                setIsLoading(false);
                onComplete?.();
              }, 100);
            },
          });
        }
      },
    });

    // Set initial states
    gsap.set("#target1", { rotation: 45, svgOrigin: "50 50" });
    gsap.set("#target2", { rotation: 135, svgOrigin: "50 50" });
    gsap.set("#theSquare", { attr: { height: 0, y: 50 } });
    gsap.set("#loadingContent", { opacity: 1 });

    // Animation sequence
    tl.to("line", { attr: { x2: 100 } })
      .to("#target1", { rotation: 0 }, "turn")
      .to("#target2", { rotation: 180 }, "turn")
      .to("#target1", { y: -10 }, "move")
      .to("#target2", { y: 10 }, "move")
      .to("#theSquare", { attr: { height: 22, y: 38 } }, "move")
      .to("line", { attr: { x1: 50, x2: 50 } })
      .to("#loadingContent", { duration: 1, opacity: 0, ease: "none" });

    timelineRef.current = tl;

    return () => {
      tl?.kill();
    };
  }, [autoRestart, onComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 w-full h-full flex items-center justify-center bg-${backgroundColor} overflow-hidden`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20" />

      {/* Loading Animation Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center space-y-20"
      >
        {/* SVG Animation with Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-slate-200 rounded-full blur-xl scale-110 animate-pulse" />

          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="300"
            height="300"
            viewBox="0 0 100 100"
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            <defs>
              <clipPath id="theClipPath">
                <rect
                  id="theSquare"
                  x="0"
                  y="50"
                  width="100"
                  height="0"
                  fill="white"
                />
              </clipPath>
            </defs>

            <g id="clipPathReveal" clipPath="url(#theClipPath)">
              <g id="loadingContent">
                {/* Logo Image inside SVG */}
                {logo ? (
                  <image href={logo} x="25" y="30" width="60" height="40" />
                ) : (
                  <text
                    transform="translate(50 58)"
                    textAnchor="middle"
                    fontSize="14"
                    fill="white"
                    className="font-bold"
                  >
                    Skilllyards
                  </text>
                )}
              </g>
            </g>
          </svg>
        </div>

        <div className="flex space-x-2">
          {[0, 0.15, 0.3].map((delay, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 bg-white rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>

        {/* Status Text */}
        <p className="text-white/90 text-base md:text-lg font-medium text-center max-w-xs px-4">
          Welcome to Skilllyards
          <span className="inline-flex ml-0.5">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              .
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              .
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              .
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
