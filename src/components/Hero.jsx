import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import StudentRegistrationForm from "./Form";

const ArticleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Three featured articles with background images
  const articles = [
    {
      id: 1,
      title: "Master Full Stack Development in 2025",
      description: "Learn modern web development with React, Node.js, and cutting-edge technologies. Build real-world projects and become job-ready.",
     
      category: "Development",
      bgImage: "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ctaText: "Start Learning",
      program: "BCA"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery Course",
      description: "Transform your career with comprehensive digital marketing skills. Master SEO, social media, content marketing, and analytics.",
     
      category: "Marketing",
      bgImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      ctaText: "Join Program",
      program: "BBA"
    },
    {
      id: 3,
      title: "Data Analytics Career Roadmap",
      description: "Discover the path to becoming a data analyst. Learn Python, SQL, visualization tools, and land your dream job in tech.",
       
      category: "Analytics",
      bgImage: "https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg",
      ctaText: "Explore Path",
      program: "BCA"
    }
  ];

  const totalSlides = articles.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || showForm) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, showForm, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleCTAClick = (program) => {
    setShowForm(true);
    setIsAutoPlaying(false);
  };

  const handleFormSubmit = async (formData) => {
    console.log("Form Data:", formData);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert(`Thank you ${formData.name}! Your application for ${formData.program} has been submitted successfully.`);
      setShowForm(false);
      setIsAutoPlaying(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setIsAutoPlaying(true);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Image Slider */}
      <div 
        className="relative w-full h-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => !showForm && setIsAutoPlaying(true)}
      >
        
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${article.bgImage})` }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    
                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      {article.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                      {article.description}
                    </p>

                    
                    

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleCTAClick(article.program)}
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        {article.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                      
                      <button
                        onClick={() => handleCTAClick(article.program)}
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300"
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
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 z-20 text-white/80 text-sm font-medium">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeForm}
          />
          
          {/* Form Container */}
          <div className="relative z-10 w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Form Header */}
              <div className="bg-gray-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    Start Your Journey
                  </h3>
                  <button
                    onClick={closeForm}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close form"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Fill out the form below to get started
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <StudentRegistrationForm 
                  onSubmit={handleFormSubmit}
                  title=""
                  submitButtonText="Apply Now"
                  className="shadow-none border-none bg-transparent p-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArticleSlider;
