import React, { useState, useEffect, useCallback, useMemo } from "react";

import DotGrid from "./DotGrid";

const ArticleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);


  const articles = useMemo(
    () => [
      {
        id: 1,
        title: "Master Full Stack Development in 2025",
        description:
          "Learn modern web development with React, Node.js, and cutting-edge technologies. Build real-world projects and become job-ready.",
        category: "Development",
      },
      {
        id: 2,
        title: "Digital Marketing Mastery Course",
        description:
          "Transform your career with comprehensive digital marketing skills. Master SEO, social media, content marketing, and analytics.",
        category: "Marketing",
      },
      {
        id: 3,
        title: "Data Analytics Career Roadmap",
        description:
          "Discover the path to becoming a data analyst. Learn Python, SQL, visualization tools, and land your dream job in tech.",
        category: "Analytics",
      },
    ],
    []
  );

  const totalSlides = articles.length;

 
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  
  useEffect(() => {
    if (prefersReducedMotion || !isAutoPlaying) return;
    const id = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % totalSlides),
      5000
    );
    return () => clearInterval(id);
  }, [isAutoPlaying, totalSlides, prefersReducedMotion]);

  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % totalSlides),
    [totalSlides]
  );
  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides),
    [totalSlides]
  );
  const goToSlide = useCallback((index) => setCurrentSlide(index), []);

 

  return (
    <section
      className="relative isolate overflow-hidden w-full  h-screen min-h-[520px] md:min-h-[580px] lg:min-h-[620px] py-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured articles"
    >

      <div className="absolute inset-0 -z-10 pointer-events-none bg-black" aria-hidden="true ">
        <DotGrid
          dotSize={8}
          gap={12}
          baseColor="#212623"
          activeColor="#5227FF"
          proximity={prefersReducedMotion ? 0 : 150}
          shockRadius={prefersReducedMotion ? 0 : 250}
          shockStrength={prefersReducedMotion ? 0 : 4}
          resistance={prefersReducedMotion ? 0 : 700}
          returnDuration={prefersReducedMotion ? 0 : 1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      </div>

   
      <div
  className="relative z-10 flex min-h-[360px] sm:min-h-[420px] md:min-h-[480px] items-center justify-center text-center"
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => !prefersReducedMotion && setIsAutoPlaying(true)}
  onKeyDown={(e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  }}
>
  <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
    {/* Stage: relative with min-height so absolute slides center correctly */}
    <div className="relative mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
      {articles.map((article, index) => (
        <div
          key={article.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${totalSlides}`}
          aria-hidden={index === currentSlide ? "false" : "true"}
          className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 transition-all duration-700 ease-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6 sm:translate-x-10 pointer-events-none"
          }`}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/15 backdrop-blur-md border border-white/30 text-white">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-2xl">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            {article.description}
          </p>
        </div>
      ))}

     
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3"
        role="tablist"
        aria-label="Slide selector"
      >
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8 sm:w-10 shadow-lg"
                : "bg-white/50 w-2 sm:w-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default ArticleSlider;
