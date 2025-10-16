import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BubbleBackground } from "./animate-ui/components/backgrounds/bubble";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArticleSlider = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const sectionRef = useRef(null);
  const navArrowsRef = useRef([]);
  const dotsRef = useRef(null);
  const counterRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: "Master Full Stack Development in 2025",
      description:
        "Learn modern web development with React, Node.js, and cutting-edge technologies. Build real-world projects and become job-ready.",
      category: "Development",
      ctaText: "Start Learning",
      program: "BCA",
    },
    {
      id: 2,
      title: "Digital Marketing Mastery Course",
      description:
        "Transform your career with comprehensive digital marketing skills. Master SEO, social media, content marketing, and analytics.",
      category: "Marketing",
      ctaText: "Join Program",
      program: "BBA",
    },
    {
      id: 3,
      title: "Data Analytics Career Roadmap",
      description:
        "Discover the path to becoming a data analyst. Learn Python, SQL, visualization tools, and land your dream job in tech.",
      category: "Analytics",
      ctaText: "Explore Path",
      program: "BCA",
    },
  ];

  const totalSlides = articles.length;

  const animateSlideContent = useCallback(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      `.category-${currentSlide}`,
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
    )
      .fromTo(
        `.title-${currentSlide}`,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        `.description-${currentSlide}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4",
      )
      .fromTo(
        `.buttons-${currentSlide} > *`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.3",
      );
  }, [currentSlide]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navArrowsRef.current.filter(Boolean),
        { opacity: 0, x: (index) => (index === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          stagger: 0.2,
        },
      );

      if (dotsRef.current) {
        gsap.fromTo(
          dotsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power2.out" },
        );
      }

      if (counterRef.current) {
        gsap.fromTo(
          counterRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.9, ease: "power2.out" },
        );
      }

      animateSlideContent();
    }, sectionRef);

    return () => ctx.revert();
  }, [animateSlideContent]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(sectionRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(sectionRef.current, {
            scale: 0.98,
            opacity: 0.9,
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to(sectionRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    animateSlideContent();
  }, [currentSlide, animateSlideContent]);

  useEffect(() => {
    if (!isAutoPlaying || showForm) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, showForm, totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleCTAClick = useCallback(() => {
    setShowForm(true);
    setIsAutoPlaying(false);

    setTimeout(() => {
      const formModal = document.querySelector(".form-modal");
      if (formModal) {
        gsap.fromTo(
          formModal,
          { scale: 0.8, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        );
      }
    }, 10);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen overflow-hidden ${className}`}
    >
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              <div className="absolute inset-0 overflow-hidden w-full">
                <BubbleBackground />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <div className={`mb-6 category-${index}`}>
                      <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h1
                      className={`text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight title-${index} drop-shadow-2xl`}
                    >
                      {article.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-lg sm:text-xl lg:text-xl text-white/95 mb-10 leading-relaxed max-w-2xl description-${index} drop-shadow-lg`}
                    >
                      {article.description}
                    </p>

                    {/* Buttons */}
                    <div
                      className={`flex flex-col sm:flex-row gap-4 bottom-9 buttons-${index}`}
                    >
                      <button
                        onClick={() => handleCTAClick(article.program)}
                        className="group inline-flex items-center justify-center px-5 py-4 text-base sm:text-md font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                      >
                        {article.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => handleCTAClick(article.program)}
                        className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full hover:bg-white/30 hover:border-white/60 transition-all duration-300 shadow-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          ref={(el) => (navArrowsRef.current[0] = el)}
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group hover:scale-110 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>

        <button
          ref={(el) => (navArrowsRef.current[1] = el)}
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group hover:scale-110 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div
          ref={dotsRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSlider;
